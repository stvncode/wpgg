import { Flex } from "@radix-ui/themes"
import { useUser } from "hooks/useUser"

export const Home = () => {
    const { user } = useUser()

    return (
        <Flex mt="9" justify="center">
            {user ? <div>You are logged in as {user.pseudo}</div> : <div>You are not logged in</div>}
        </Flex>
    )
}
