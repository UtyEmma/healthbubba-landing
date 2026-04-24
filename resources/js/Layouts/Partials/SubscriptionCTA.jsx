import Disclose from '@/Components/Display/Disclose'
import InputError from '@/Components/Forms/InputError'
import { useForm, usePage } from '@inertiajs/react'
import React, { useMemo, useState } from 'react'
import { LoaderIcon } from 'react-hot-toast'

export const SubscriptionCTA = (props) => {

    const {props: data} = usePage()

    const url = window.location.href
    const form = useForm({
        email_address: ''
    })

    const [success, setSuccess] = useState('')

    const subscribe = (e) => {
        e.preventDefault()
        form.clearErrors()
        setSuccess('')
        
        form.post(route('email.subscribe'), {
            onSuccess: () => {
                setSuccess('A confirmation email has been sent to your email address!')
                form.reset()
            },
            onError: (err) => {
                form.setError('email_address', 'Something went wrong. Please try again later.')
            },
            preserveScroll: true,
        })
    }

    return (
        <div {...props}>
            <div className="space-y-5">

                <div className="p-5 rounded-xl shadow border space-y-3 bg-white">
                    <h5 className={'font-semibold'}>Subscribe to Our Newsletter</h5>
                    <form onSubmit={subscribe} className="space-y-1" >
                        <div className="flex space-x-3">
                            <input type="text" value={form.data.email_address} onChange={e => form.setData({email_address: e.currentTarget.value})} placeholder='Email Address' className="form-control flex-1" />
                            <button type="submit" className="btn btn-primary flex gap-2 items-center">
                                Subscribe
                                <Disclose show={form.processing}>
                                    <LoaderIcon  className='text-white animate-spin' />
                                </Disclose> 
                            </button>
                        </div>

                        <Disclose show={!!success}>
                            <p className="text-primary text-sm">{success}</p>
                        </Disclose>

                        <InputError error={form.errors?.email_address} />
                    </form>

                    <div className={'text-center'}>
                        <p className={'font-medium text-sm'}>・ Unsubscribe anytime.</p>
                    </div>
                </div>

                <>
                    {
                        window.location.href.includes('practitioner')

                        ?
                        
                        <div className={'space-y-2'}>
                            <a href={data.urls.doctors.playstore} target='__blank' className="block underline">Download our Android App</a>
                            <a href={data.urls.doctors.appstore} target='__blank' className="block underline">Download our iOS App</a>
                        </div>

                        :

                        <div className={'space-y-2'}>
                            <a href={data.urls.patients.playstore} target='__blank' className="block underline">Download our Android App</a>
                            <a href={data.urls.patients.appstore} target='__blank' className="block underline">Download our iOS App</a>
                        </div>
                        
                    }
                </>

                <div className={'flex w-2/3 items-center space-x-3'}>
                    <div className="p-1 flex-shrink-0 shadow-md inline-block rounded-lg">
                        <img src="/assets/bubba_play.png" className="size-20"  alt="" />
                    </div>

                    <div className={'flex-1'}>
                        <p className="text-lg font-semibold">Scan to download the Patient App</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
