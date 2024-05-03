import { SimpleGrid } from '@mantine/core'
import { teckStackList } from '../../../../constants/teckStack'
import TechStackCard from '../TechStackCard'

const TeckStackLists = () => {
    return (
        <SimpleGrid
            cols={{ base: 2, sm: 2, lg: 8 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
            {teckStackList.map((img, index) => <TechStackCard image={img} index={index} key={index} h={120} />)}
        </SimpleGrid>
    )
}

export default TeckStackLists