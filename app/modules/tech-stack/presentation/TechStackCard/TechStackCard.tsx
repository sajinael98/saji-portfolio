"use client"
import { Card } from '@mantine/core'
import Image from 'next/image'
import React, { useRef } from 'react'
import { TechStackCardProps } from './TechStackCard.interface'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '../../../../hooks/use-is-mobile'

const vairants = {
    initialL: { opacity: 0, translateX: -50 },
    initialR: { opacity: 0, translateX: 50 },
    animate: { opacity: 1, translateX: 0 }
}

const TechStackCard = ({ image, index, ...props }: TechStackCardProps) => {
    const ismobile = useIsMobile()
    const cardRef = useRef(null)
    const isServiceCardRefInView = useInView(cardRef, { once: true })
    const initial = ismobile ? index % 2 === 0 ? 'initialL' : 'initialR' : 'initialL'
    const animate = isServiceCardRefInView ? 'animate' : initial

    return (
        <Card
            ref={cardRef}
            pos='relative'
            component={motion.div}
            variants={vairants}
            initial='initial'
            animate={animate}
            transition={{
                delay: 0.1 * index,
                duration: 0.5
            }}
            {...props}>
            <Image style={{ padding: 'var(--mantine-spacing-lg)' }} src={image} alt="" fill priority />
        </Card>
    )
}

export default TechStackCard