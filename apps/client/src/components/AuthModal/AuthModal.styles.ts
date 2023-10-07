import { Cross2Icon } from '@radix-ui/react-icons'
import { Button, Dialog } from '@radix-ui/themes'
import { styled } from '@stitches/react'

export const ModalImg = styled('img', {
  width: '22rem',
  marginBottom: '-1rem',
})

export const ModalContent = styled(Dialog.Content, {
  minWidth: '55rem !important',
  padding: '0 !important',
})

export const CloseModal = styled(Cross2Icon, {
  width: '1.5rem',
  height: '1.5rem',
  padding: '.5rem',
})
