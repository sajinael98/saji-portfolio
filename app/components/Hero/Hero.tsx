"use client"
import { Box, Button, Flex, Group, Paper, Stack, Text } from '@mantine/core'
import { IconMessage, IconRocket } from '@tabler/icons-react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { Suspense, useRef } from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
    const [text] = useTypewriter({
        words: ['full stack developer', 'react developer', 'spring boot developer'],
        loop: true,
    })

    return (
        <Flex className='full-height' direction={{ base: 'column-reverse', lg: 'row' }}>
            <Flex
                direction='column'
                flex={1}
                justify={{ base: 'flex-start', lg: 'center' }}
                gap='sm'
                component={motion.div}
                initial={{
                    x: '-100vw'
                }}
                animate={{ x: 0 }}
                transition={{ delay: 3 }}

            >
                <Text fw={500} tt='uppercase'>Hello there, welcome to my site</Text>
                <Text fz={{ base: 'calc(var(--mantine-font-size-sm) * 3)', lg: 'calc(var(--mantine-font-size-lg) * 3)' }}>
                    I&apos;m Saji Nael<br />
                    <Text c='yellow.6' tt='capitalize' inherit span>a {text}</Text>
                </Text>
                <Text c='dimmed'>
                    Full-stack developer building beautiful interfaces & powerful backends.
                    I bring ideas to life with expertise in both front-end & back-end technologies.
                    Let&apos;s collaborate and craft something amazing!
                </Text>
                <Group>
                    <Button w={150} leftSection={<IconRocket className='icon' />} component='a' href='#projects' >
                        See Projects
                    </Button>
                    <Button w={150} variant='outline' color='yellow.6' leftSection={<IconMessage className='icon' />}>
                        Contact me
                    </Button>
                </Group>
            </Flex>
            <Flex flex={0.8} h={{ lg: '100%' }} justify={{ base: 'center', lg: 'flex-end' }} align='center' component={motion.div}
                initial={{
                    x: '100vw'
                }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}>
                <Box h={{ base: '100%', lg: '90%' }} w={{ base: '100%', lg: '80%' }} pos='relative'>
                    <Image src="/test.svg" alt="" fill priority />
                </Box>
            </Flex>
        </Flex >
    )
}

export default Hero