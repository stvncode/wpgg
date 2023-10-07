import { Flex, Text } from '@radix-ui/themes'
import { FC } from 'react'

interface FormLabelProps {
    name: string
}

export const FormLabel = ({ name }: FormLabelProps) => (
    <Flex gap="2">
        <label htmlFor={name.toLowerCase()}>{name}</label>
        <Text color="red">*</Text>
    </Flex>
)
