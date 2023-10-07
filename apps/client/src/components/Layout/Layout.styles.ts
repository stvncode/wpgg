import { Flex } from '@radix-ui/themes'
import { styled } from '@stitches/react'
import { HEADER_HEIGHT } from 'core/constant'

export const LayoutWrapper = styled(Flex, {
  flexDirection: 'column',
  height: `calc(100vh - ${HEADER_HEIGHT})`,
})
