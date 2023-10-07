import { DiscordLogoIcon, GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons"
import { Button, Checkbox, Flex, IconButton, Separator, Text, TextFieldInput } from "@radix-ui/themes"

interface AuthModalFormProps {
    tabs: 'signUp' | 'signIn'
}

export const AuthModalForm = ({ tabs }: AuthModalFormProps) => {
    return (
        <Flex direction="column" p="1" ml="5" mt="7">
            <Flex direction="column" gap="4">
                <TextFieldInput size="3" variant="surface" placeholder="Pseudo" />
                <TextFieldInput size="3" variant="surface" placeholder="Email" />
                <TextFieldInput size="3" variant="surface" placeholder="Password" />
                <Flex gap="3" align="center">
                    <Checkbox />
                    <Text size="1" color="gray">I agree to the <Text size="1" color="blue">Terms of Service</Text> and <Text size="1" color="blue">Privacy Policy</Text></Text>
                </Flex>
                <Button mt="5" size="3">
                    {tabs === 'signUp' ? 'Create an account' : 'Sign in'}
                </Button>
                <Flex mt="3" justify="center" align="center" width="100%">
                    <Separator size="3" />
                    <Text ml="4" mr="4" size="1" color="gray">or</Text>
                    <Separator size="3" />
                </Flex>
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
}
