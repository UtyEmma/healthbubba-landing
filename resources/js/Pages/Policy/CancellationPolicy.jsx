import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { PolicyItem } from './Partials/PolicyItem'
import { Head } from '@inertiajs/react'

export default function () {
    return (
        <GuestLayout className="bg-gray-100">
            <Head title='Cancellation and Rescheduling Policy for Telemedicine Appointments' />
            <div className="max-w-6xl mx-auto px-4">
                <div className="md:p-20 p-4 bg-white divide-y">
                    <div class={'md:space-y-2'}>
                        <h1 class={'text-2xl md:text-4xl font-semibold'}>Cancellation and Rescheduling Policy for Telemedicine Appointments</h1>
                        {/* <p class={'text-muted'}>Last updated May 25, 2023</p> */}
                    </div>

                    <div>
                        <PolicyItem title=''>
                            <p>At Health Bubba, we understand that plans can change. To ensure the best experience for all our users and providers, we have established the following cancellation and rescheduling policy for telemedicine appointments:</p>

                        </PolicyItem>

                        <PolicyItem title='Cancellation Policy:'>
                            <ol className='list-decimal list-inside space-y-5'>
                                <li className='font-semibold'>
                                    Cancellations Made in Advance:
                                    <p className='font-normal'>Appointments cancelled at least 24 hours before the scheduled time will not incur any charges, and you may receive a full refund or credit to your account.</p>
                                </li>
                                <li className='font-semibold'>
                                    Late Cancellations:
                                    <p className='font-normal'>If you fail to attend your appointment without prior notice, the full consultation fee will be charged.
                                    </p>
                                </li>
                                <li className='font-semibold'>
                                    No-Show Policy:
                                    <p className='font-normal'>Cancellations made within 24 hours of the scheduled appointment will incur a cancellation fee of [50% of the consultation fee], as providers set aside this time for your care.</p>
                                </li>
                            </ol>
                        </PolicyItem>

                        <PolicyItem title='Rescheduling Policy:'>
                            <ol className='list-decimal list-inside space-y-5'>
                                <li className='font-semibold'>
                                    Rescheduling in Advance:
                                    <p className='font-normal'>You may reschedule your appointment up to 24 hours before the scheduled time without any additional fees.</p>
                                </li>
                                <li className='font-semibold'>
                                    Late Rescheduling:
                                    <p className='font-normal'>Rescheduling within 24 hours of the scheduled time may incur a rescheduling fee of [50% of the consultation fee], subject to provider availability.</p>
                                </li>
                                <li className='font-semibold'>
                                    Same-Day Rescheduling:
                                    <p className='font-normal'>Same-day rescheduling requests will be accommodated at the provider’s discretion and may result in an additional fee.</p>
                                </li>
                            </ol>
                        </PolicyItem>

                        <PolicyItem title='How to Cancel or Reschedule:'>
                            <p>To cancel or reschedule an appointment, log into your Health Bubba account and navigate to your upcoming appointments.</p>
                            <p>Alternatively, you can contact our support team.</p>
                        </PolicyItem>

                        <PolicyItem title=''>
                            <p>We appreciate your understanding and cooperation as we strive to provide timely and high-quality care for all our users. Thank you for choosing Health Bubba!</p>
                        </PolicyItem>

                        

                        <PolicyItem title='Contact Us'>
                            <p>For inquiries or comments on this Privacy Policy, contact us at <a href="mailto:support@healthbubba.com">support@healthbubba.com</a>.</p>
                        </PolicyItem>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
