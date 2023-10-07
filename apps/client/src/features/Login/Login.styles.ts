import { Flex } from '@radix-ui/themes'
import { styled } from '@stitches/react'

export const LoginFormWrapper = styled(Flex, {
  gap: 20,
  flexDirection: 'column',
})

export const LoginFormLabel = styled('label', {
  marginBottom: '-1rem',
})
