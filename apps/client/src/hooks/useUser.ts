import { User } from 'server/src/api/context'

export const useUser = () => {
  const user = JSON.parse(localStorage.getItem('user') as string) as User

  const setUser = (token: string) => {
    localStorage.setItem('user', token)
  }

  return { user, setUser }
}
