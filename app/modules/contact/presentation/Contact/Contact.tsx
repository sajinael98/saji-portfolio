import { Button, Modal, Stack, Text, TextInput, Textarea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';

const defaultValues = {
    name: '',
    email: '',
    message: ''
}

const Contact = () => {
    const [opened, { close, open }] = useDisclosure(false)
    const [status, setStatus] = useState<"Success" | "Error" | "IDLE" | "LOADING">()
    const form = useRef();
    const { control, handleSubmit, reset, formState } = useForm({
        defaultValues
    })

    function submitHandler(_values: any) {
        setStatus('LOADING')
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
            form.current as unknown as HTMLFormElement,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        ).then(() => {
            reset(defaultValues)
            setStatus('Success')
        }).catch((e) => {
            setStatus('Error')
        })
    }
    function closeHandler() {
        close()
        reset(defaultValues)
    }
    return (
        <>
            <Modal opened={opened} onClose={closeHandler} title="Contact Me" centered>
                <Stack ref={form as any} component={'form'} gap='md'>
                    <Controller name='name' control={control} rules={{ required: true }} render={({ field }) => <TextInput styles={{ label: { marginBottom: 5 } }} label='Your Name' {...field} />} />
                    <Controller name='email' control={control} rules={{
                        required: true, pattern: {
                            value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                            message: 'Invalid email address',
                        },
                    }} render={({ field, fieldState }) => <TextInput error={fieldState.error?.message} styles={{ label: { marginBottom: 5 } }} label='Your Email' {...field} />} />
                    <Controller name='message' control={control} rules={{
                        required: true
                    }} render={({ field }) => <Textarea styles={{ label: { marginBottom: 5 }, input: { minHeight: 250 } }} label='Your Message' {...field} />} />
                    <Button loading={status === 'LOADING'} disabled={status === 'LOADING' || !formState.isDirty} size='lg' onClick={handleSubmit(submitHandler)} tt={'uppercase'}>send</Button>
                    {status === "Success" && <Text c='green'>
                        Thank you for reaching out! Your email has been sent successfully.
                        I appreciate your inquiry and I&apos;ll be in touch with you soon.
                    </Text>}
                    {status === "Error" && <Text c='red'>
                        Email Send Failure
                    </Text>}
                </Stack>
            </Modal>
            <Text
                ta={'center'}
                c='var(--mantine-primary-color-filled)'
                fz={{
                    base: 'calc(var(--mantine-font-size-sm) * 3)',
                    lg: 'calc(var(--mantine-font-size-lg) * 3)',
                }}
            > Contact Me</Text>
            <Text
                fz={{
                    lg: 'calc(var(--mantine-font-size-lg) * 1.25)'
                }}
                mx='auto'
                ta={'center'}
                w={{ lg: 900 }}
            >
                Curious minds and passionate collaborators welcome! Feel free to send a message and let&apos;s explore the possibilities together.
                This invites those who share your interests and desire to work together.
            </Text>
            <Button onClick={open} mx='auto' size='lg' w={{ lg: 150 }}>Contact Me</Button>

        </>
    )
}

export default Contact