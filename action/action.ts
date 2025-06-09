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
    const user = await currentUser();
    if (!user) throw new Error('Unauthorized');
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
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

export const createLandMarkAction = async (
  prev: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await currentUser();
    if (!user) throw new Error('Unauthorized');
    const rawData = Object.fromEntries(formData);
    console.log(rawData);
    return { message: 'success' };
    // const validateField = validateWithZod(profileSchema, rawData);
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
  redirect('/');
};
