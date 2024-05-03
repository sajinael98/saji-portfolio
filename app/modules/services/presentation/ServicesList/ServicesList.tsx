"use client"
import { SimpleGrid } from '@mantine/core'
import { IconBrandReact, IconCode, IconDatabase } from '@tabler/icons-react'
import { Service } from '../../type'
import ServiceCard from '../ServiceCard'

const services: Service[] = [
    {
        title: 'Web Development',
        description: 'I bring websites and web applications to life, from concept to creation. I can handle all aspects of development, ensuring a seamless user experience and functionality tailored to your needs.',
        icon: IconCode
    },
    {
        title: 'Backend Development',
        description: 'The engine that powers your website! I specialize in creating the server-side logic that makes websites and applications function. I can ensure data security, manage databases, and build robust backend systems.',
        icon: IconDatabase
    },
    {
        title: 'Front-End Development',
        description: 'I design and build the beautiful and interactive interfaces users see and engage with. I can craft user-friendly interfaces, ensuring your website is not only functional but also visually appealing and engaging.',
        icon: IconBrandReact
    }
] as const

const ServicesList = () => {
    return (
        <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
            {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
        </SimpleGrid>
    )
}

export default ServicesList