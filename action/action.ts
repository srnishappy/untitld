'use server';
import { profileSchema, validateWithZod } from '@/utils/schema';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import db from '@/utils/db';
import { redirect } from 'next/navigation';
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error('Unauthorized');
  if (!user.privateMetadata.hasProfile) redirect('/profile/create');
  return user;
};
const renderError = (error: unknown): { message: string } => {
  return { message: error instanceof Error ? error.message : 'Unknown error' };
};
export const createProfileAction = async (prev: any, formData: FormData) => {
  try {
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    // console.log('validateField', validateField);
    // return { message: 'success' };
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validateField,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
  redirect('/');
};
