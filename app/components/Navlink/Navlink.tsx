import { NavLinkProps, Text } from '@mantine/core'
import React, { PropsWithChildren } from 'react'

const Navlink = ({ children }: PropsWithChildren) => {
    return (
        <Text fz={'calc(var(--mantine-font-size-sm) * 2)'} fw={500} c='dark.2'>
            {children}
        </Text>
    )
}

export default Navlink