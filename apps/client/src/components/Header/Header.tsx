import { HeaderWrapper } from './Header.styles'
import { Button, Flex, Text, useThemeContext } from '@radix-ui/themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { ThemeAppearance } from 'domain/theme'
import { useNavigate } from 'react-router-dom'
import { match } from 'ts-pattern'
import { AnimatePresence, motion } from 'framer-motion'
import { HeaderUser } from './HeaderUser'

export const Header = () => {
    const navigate = useNavigate()

    const { appearance, onAppearanceChange } = useThemeContext()

    const isDark = appearance !== ThemeAppearance.Light

    //Need to do this trick with document since radix/ui-theme is new and dark is not working properly
    const onThemeChange = () =>
        onAppearanceChange(match(appearance)
            .with(ThemeAppearance.Light, () => {
                document.documentElement.setAttribute('class', 'dark-theme');
                document.documentElement.style.colorScheme = 'dark'
                return ThemeAppearance.Dark
            })
            .otherwise(() => {
                document.documentElement.setAttribute('class', 'light-theme');
                document.documentElement.style.colorScheme = 'light'

                return ThemeAppearance.Light
            })
        )

    return (
        <HeaderWrapper justify="between">
            <Flex align="center" gap="3" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <Text size="6" weight="bold">Stvncode</Text>
            </Flex>
            <Flex align="center" gap="3">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        style={{ display: 'inline-block' }}
                        key={isDark ? 'dark' : 'light'}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Button size="2" radius='full' onClick={onThemeChange}>
                            {isDark ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </motion.div>
                </AnimatePresence>
                <HeaderUser />
            </Flex>
        </HeaderWrapper>
    )
}
