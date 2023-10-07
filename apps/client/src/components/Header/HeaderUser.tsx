import { PersonIcon } from '@radix-ui/react-icons'
import { Button, DropdownMenu } from '@radix-ui/themes'
import { AuthModal } from 'components/AuthModal/AuthModal'
import { useUser } from 'hooks/useUser'
import { useState } from 'react'

export const HeaderUser = () => {
    const { user } = useUser()

    const [modalState, setModalState] = useState<{ open: boolean, type: 'signIn' | 'signUp' }>({ open: false, type: 'signIn' })

    const onModalStateChange = (openState: boolean) =>
        setModalState({ open: openState, type: modalState.type })

    const onModalTypeChange = (type: 'signIn' | 'signUp') =>
        setModalState({ open: true, type: type })

    return <>
        {user?.email ?
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button size="2" radius='full' style={{ cursor: 'pointer', textTransform: 'uppercase' }}>
                        {user.email.slice(0, 2)}
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content sideOffset={10}>
                    <DropdownMenu.Item style={{ cursor: 'pointer' }} shortcut="⌘ L" color='red'>Sign out</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
            : <DropdownMenu.Root >
                <DropdownMenu.Trigger>
                    <Button size="2" radius='full' style={{ cursor: 'pointer' }}>
                        <PersonIcon />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content sideOffset={10}>
                    <DropdownMenu.Item style={{ cursor: 'pointer' }} shortcut="⌘ E" onClick={() => onModalTypeChange('signIn')}>Sign in</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item style={{ cursor: 'pointer' }} shortcut="⌘ D" onClick={() => onModalTypeChange('signUp')}>Sign up</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root >
        }
        <AuthModal open={modalState.open} setOpen={onModalStateChange} />
    </>
}
