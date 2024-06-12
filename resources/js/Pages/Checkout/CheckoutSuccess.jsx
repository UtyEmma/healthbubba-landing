import GuestLayout from '@/Layouts/GuestLayout'
import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'

export const CheckoutSuccess = () => {
    return (
        <GuestLayout>
            <div className=' max-w-7xl mx-auto'>

                <div className="mx-auto w-1/2 md:w-1/6">
                    <img src="/assets/imgs/flowers.png"   alt="" />
                </div>

                <div className='flex flex-col items-center space-y-10 justify-center'>
                    <div className='text-center space-y-2'>
                        <h2 className='text-3xl font-semibold'>Yay! You have succesfully completed your order!</h2>
                        <p className="text-muted text-xl">Chat with us or call 08116848839 if you need any help.</p>
                    </div>

                    <div className='flex space-x-4'>
                        <button className="btn btn-primary">Continue Exploring <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></button>
                        <button className="btn btn-light">Download the patient app</button>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
