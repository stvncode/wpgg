import type { User } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { sign } from 'jsonwebtoken'
import { hash, compare } from 'bcryptjs'
import type { SignInDto } from '../schema/authSchema'
import { authConfig } from '../../../config/authConfig'
import type { Context } from '../context'

type UserResponse = Omit<User, 'password'> & { accessToken: string }

export const signIn = async (input: SignInDto, ctx: Context): Promise<UserResponse> => {
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
    const bcryptHash = await hash(input.password, 10)

    const newUser = await ctx.prisma.user.create({
      data: {
        email: input.email,
        password: bcryptHash,
        role: input.role,
        pseudo: input.pseudo,
      },
    })

    const newToken = sign(
      {
        id: newUser.id,
        roles: newUser.role,
      },
      authConfig.secretKey,
      { expiresIn: authConfig.jwtExpiresIn }
    )

    return {
      id: newUser.id,
      email: newUser.email,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
      role: newUser.role,
      accessToken: newToken,
      pseudo: newUser.pseudo,
    }
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
    { expiresIn: authConfig.jwtExpiresIn }
  )

  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    role: user.role,
    accessToken: token,
    pseudo: user.pseudo,
  }
}
