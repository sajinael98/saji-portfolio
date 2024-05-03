"use client"
import React, { useRef } from 'react'
import { ServiceCardProps } from './ServiceCard.interface'
import { Paper, Space, Stack, Text, ThemeIcon } from '@mantine/core'
import { motion, useInView } from 'framer-motion'

const vairants = {
    initial: { opacity: 0, translateX: -50 },
    animate: { opacity: 1, translateX: 0 }
}

const ServiceCard = ({ index, service }: ServiceCardProps) => {
    const { description, icon: Icon, title } = service
    const serviceCardRef = useRef(null)
    const isServiceCardRefInView = useInView(serviceCardRef, { once: true })
    const animate = isServiceCardRefInView ? 'animate' : 'initial'

    return (
        <Paper
            p={'md'}
            shadow="md"
            radius='md'
            key={title}
            h={300}
            bg='dark.6'
            ref={serviceCardRef}
            component={motion.div}
            variants={vairants}
            initial={'initial'}
            animate={animate}
            transition={{
                delay: 0.1 * index,
                duration: 0.5
            }}
        >
            <ThemeIcon size={'xl'} style={{ borderRadius: '50%' }} h={56} w={56} variant="light" c='var(--mantine-primary-color-filled)'>
                <Icon width={'62%'} height={'62%'} stroke={1} />
            </ThemeIcon>
            <Space  h="md" />
            <Text tt='capitalize' c='var(--mantine-primary-color-filled)' flex={1} fz={{ base: 'calc(var(--mantine-font-size-sm) * 1.5)', lg: 'calc(var(--mantine-font-size-lg) * 1.5)' }}>
                {title}
            </Text>
            <Space  h="md" />
            <Text c='dimmed'>
                {description}
            </Text>
        </Paper>
    )
}

export default ServiceCard