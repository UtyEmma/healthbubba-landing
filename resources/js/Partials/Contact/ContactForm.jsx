import Button from '@/Components/Button'
import Card from '@/Components/Card'
import Disclose from '@/Components/Display/Disclose'
import InputError from '@/Components/Forms/InputError'
import { useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'

export default function ({className = 'bg-gradient-to-br from-primary-100 to-primary-50'}) {

    const {honeypot, recaptcha = {}} = usePage().props
    const [isVerifyingRecaptcha, setIsVerifyingRecaptcha] = useState(false)
    const recaptchaAction = recaptcha.action || 'contact_us'
    const recaptchaSiteKey = recaptcha.siteKey

    const form = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        [honeypot.nameFieldName]: '',
        [honeypot.validFromFieldName]: honeypot.encryptedValidFrom
    })
    const isSubmitting = form.processing || isVerifyingRecaptcha

    const executeRecaptcha = () => {
        return new Promise((resolve, reject) => {
            if (!recaptchaSiteKey || !window.grecaptcha?.ready || !window.grecaptcha?.execute) {
                reject(new Error('reCAPTCHA is not ready.'))
                return
            }

            window.grecaptcha.ready(() => {
                window.grecaptcha
                    .execute(recaptchaSiteKey, {action: recaptchaAction})
                    .then(resolve)
                    .catch(reject)
            })
        })
    }

    const submit = async (e) => {
        e.preventDefault()

        if (isSubmitting) {
            return
        }

        setIsVerifyingRecaptcha(true)
        form.clearErrors('g-recaptcha-response')

        try {
            const token = await executeRecaptcha()

            form.transform((data) => ({
                ...data,
                'g-recaptcha-response': token,
            }))

            form.post(route('send-message'), {
                preserveScroll: true,
                onSuccess(){
                    form.reset()
                },
                onFinish(){
                    setIsVerifyingRecaptcha(false)
                },
            })
        } catch (error) {
            form.setError('g-recaptcha-response', 'We could not verify that you are human. Please try again.')
            setIsVerifyingRecaptcha(false)
        }
    }

    return (
        <div className={`relative ${className} `}>
            <div className="absolute top-0 right-0 left-0  bottom-0 bg-[url(/assets/svgs/curvy-stripe.svg)] bg-no-repeat bg-cover z-0"></div>
            
            <div className="md:py-20 py-10 pt-10 md:pt-20 px-4 z-10 relative">
                <div className="md:w-5/12 mx-auto space-y-5">
                    <div className='text-center space-y-4'>
                        <h3 className="text-2xl md:text-3xl font-semibold">Get in Touch</h3>

                        <div>
                            <p className='text-muted'>For more inquiries, reach out to us at our registered office address: </p>
                            <p className='font-medium' >G24/25 Triangle Business Place beside Circle Mall, Osapa Lekki Lagos State</p>
                        </div>
                    </div>

                    <Card >
                        <form className='space-y-5' onSubmit={submit}>
                            <div className='space-y-1'>
                                <label className={'font-medium'}>Name</label>
                                <input className={'form-control'} value={form.data.name} onChange={(event) => form.setData('name', event.currentTarget.value)}  placeholder='Name' />
                                <InputError error={form.errors.name} />
                            </div>

                            <div className='space-y-1'>
                                <label className={'font-medium'}>Email Address</label>
                                <input type="email" className={'form-control'} value={form.data.email} onChange={(event) => form.setData('email', event.currentTarget.value)} placeholder='Email Address' />
                                <InputError error={form.errors.email} />
                            </div>

                            <Disclose show={honeypot.enabled} >
                                <div name={`${honeypot.nameFieldName}_wrap`} style={{display:"none"}}>
                                    <input type="text" 
                                        value={form.data[honeypot.nameFieldName]} 
                                        name={honeypot.nameFieldName} 
                                        onChange={(event) => form.setData(honeypot.nameFieldName, event.currentTarget.value)}
                                        id={honeypot.nameFieldName} 
                                    />
                                    <input type="text" 
                                        onChange={(event) => form.setData(honeypot.validFromFieldName, event.currentTarget.value)}
                                        value={form.data[honeypot.validFromFieldName]} 
                                        name={honeypot.validFromFieldName} 
                                    />
                                </div>

                            </Disclose>

                            <div className='space-y-1'>
                                <label className={'font-medium'}>Phone Number</label>
                                <input type="tel" className={'form-control'} value={form.data.phone} onChange={(event) => form.setData('phone', event.currentTarget.value)} placeholder='Phone Number' />
                                <InputError error={form.errors.phone} />
                            </div>

                            <div className='space-y-1'>
                                <label className={'font-medium'}>Message</label>
                                <textarea className={'form-control resize-none'} value={form.data.message} onChange={(event) => form.setData('message', event.currentTarget.value)} rows={4} placeholder='Your Message' />
                                <InputError error={form.errors.message} />
                            </div>

                            <InputError error={form.errors['g-recaptcha-response']} />

                            <Button className={'btn w-full btn-primary'} disabled={isSubmitting}>
                                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                            </Button>
                        </form>
                     </Card>
                </div>
            </div>
        </div>
    )
}
