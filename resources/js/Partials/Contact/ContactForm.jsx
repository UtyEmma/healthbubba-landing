import Button from '@/Components/Button'
import Card from '@/Components/Card'
import InputError from '@/Components/Forms/InputError'
import { useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import toast, { useToaster } from 'react-hot-toast'

export default function ({className = 'bg-gradient-to-br from-primary-100 to-primary-50'}) {

    const form = useForm({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const submit = (e) => {
        e.preventDefault()
        form.post(route('send-message'), {
            preserveScroll: true,
            onSuccess(){
                form.reset()
            },
        })
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
                                <label class={'font-medium'}>Name</label>
                                <input class={'form-control'} value={form.name} onChange={(event) => form.setData('name', event.currentTarget.value)}  placeholder='Name' />
                                <InputError error={form.errors.name} />
                            </div>

                            <div className='space-y-1'>
                                <label class={'font-medium'}>Email Address</label>
                                <input type="email" class={'form-control'} value={form.email} onChange={(event) => form.setData('email', event.currentTarget.value)} placeholder='Email Address' />
                                <InputError error={form.errors.email} />
                            </div>

                            <div className='space-y-1'>
                                <label class={'font-medium'}>Phone Number</label>
                                <input type="tel" class={'form-control'} value={form.phone} onChange={(event) => form.setData('phone', event.currentTarget.value)} placeholder='Phone Number' />
                                <InputError error={form.errors.phone} />
                            </div>

                            <div className='space-y-1'>
                                <label class={'font-medium'}>Message</label>
                                <textarea className={'form-control resize-none'} value={form.message} onChange={(event) => form.setData('message', event.currentTarget.value)} rows={4} placeholder='Your Message' />
                                <InputError error={form.errors.message} />
                            </div>

                            <Button class={'btn w-full btn-primary'}>
                                {form.processing ? 'Sending Message...' : 'Send Message'}
                            </Button>
                        </form>
                     </Card>
                </div>
            </div>
        </div>
    )
}
