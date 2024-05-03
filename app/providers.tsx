import { MantineProvider } from '@mantine/core'
import React, { PropsWithChildren } from 'react'
import { theme } from '../theme'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      {children}
    </MantineProvider>
  )
}

export default Providers