import { DiscordLogoIcon, GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons"
import { Button, Checkbox, Flex, IconButton, Separator, Text, TextFieldInput } from "@radix-ui/themes"
import { LoginForm } from "features/Login"

interface AuthModalFormProps {
    tabs: 'signUp' | 'signIn'
    closeModal: () => void
}

export const AuthModalForm = ({ tabs, closeModal }: AuthModalFormProps) => (
    <Flex direction="column" p="1" ml="5" mt="7">
        <Flex direction="column" gap="4">
            <LoginForm tabs={tabs} closeModal={closeModal} />
            <Flex align="center" justify="center" gap="2">
                <IconButton>
                    <DiscordLogoIcon />
                </IconButton>
                <IconButton>
                    <GitHubLogoIcon />
                </IconButton>
                <IconButton>
                    <VercelLogoIcon />
                </IconButton>
            </Flex>
        </Flex>
    </Flex>
)
