"use client"
import { Button, Card, CardSection, Group, Image, Text } from '@mantine/core'
import { IconBrandGithub, IconLink } from '@tabler/icons-react'
import { ProjectCardProps } from './ProjectCard.interface'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '../../../../hooks/use-is-mobile'

const vairants = {
    initialL: { opacity: 0, translateX: -50 },
    initialR: { opacity: 0, translateX: 50 },
    animate: { opacity: 1, translateX: 0 }
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const ismobile = useIsMobile()
    const cardRef = useRef(null)
    const isServiceCardRefInView = useInView(cardRef, { once: true })
    const initial = ismobile ? index % 2 === 0 ? 'initialL' : 'initialR' : 'initialL'
    const animate = isServiceCardRefInView ? 'animate' : initial

    return (
        <Card
            ref={cardRef}
            mih={400}
            radius='md'
            bg='dark.6'
            pos='relative'
            component={motion.div}
            variants={vairants}
            initial={'initial'}
            animate={animate}
            transition={{
                delay: 0.1 * index,
                duration: 0.5
            }}
            >
            <CardSection mb='md'>
                <Image
                    alt=""
                    src={null}
                    h={200}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
            </CardSection>
            <CardSection px='md' mb='md'>
                <Text fz={{ base: 'lg', lg: 'calc(var(--mantine-font-size-lg) * 1.1)' }} fw={600}>Project Title goes here</Text>
                <Text lineClamp={5} c='dimmed' mt='md'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                </Text>
            </CardSection>
            <Group wrap='nowrap'>
                <Button size='compact-sm' color='gray.0' leftSection={<IconLink className='icon' />} variant='transparent'>
                    Live Preview
                </Button>
                <Button size='compact-sm' color='gray.0' leftSection={<IconBrandGithub className='icon' />} variant='transparent'>
                    View Code
                </Button>
            </Group>
        </Card>
    )
}

export default ProjectCard