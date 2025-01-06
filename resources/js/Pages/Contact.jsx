import GuestLayout from '@/Layouts/GuestLayout'
import ContactForm from '@/Partials/Contact/ContactForm'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function () {
    return (
        <>
            <Head title='Contact Us' />
            <GuestLayout hideGap className="bg-gradient-to-br from-primary-100 to-primary-50" >
                <ContactForm />
            </GuestLayout>

        </>
    )
}
