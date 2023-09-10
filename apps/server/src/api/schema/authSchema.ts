import { z } from 'zod'

export const userSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email(),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8),
})

export type SignInDto = z.TypeOf<typeof userSchema>
export type SignUpDto = z.TypeOf<typeof userSchema>
