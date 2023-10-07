import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { LoginSchema, loginSchema } from "./Login.schema"
import { Button, Flex, Select, Text, TextFieldInput } from "@radix-ui/themes"
import { LoginFormLabel, LoginFormWrapper } from "./Login.styles"
import { FormLabel } from "components/Form"
import { useNavigate } from "react-router-dom"
import { trpc } from "core/trpc"
import { useUser } from "hooks/useUser"
import { decodeAndVerifyJwtToken } from "core/utils"

export const LoginForm = () => {
    const { setUser } = useUser()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    })

    // const navigate = useNavigate();

    const signUpMutation = trpc.auth.signUp.useMutation({
        onSuccess({ email, role, }) {
            // toast.info('Success!');
            // navigate('/login');
            // useUser
            console.log(email, role)
        },
        onError(error) {
            // toast.error(error.message);
        },
    });

    const signInMutation = trpc.auth.signIn.useMutation({
        onSuccess(data) {
            // toast.info('Success!');
            // navigate('/login');
            // setUser({ email, role: role as UserRole })
            // setToken(accessToken)

            console.log('data', data)
            console.log(decodeAndVerifyJwtToken(data.accessToken))
        },
        onError(error) {
            // toast.error(error.message);
        },
    });
    const onSubmit = (values: LoginSchema) => {
        signInMutation.mutate(values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LoginFormWrapper>
                <LoginFormLabel>
                    <FormLabel name="Email" />
                </LoginFormLabel>
                <TextFieldInput {...register("email")} />
                {errors.email && (
                    <Text color="tomato">
                        {errors.email?.message}
                    </Text>
                )}
                <LoginFormLabel>
                    <FormLabel name="Role" />
                </LoginFormLabel>
                <select {...register("role")}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                {errors.role && (
                    <Text color="tomato">
                        {errors.role?.message}
                    </Text>
                )}
                <LoginFormLabel>
                    <FormLabel name="Password" />
                </LoginFormLabel>
                <TextFieldInput type="password" {...register("password")} />
                {errors.password && (
                    <Text color="tomato">
                        {errors.password?.message}
                    </Text>
                )}
                <Button type="submit">Login</Button>
            </LoginFormWrapper>
        </form>
    )
}
