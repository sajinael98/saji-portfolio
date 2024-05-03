"use client"
import { ActionIcon, Affix, AppShell, AppShellMain, Burger, Button, Flex, Group, Stack, Text, ThemeIcon, Transition } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { IconBrandGithub, IconBrandLinkedin, IconCaretUp, IconMail, IconMessage, IconPhone } from '@tabler/icons-react';
import { PropsWithChildren } from 'react';
import { links } from '../../constants/links';
import Navlink from '../Navlink';

const AppLayout = ({ children }: PropsWithChildren) => {
    const [scroll, scrollTo] = useWindowScroll();
    const [opened, { toggle }] = useDisclosure(false)
    return (
        <AppShell
            header={{ height: 96, collapsed: scroll.y !== 0 }}
            navbar={{
                breakpoint: 'md',
                width: 200,
                collapsed: { desktop: true, mobile: !opened }
            }}
        >
            <AppShell.Header
                px={{
                    base: 'calc(var(--mantine-spacing-sm) * 2)',
                    lg: 'calc(var(--mantine-spacing-lg) * 7)'
                }}
                withBorder={false}
            >
                <Group className='full-height' justify='space-between'>
                    <Group gap={'xs'}>
                        <Text
                            c='dark.2'
                            fz={{
                                base: 'calc(var(--mantine-font-size-sm) * 2.5)',
                                lg: 'calc(var(--mantine-font-size-lg) * 1.7)'
                            }}
                            fw={500}
                        >
                            Saji
                            <Text ml={5} inherit span c='yellow.4'>
                                Nael
                            </Text>
                        </Text>

                    </Group>
                    <Group justify='center' gap='lg' visibleFrom='md' flex={{ lg: 1 }}>
                        {links.map((link) => <Text key={link.href} fw={500} fz={'lg'}>{link.label}</Text>)}
                    </Group>
                    <Group justify='flex-end' visibleFrom='md'>

                        <Button variant='subtle' color='gray.0' leftSection={<IconBrandLinkedin className='icon' />}>
                            Linkedin
                        </Button>
                        <Button visibleFrom='md' variant='subtle' color='gray.0' leftSection={<IconBrandGithub className='icon' />}>
                            Github
                        </Button>
                        <Button variant='outline' color='yellow.4' leftSection={<IconMessage className='icon' />}>
                            Contact me
                        </Button>
                    </Group>
                    <Group hiddenFrom='md'>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            h={40}
                            w={40}
                            styles={{
                                root: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            }}
                            style={{
                                border: 'var(--mantine-color-default-border) 1px solid',
                                borderRadius: 'var(--mantine-radius-default)'
                            }}
                            size='md'
                        />
                    </Group>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar px='calc(var(--mantine-spacing-sm) * 2)' pt='lg'>
                <Stack gap='md'>
                    {links.map((link) => <Navlink key={link.label}>
                        {link.label}
                    </Navlink>)}
                </Stack>
            </AppShell.Navbar>
            <AppShellMain py='md'>
                {children}
            </AppShellMain>
            <AppShell.Footer
                h={{ base: 300, lg: 80 }}
                py='md'
                pos={'static'}
                px={{
                    base: 'calc(var(--mantine-spacing-sm) * 2)',
                    lg: 'calc(var(--mantine-spacing-lg) * 5)'
                }}>
                <Flex direction={{ base: 'column', lg: 'row' }} className='full-height' gap='md'>
                    <Group flex={1}>
                        <Text
                            c='dark.2'
                            fz={{
                                base: 'calc(var(--mantine-font-size-sm) * 2.5)',
                                lg: 'calc(var(--mantine-font-size-lg) * 1.7)'
                            }}
                            fw={500}
                        >
                            Saji
                            <Text ml={5} inherit span c='yellow.4'>
                                Nael
                            </Text>
                        </Text>
                    </Group>
                    <Flex direction={{ base: 'column', lg: 'row' }} flex={1} align={{ base: 'flex-start', lg: 'center' }} gap='md'>
                        <Flex direction={{ base: 'column', lg: 'row' }} gap='md' flex={{ lg: 1 }} wrap='nowrap'>
                            <Text fz={{ base: 'xl', lg: 'calc(var(--mantine-font-size-lg) * 1.1)' }}>
                                <Text mr='sm' span><ThemeIcon variant='light' component='span'><IconPhone /></ThemeIcon></Text>
                                +972599714454
                            </Text>
                            <Text fz={{ base: 'xl', lg: 'calc(var(--mantine-font-size-lg) * 1.1)' }}>
                                <Text mr='sm' span><ThemeIcon variant='light' component='span'><IconMail /></ThemeIcon></Text>
                                saji.nael.98@gmail.com
                            </Text>
                        </Flex>
                        <Flex direction={{ base: 'column', lg: 'row' }} gap='md' justify={{ lg: 'flex-end' }}>
                            <ThemeIcon visibleFrom='md' variant='light'>
                                <IconBrandGithub />
                            </ThemeIcon>
                            <Text fz={{ base: 'xl', lg: 'calc(var(--mantine-font-size-lg) * 1.1)' }} hiddenFrom='md'>
                                <Text mr='sm' span>
                                    <ThemeIcon component='span' variant='light'>
                                        <IconBrandGithub />
                                    </ThemeIcon>
                                </Text>
                                sajinael98
                            </Text>

                            <ThemeIcon visibleFrom='md' variant='light'>
                                <IconBrandLinkedin />
                            </ThemeIcon>
                            <Text fz={{ base: 'xl', lg: 'calc(var(--mantine-font-size-lg) * 1.1)' }} hiddenFrom='md'>
                                <Text mr='sm' span>
                                    <ThemeIcon component='span' variant='light'>
                                        <IconBrandLinkedin />
                                    </ThemeIcon>
                                </Text>
                                sajinael98
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </AppShell.Footer>
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <ActionIcon
                            size={'xl'}
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <IconCaretUp className='icon' />
                        </ActionIcon>
                    )}
                </Transition>
            </Affix>
        </AppShell>
    )
}

export default AppLayout