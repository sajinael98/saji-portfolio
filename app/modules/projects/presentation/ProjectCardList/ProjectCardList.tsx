import { SimpleGrid } from '@mantine/core'
import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectCardList = () => {
    return (
        <SimpleGrid
            cols={{ base: 1, lg: 4 }}
            spacing={{ base: 10, sm: 'xl', lg: 'lg' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
            {Array(6).fill(0).map((_project, index) => <ProjectCard key={index} index={index} />)}
        </SimpleGrid>
    )
}

export default ProjectCardList