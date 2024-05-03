import { Stack, StackProps, Text, ThemeIcon } from '@mantine/core'
import { IconRocket } from '@tabler/icons-react'
import { PropsWithChildren } from 'react'
import { SectionProps } from './Section.interface'

const Section = ({ children, title, ...props }: PropsWithChildren<SectionProps & StackProps>) => {
    const splittedTitle = title?.split(" ")
    return (
        <Stack
            pt={'lg'}
            mb={'calc(var(--mantine-spacing-lg) * 4)'}
            px={{
                base: 'calc(var(--mantine-spacing-sm) * 2)',
                lg: 'calc(var(--mantine-spacing-lg) * 7)'
            }}
            {...props}
        >
            {splittedTitle && <Stack gap={0}>
                <Text tt='capitalize' flex={1} fz={{ base: 'calc(var(--mantine-font-size-sm) * 2.2)', lg: 'calc(var(--mantine-font-size-lg) * 2)' }}>
                    <Text span mr='md'>
                        <ThemeIcon component={'span'} size={'lg'} variant="light" c='var(--mantine-primary-color-filled)'>
                            <IconRocket className="icon" />
                        </ThemeIcon>
                    </Text>
                    {splittedTitle[0]} <Text c='var(--mantine-primary-color-filled)' inherit span>{splittedTitle[1]}</Text>
                </Text>
            </Stack>}

            {children}
        </Stack>
    )
}

export default Section