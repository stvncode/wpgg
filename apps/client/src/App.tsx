import { Theme, ThemePanel } from '@radix-ui/themes'
import { QueryClientProvider } from '@tanstack/react-query'
import { router } from 'core/routes'
import { trpc } from 'core/trpc'
import { useQueryTrpcClient } from 'hooks/useQueryClient'
import { RouterProvider } from 'react-router-dom'

export const App = () => {
  const { queryClient, trpcClient } = useQueryTrpcClient()

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <Theme color="dark" accentColor="indigo">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <ThemePanel />
      </Theme>
    </trpc.Provider>
  )
}
