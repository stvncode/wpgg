import { Text } from "@radix-ui/themes"
import { FieldError } from 'react-hook-form'

export const FormError = ({ error }: { error?: FieldError }) =>
    error ? (
        <Text mt="-3" color="tomato" size="1">
            {error?.message}
        </Text>
    ) : null