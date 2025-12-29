import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { PolicyItem } from './Partials/PolicyItem'
import { Head } from '@inertiajs/react'

export default function () {
    return (
        <GuestLayout className="bg-gray-100">
            <Head title='Data Deletion Instructions' />
            <div className="max-w-6xl mx-auto px-4">
                <div className="md:p-20 p-4 bg-white divide-y">
                    <div class={'md:space-y-2 mb-3'}>
                        <h1 class={'text-2xl md:text-4xl font-semibold'}>Data Deletion Instructions</h1>
                        {/* <p class={'text-muted'}>Last updated May 25, 2023</p> */}
                    </div>

                    <div>
                        <PolicyItem title=''>
                            <p>HealthBubba is committed to protecting your privacy and giving you control over your personal data.</p>

                            <p>If you wish to request the deletion of your personal data collected through the HealthBubba mobile application or website, please follow the instructions below.</p>

                        </PolicyItem>

                        <PolicyItem title={'How to Request Data Deletion'} >
                            <p>To request deletion of your data, please send an email to:</p>
                            <p className='text-medium select-text' >📧 <a className='text-primary underline underline-offset-4 ' href="mailto:support@healthbubba.com" >support@healthbubba.com</a></p>
                            <p>In your email, kindly include:</p>
                            <ul className='list-disc list-inside' >
                                <li>Your full name</li>
                                <li>The email address associated with your HealthBubba account</li>
                                <li>A clear request for data deletion</li>
                            </ul>
                            <p>Once we receive your request, we will verify your identity and process the deletion in accordance with applicable data protection laws.</p>
                        </PolicyItem>

                        <PolicyItem title='What Data Will Be Deleted'>
                            <p>Upon successful verification, we will permanently delete personal data associated with your account, except where retention is required by law or for legitimate business purposes.</p>
                        </PolicyItem>                        

                        <PolicyItem title='Contact Us'>
                            <p>If you have any questions about this process, please contact us at <a className='text-primary underline underline-offset-4 ' href="mailto:support@healthbubba.com">support@healthbubba.com</a></p>
                        </PolicyItem>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
