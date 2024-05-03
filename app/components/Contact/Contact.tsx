import React from 'react'
import Section from '../Section'
import { Button, Text } from '@mantine/core'

const Contact = () => {
    return (
        <Section >
            <Text
                ta={'center'}
                c='var(--mantine-primary-color-filled)'
                fz={{
                    base: 'calc(var(--mantine-font-size-sm) * 3)',
                    lg: 'calc(var(--mantine-font-size-lg) * 3)',
                }}
            > Contact Me</Text>
            <Text
                fz={{
                    lg: 'calc(var(--mantine-font-size-lg) * 1.25)'
                }}
                mx='auto'
                ta={'center'}
                w={{ lg: 900 }}
            >
                Curious minds and passionate collaborators welcome! Feel free to send a message and let&apos;s explore the possibilities together.
                This invites those who share your interests and desire to work together.
            </Text>
            <Button mx='auto' size='lg' w={{lg: 150}}>Contact Me</Button>
        </Section>
    )
}

export default Contact