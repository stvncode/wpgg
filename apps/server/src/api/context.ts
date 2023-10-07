import type { inferAsyncReturnType } from '@trpc/server'
import { TRPCError } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import { verify } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { authConfig } from '../../config/authConfig'

export const prisma = new PrismaClient()

export interface User {
  email: string
  role: 'user' | 'admin'
}

const decodeAndVerifyJwtToken = (token: string) => {
  const decoded = verify(token, authConfig.secretKey)
  return decoded as User
}

export const createContext = ({ req, res }: CreateFastifyContextOptions) => {
  if (req.headers.authorization) {
    try {
      const user = decodeAndVerifyJwtToken(req.headers.authorization.split(' ')[1])
      return { req, res, prisma, user }
    } catch (err) {
      throw new TRPCError({ message: 'Unauthorized', code: 'UNAUTHORIZED' })
    }
  }

  return { req, res, prisma }
}

export type Context = inferAsyncReturnType<typeof createContext>
