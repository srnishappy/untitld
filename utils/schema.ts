import { z, ZodSchema } from 'zod';
export const profileSchema = z.object({
  firstName: z.string().min(2, { message: 'The fistname is too short' }),
  lastName: z.string().min(2, { message: 'The lastname is too short' }),
  userName: z.string().min(2, { message: 'The username is too short' }),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((err) => err.message);
    throw new Error(errors.join(','));
  }
  return result.data;
};
