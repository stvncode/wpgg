import SuperJSON from 'superjson'
import { useState } from 'react'
import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { trpc } from 'core/trpc'

export const useQueryTrpcClient = () => {
  const API_URL = import.meta.env.VITE_API_URL
  if (!API_URL) throw new Error('No app url env variable found')

  const [queryClient] = useState(() => new QueryClient())

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: API_URL,
          headers() {
            const userJson = localStorage.getItem('user')
            if (userJson) {
              const user = JSON.parse(userJson)
              if (user?.accessToken) {
                return {
                  authorization: `Bearer ${user?.accessToken}`,
                }
              }
            }
            return {}
          },
        }),
      ],
      transformer: SuperJSON,
    })
  )

  return { queryClient, trpcClient }
}
