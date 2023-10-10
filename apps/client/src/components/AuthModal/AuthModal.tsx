import { Button, Dialog, Flex } from '@radix-ui/themes'
import { CloseModal, ModalContent, ModalImg } from './AuthModal.styles'
import { useState } from 'react'
import { AuthModalForm } from './AuthModalForm'

interface AuthModalProps {
    modalState: {
        open: boolean;
        type: 'signIn' | 'signUp';
    }
    setOpen: (open: boolean) => void
}

export const AuthModal = ({ modalState, setOpen }: AuthModalProps) => {
    const [tabs, setTabs] = useState<'signUp' | 'signIn'>(modalState.type)

    const buttonVariants = (currentTab: typeof tabs) => tabs === currentTab ? 'soft' : 'ghost'

    const changeTabs = (tab: typeof tabs) => setTabs(tab)

    return (
        <Dialog.Root open={modalState.open} onOpenChange={setOpen}>
            <ModalContent>
                <Flex>
                    <ModalImg src='/link.jpeg' alt='link' />
                    <Flex direction="column" p="1" width="100%">
                        <Flex justify="between" align="center">
                            <Flex gap="4" align="center" ml="5">
                                <Button variant={buttonVariants('signUp')} onClick={() => changeTabs('signUp')}>SignUp</Button>
                                <Button variant={buttonVariants('signIn')} onClick={() => changeTabs('signIn')}>SignIn</Button>
                            </Flex>
                            <CloseModal style={{ cursor: 'pointer' }} onClick={() => setOpen(false)} />
                        </Flex>
                        <AuthModalForm tabs={tabs} closeModal={() => setOpen(false)} />
                    </Flex>
                </Flex>
            </ModalContent>
        </Dialog.Root>
    )
}
