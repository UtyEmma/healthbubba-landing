import PlayIcon from '@/Icons/PlayIcon'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function HowItWorks () {
    return (
        <section className="py-20">
            <div className="md:max-w-7xl mx-auto space-y-5 md:space-y-10">
                <div className="text-center md:w-2/4 mx-auto md:mb-20 px-4">
                    <h2 className="text-2xl font-semibold">How It Works</h2>
                    <p className="text-muted text-sm md:text-base">A simple 3-step process to get started</p>
                </div>
                <div className="md:w-5/6 mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="md:w-1/2">
                            <div className="border-t-2 shadow border-t-primary bg-gray-100">
                                <div className="p-5 flex items-start bg-white space-x-3 ">
                                    <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                        <i className="bi bi-chevron-left" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <p className="font-semibold">Get Verified</p>
                                        <p className="text-muted text-sm">Complete our simple, secure onboarding process with your professional credentials.</p>
                                    </div>
                                </div>
                                <div className="p-5 flex items-start space-x-3">
                                    <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                        <i className="bi bi-chevron-left" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <p className="font-semibold">Set Your Terms</p>
                                        <p className="text-muted text-sm">Define your schedule, consultation types (video/in-person), and fees.</p>
                                    </div>
                                </div>
                                <div className="p-5 flex items-start space-x-3">
                                    <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                        <i className="bi bi-chevron-left" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <p className="font-semibold">Start Consulting</p>
                                        <p className="text-muted text-sm">Receive bookings, manage your appointments, and get paid for your expertise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Link href={route('practitioners.how-it-works')} className="btn border shadow-sm py-2">View the Full Process <PlayIcon className={'text-gray-500 size-3 ms-1'} /></Link>
                            </div>
                        </div>

                        <div className="md:w-1/2 mx-auto">
                            <img src="/assets/imgs/healthbubba-doctor-on-notepad.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
