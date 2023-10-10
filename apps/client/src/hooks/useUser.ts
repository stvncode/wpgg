import { User } from 'server/src/api/context'

export const useUser = () => {
  const user = JSON.parse(localStorage.getItem('user') as string) as User | undefined

  const setUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  const setToken = (token: string) => {
    localStorage.setItem('token', token)
  }

  const deleteUser = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return { user, setUser, setToken, deleteUser }
}
