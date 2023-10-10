import { useThemeContext } from '@radix-ui/themes'
import { ThemeAppearance } from 'domain/theme'
import { Toaster } from 'react-hot-toast'

export const Toast = () => {
    const { appearance } = useThemeContext()

    const isDark = appearance !== ThemeAppearance.Light

    const style = isDark ? {
        background: '#363636',
        color: '#fff',
    } : {
        background: '#fff',
        color: '#363636',
    }

    return <Toaster
        position="bottom-right"
        gutter={8}
        toastOptions={{
            className: '',
            duration: 5000,
            style,
        }}
    />
}