import GuestLayout, { DownloadContext } from '@/Layouts/GuestLayout'
import { PlayIcon } from '@heroicons/react/24/solid'
import { Head, Link, usePage } from '@inertiajs/react'
import React, { useContext } from 'react'

export const CheckoutSuccess = () => {

    const {open} = useContext(DownloadContext)

    const {props} = usePage()

    // Yay! You have succesfully completed your order

    return (
        <div className='max-w-7xl mx-auto py-10 px-4'>
            <Head title='Order Success' />
            <div className="mx-auto w-1/2 md:w-1/6">
                <img src="/assets/imgs/flowers.png"   alt="" />
            </div>

            <div className='flex flex-col items-center space-y-10 justify-center'>
                <div className='text-center space-y-2'>
                    <h2 className='text-2xl md:text-3xl font-semibold'>Your order is in progress!</h2>
                    <p className="text-muted md:text-xl">Chat with us or call {props.phone} if you need any help.</p>
                </div>

                <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4'>
                    <Link href={route('packages')} className="btn btn-primary">Continue Exploring <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></Link>
                    <button className="btn btn-light" onClick={open}>Download the patient app</button>
                </div>
            </div>
        </div>
    )
}
