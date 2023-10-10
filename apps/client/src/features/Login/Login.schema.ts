import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  pseudo: z.string({ required_error: 'Password must be 3 caracters lenght' }).min(3).max(100),
  password: z.string({ required_error: 'Password must be 8 caracters lenght' }).min(8).max(100),
  terms: z.string({ required_error: 'You must accept the erms and condition' }).default('true'),
})

export type LoginSchema = z.infer<typeof loginSchema>
