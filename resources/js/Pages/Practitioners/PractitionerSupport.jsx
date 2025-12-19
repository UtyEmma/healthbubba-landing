import ArrowRightIcon from '@/Icons/ArrowRightIcon'
import CallIcon from '@/Icons/CallIcon'
import EnvelopeIcon from '@/Icons/EnvelopeIcon'
import GuestLayout from '@/Layouts/GuestLayout'
import ContactForm from '@/Partials/Contact/ContactForm'
import PractitionerContact from '@/Partials/Practitioners/PractitionerContact'
import PractitionerCTA from '@/Partials/Practitioners/PractitionerCTA'
import { ClockIcon } from '@heroicons/react/24/outline'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function PractitionerSupport() {
    return (
        <GuestLayout>
            <Head title='Practitioner Support' />
            <div className="space-y-10">
                <section className="md:max-w-6xl mx-auto px-4 space-y-5">
                    <div className="text-center space-y-5 ">
                        <h1 className="md:text-6xl text-[24px] sm:text-[28px] leading-tight md:leading-[72px] font-bold">Practitioner Support</h1>
                        <p className="text-gray-500 text-lg">We're here to help. Whether you have a question about your application or need technical assistance, our team is ready.</p>
                    </div>
                </section>

                <section className='max-w-7xl mx-auto  grid md:grid-cols-3 gap-10' >
                    <div className="border-2 shadow-sm p-5 space-y-5">
                        <div className="size-12 flex items-center border-2 justify-center shadow rounded-full ">
                            <EnvelopeIcon className='size-6' />
                        </div>

                        <div className="space-y-3">
                            <p className="font-semibold">Email Us</p>
                            <p className="text-sm text-gray-600">Get a response within one business day</p>
                            <a href='mailto:practitioners-support@healthbubba.com' className="text-sm underline inline-flex gap-2 items-baseline underline-offset-8 decoration-dotted decoration-gray-500">practitioners-support@healthbubba.com <ArrowRightIcon className='size-3' /></a>
                        </div>
                    </div>
                    <div className="border-2 shadow-sm p-5 space-y-5">
                        <div className="size-12 flex items-center border-2 justify-center shadow rounded-full ">
                            <CallIcon className='size-6' />
                        </div>

                        <div className="space-y-3">
                            <p className="font-semibold">Call Us</p>
                            <p className="text-sm text-gray-600">For urgent account or technical issues</p>
                            <a href='tel:+2349163324000' className="text-sm underline inline-flex gap-2 items-baseline underline-offset-8 decoration-dotted decoration-gray-500">0916 332 4000 <ArrowRightIcon className='size-3' /></a>
                        </div>
                    </div>
                    <div className="border-2 shadow-sm p-5 space-y-5">
                        <div className="size-10 flex items-center border-2 justify-center shadow rounded-full ">
                            <ClockIcon className='size-6 text-[#9810FA]' />
                        </div>

                        <div className="space-y-3">
                            <p className="font-semibold">Support Hours</p>
                            <p className="text-sm text-gray-600">Monday - Friday</p>
                            <p className="text-sm">9:00 AM - 5:00 PM (WAT)</p>
                        </div>
                    </div>
                </section>

                <PractitionerContact />

                <PractitionerCTA />
            </div>
        </GuestLayout>
    )
}
