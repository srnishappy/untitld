'use server';
import { profileSchema, validateWithZod } from '@/utils/schema';

const renderError = (error: unknown): { message: string } => {
  return { message: error instanceof Error ? error.message : 'Unknown error' };
};
export const createProfileAction = async (prev: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    console.log('validateField', validateField);
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};
