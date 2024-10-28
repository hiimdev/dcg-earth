import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string({
    required_error: 'Please fill out this field.',
  }),
  email: z
    .string({
      required_error: 'Please fill out this field.',
    })
    .email({
      message: 'Please enter an email address.',
    }),
  subject: z.string({
    required_error: 'Please fill out this field.',
  }),
  message: z.string().optional(),
});

export type ContactFormType = z.infer<typeof contactSchema>;
