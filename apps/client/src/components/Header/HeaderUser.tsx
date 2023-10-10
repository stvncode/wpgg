import { PersonIcon } from '@radix-ui/react-icons'
import { Button, DropdownMenu } from '@radix-ui/themes'
import { AuthModal } from 'components/AuthModal/AuthModal'
import { useUser } from 'hooks/useUser'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const HeaderUser = () => {
    const { user, deleteUser } = useUser()
    const navigate = useNavigate()

    const [modalState, setModalState] = useState<{ open: boolean, type: 'signIn' | 'signUp' }>({ open: false, type: 'signIn' })

    const onModalStateChange = (openState: boolean) =>
        setModalState({ open: openState, type: modalState.type })

    const onModalTypeChange = (type: 'signIn' | 'signUp') =>
        setModalState({ open: true, type: type })

    const logout = () => {
        deleteUser()
        navigate('/')
    }

    return <>
        {user?.email ?
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button size="2" radius='full' style={{ cursor: 'pointer', textTransform: 'uppercase' }}>
                        {user.pseudo.slice(0, 1)}
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content sideOffset={10}>
                    <DropdownMenu.Item style={{ cursor: 'pointer' }} shortcut="⌘ L" color='red' onClick={logout}>Sign out</DropdownMenu.Item>
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
        <AuthModal modalState={modalState} setOpen={onModalStateChange} />
    </>
}
