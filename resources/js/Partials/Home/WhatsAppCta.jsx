import Button from '@/Components/Button'
import { WhatsAppIcon } from '@/Layouts/Partials/WhatsAppChatButton'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function () {

    const {urls} = usePage().props

    return (
        <div className="px-2 mb-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center p-4  max-w-7xl bg-primary-100 rounded-2xl border border-primary-200 mx-auto md:justify-between" >
                <div className="flex gap-3 items-center">
                    <div className="p-3 rounded-xl bg-primary" >
                        <WhatsAppIcon className="size-10 text-white" />
                    </div>

                    <div>
                        <h3 className="md:text-lg">Speak to a doctor in minutes</h3>
                        <p className="text-gray-500 text-sm md:text-md">Simply send "Hi" on WhatsApp and follow the prompts.</p>
                    </div>
                </div>

                <div className="">
                    <a href={urls.whatsapp} target="__blank" className='btn btn-primary'>Start Instant Consultation</a>
                </div>
            </div>
        </div>
    )
}
