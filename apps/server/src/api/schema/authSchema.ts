import { z } from 'zod'

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export const userSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email(),
  role: z.nativeEnum(UserRole, {
    required_error: 'Role is required',
  }),
  pseudo: z.string({required_error: 'Pseudo is required'}),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8),
})

export type SignInDto = z.TypeOf<typeof userSchema>
