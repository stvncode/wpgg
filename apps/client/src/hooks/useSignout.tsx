import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useSignout = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const signout = useCallback(() => {
        localStorage.removeItem('user')

        navigate('/login', {
            replace: true,
            state: {
                previousLocation: location,
            },
        })
    }, [location, navigate])

    return signout
}