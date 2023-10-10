import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { LoginSchema, loginSchema } from "./Login.schema"
import { Button, Checkbox, Flex, Separator, Text, TextFieldInput } from "@radix-ui/themes"
import { LoginFormLabel, LoginFormWrapper } from "./Login.styles"
import { FormError, FormLabel } from "components/Form"
import { useNavigate } from "react-router-dom"
import { trpc } from "core/trpc"
import { useUser } from "hooks/useUser"
import toast from 'react-hot-toast'
import { UserRole } from "server/src/api/schema/authSchema"
import { Loader } from "components/Loader"

export const LoginForm = ({ tabs, closeModal }: { tabs: 'signIn' | 'signUp', closeModal: () => void }) => {
    const { setUser, setToken } = useUser()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    })

    const navigate = useNavigate()

    const { mutateAsync, isLoading } = trpc.auth.signIn.useMutation({
        onSuccess(data) {
            toast.success('Success!')
            navigate('/login')
            setToken(data.accessToken)
            setUser({ email: data.email, pseudo: data.pseudo, role: data.role as UserRole })
            closeModal()
        },
        onError(error) {
            toast.error(error.message)
        },
    });
    const onSubmit = async (values: LoginSchema) => {
        await mutateAsync({ email: values.email, password: values.password, pseudo: values.pseudo, role: UserRole.ADMIN })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LoginFormWrapper>
                <LoginFormLabel>
                    <FormLabel name="Pseudo" />
                </LoginFormLabel>
                <TextFieldInput {...register("pseudo")} size="3" variant="surface" placeholder="Pseudo" />
                <FormError error={errors.pseudo} />
                <LoginFormLabel>
                    <FormLabel name="Email" />
                </LoginFormLabel>
                <TextFieldInput {...register("email")} size="3" variant="surface" placeholder="Email" />
                <FormError error={errors.email} />
                <LoginFormLabel>
                    <FormLabel name="Password" />
                </LoginFormLabel>
                <TextFieldInput type="password" {...register("password")} size="3" variant="surface" placeholder="Password" />
                <FormError error={errors.password} />
                <Flex gap="3" align="center">
                    <Checkbox defaultChecked {...register("terms")} />
                    <Text size="1" color="gray">I agree to the <Text size="1" color="blue">Terms of Service</Text> and <Text size="1" color="blue">Privacy Policy</Text></Text>
                </Flex>
                <FormError error={errors.terms} />
                <Button mt="2" size="3" type="submit">
                    {isLoading ? <Loader /> : tabs === 'signUp' ? 'Create an account' : 'Sign in'}
                </Button>
                <Flex mt="1" justify="center" align="center" width="100%">
                    <Separator size="3" />
                    <Text ml="4" mr="4" size="1" color="gray">or</Text>
                    <Separator size="3" />
                </Flex>
            </LoginFormWrapper>
        </form>
    )
}
