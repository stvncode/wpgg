import { UserRole } from 'server/src/api/schema/authSchema'
import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  role: z.nativeEnum(UserRole),
  password: z.string().min(6).max(100),
})

export type LoginSchema = z.infer<typeof loginSchema>
