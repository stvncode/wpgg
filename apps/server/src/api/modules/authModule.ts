import type { User } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { sign } from 'jsonwebtoken'
import { hash, compare } from 'bcryptjs'
import type { SignInDto, SignUpDto } from '../schema/authSchema'
import { authConfig } from '../../../config/authConfig'
import type { Context } from '../context'

type UserResponse = Omit<User, 'password'>
type SignUpResult = UserResponse & { accessToken: string }

export const signUp = async (
  input: SignUpDto,
  ctx: Context,
): Promise<UserResponse> => {
  const bcryptHash = await hash(input.password, 10)

  const user = await ctx.prisma.user.create({
    data: {
      email: input.email,
      password: bcryptHash,
      role: 'user',
    },
  })
  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    role: user.role,
  }
}

export const signIn = async (
  input: SignInDto,
  ctx: Context,
): Promise<SignUpResult> => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: input.email,
    },
  })

  const error = new TRPCError({
    message: 'Incorrect email or password',
    code: 'UNAUTHORIZED',
  })

  if (!user) {
    throw error
  }

  const result = await compare(input.password, user.password)

  if (!result) {
    throw error
  }

  const token = sign(
    {
      id: user.id,
      roles: user.role,
    },
    authConfig.secretKey,
    { expiresIn: authConfig.jwtExpiresIn },
  )

  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    role: user.role,
    accessToken: token,
  }
}
