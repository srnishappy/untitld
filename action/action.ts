'use server';
import { profileSchema, validateWithZod } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import db from '@/utils/db';
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error('Unauthorized');
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
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};
