import { userSchema } from '../schema/authSchema'
import { signIn } from '../modules/authModule'
import { noAuthProcedure, router } from '../trpc'

export const authRouter = router({
  signIn: noAuthProcedure
    .input(userSchema)
    .mutation(async ({ input, ctx }) => signIn(input, ctx)),
})
