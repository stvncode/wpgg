import { Flex } from '@radix-ui/themes'
import { HEADER_HEIGHT } from 'core/constant'
import { LoginForm } from 'features/Login'

export const Login = () => (
    <Flex align="center" justify="center" style={{ height: '100%', width: '100%' }}>
        <LoginForm />
    </Flex>
)

