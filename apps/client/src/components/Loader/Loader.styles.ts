import { keyframes, styled } from '@stitches/react'

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const LoaderContainer = styled('span', {
  width: '20px',
  height: '20px',
  border: '5px solid #FFF',
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: `${rotation} 1s linear infinite`,
})
