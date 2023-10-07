import { Button, Flex, Text } from '@radix-ui/themes'
import { useRouteError, useNavigate } from 'react-router-dom'

export const ErrorBoundary = () => {
    const error = useRouteError() as Error
    const navigate = useNavigate()

    console.error(error)

    return (
        <Flex style={{ marginTop: '$2', alignSelf: 'flex-start' }} gap="2" direction="column">
            <Text>An Error occured</Text>
            <Text>{error.message}</Text>
            <Button onClick={() => navigate(-1)}>go back</Button>
        </Flex>
    )
}
