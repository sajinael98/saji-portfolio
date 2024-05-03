"use client"
import React, { Fragment, PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box } from '@mantine/core'
import { usePathname } from 'next/navigation'
import { BeatLoader } from 'react-spinners'

const TransitionProvider = ({ children }: PropsWithChildren) => {
    const path = usePathname()
    return (
        <AnimatePresence mode='wait'>
            <Fragment
                key={path}
            >
                <Box
                    style={{
                        width: "99vw",
                        height: "100vh",
                        position: 'absolute',
                        z: 109999,
                        backgroundColor: 'black',
                    }}

                    animate={{
                        height: "0vh",

                    }}
                    exit={{
                        height: "140vh"
                    }}
                    transition={{ duration: 2 }}
                    component={motion.div}
                />
                <Box
                    style={{
                        width: "99vw",
                        height: "100vh",
                        position: 'absolute',
                        z: 946545646546,
                        bottom: 0,
                        backgroundColor: 'black'
                    }}
                    initial={{
                        height: "140vh",
                    }}

                    animate={{ height: "0vh", display: 'none', transition: { delay: 1.5 } }}
                    component={motion.div}
                />
                <motion.div
                    animate={{
                        opacity: 0,
                        display: 'none',
                        transition: {
                            delay: 1.5
                        }
                    }}
                    style={{
                        position: 'absolute',
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 99999
                    }}
                >
                    <BeatLoader size={30}
                        color="var(--mantine-primary-color-filled)" />
                </motion.div>

                <motion.div
                    initial={{
                        position: 'relative',
                        zIndex: -1
                    }}
                    animate={{
                        zIndex: 1,
                        transition: {
                            delay: 2
                        }
                    }}
                >
                    {children}
                </motion.div>
            </Fragment>
        </AnimatePresence>


    )
}

export default TransitionProvider