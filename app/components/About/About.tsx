import { Button, Flex, Group, Paper, Stack, Text } from "@mantine/core";
import { IconFileCv } from "@tabler/icons-react";
import Image from "next/image";

const About = () => {
    return (
        <Flex className="full-height" justify='center' gap={'xl'} direction={{ base: 'column', lg: 'row' }}>
            <Flex flex={{ base: 1, lg: 1 }}>
                <Paper bg='dark.6' radius='md' h={{ base: 300, lg: 400 }} shadow="md" withBorder style={{ border: 'var(--mantine-primary-color-filled) 3px solid' }} className="full-height" w={{ base: '100%', lg: '75%' }} pos='relative'>
                    <Image src='/saji.jpeg' alt="" style={{ objectFit: 'cover', padding: 10 }} fill />
                </Paper>
            </Flex>
            <Stack flex={{ lg: 1 }}>
                <Text fz={{ base: 'calc(var(--mantine-font-size-sm) * 2)', lg: 'calc(var(--mantine-font-size-lg) * 2)' }}>Hello, <Text c='var(--mantine-primary-color-filled)' span inherit>I&apos;m Saji Nael</Text></Text>
                <Text c='dimmed'>
                    Full-stack developer building beautiful interfaces & powerful backends.
                    I bring ideas to life with expertise in both front-end & back-end technologies.
                    Let&apos;s collaborate and craft something amazing!
                </Text>
                <Stack gap={0}>
                    <Group>
                        <Text w={130} fw={700} fz={{ lg: 'calc(var(--mantine-font-size-lg) * 1.25)' }}> Name:</Text>
                        <Text fz={{ lg: 'calc(var(--mantine-font-size-lg) * 1.25)' }}> Saji Nael</Text>
                    </Group>
                    <Group>
                        <Text w={130} fw={700} fz={{ lg: 'calc(var(--mantine-font-size-lg) * 1.25)' }}> Age:</Text>
                        <Text fz={{ lg: 'calc(var(--mantine-font-size-lg) * 1.25)' }}> 26</Text>
                    </Group>
                    <Group>
                        <Text w={130} fw={700} fz={{ lg: 'calc(var(--mantine-font-size-lg) * 1.25)' }}> Address:</Text>
                        <Text fz={{ lg: 'calc(var(--mantine-font-size-lg) * 1.25)' }}> Ramallah</Text>
                    </Group>
                    <Group>
                        <Text w={130} fw={700} fz={{ lg: 'calc(var(--mantine-font-size-lg) * 1.25)' }}> Mobile:</Text>
                        <Text fz={{ lg: 'calc(var(--mantine-font-size-lg) * 1.25)' }}> +972599714454</Text>
                    </Group>
                </Stack>
                <Stack align="flex-start">
                    <Button leftSection={<IconFileCv className="icon" />}>Download CV</Button>
                </Stack>
            </Stack>
        </Flex>
    )
}

export default About