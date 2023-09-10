import { userSchema } from '../schema/authSchema'
import { signIn, signUp } from '../modules/authModule'
import { noAuthProcedure, router } from '../trpc'

export const authRouter = router({
  signUp: noAuthProcedure
    .input(userSchema)
    .mutation(async ({ input, ctx }) => signUp(input, ctx)),

  signIn: noAuthProcedure
    .input(userSchema)
    .mutation(async ({ input, ctx }) => signIn(input, ctx)),
})
