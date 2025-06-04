export type actionFunction = (
  prev: any,
  formData: FormData
) => Promise<{ message: string }>;
