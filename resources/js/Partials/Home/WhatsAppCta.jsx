import Button from '@/Components/Button'
import { WhatsAppIcon } from '@/Layouts/Partials/WhatsAppChatButton'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function () {

    const {urls} = usePage().props

    return (
        <div className="px-2 mb-5">
            <div className="flex mb-5 gap-2 flex-row items-center p-1.5 max-w-7xl bg-primary-100 rounded-2xl border border-primary-200 mx-auto md:justify-between" >
                <div className="flex gap-1 items-center">
                    <div className="p-3 rounded-xl bg-primary" >
                        <WhatsAppIcon className="size-6 text-white" />
                    </div>

                    <div>
                        <h3 className="md:text-lg text-sm">Speak to a doctor in minutes</h3>
                        <p className="text-gray-500 text-xs md:text-md">Simply send <span className="font-semibold">"Hi"</span> on WhatsApp and follow the prompts.</p>
                    </div>
                </div>

                <div className="">
                    {/* <ArrowRightIcon className='size-6' /> */}
                    <a href={urls.whatsapp} target="__blank" className='btn btn-primary text-xs p-2 py-1'>Start Instant Consultation</a>
                </div>
            </div>
        </div>
    )
}
