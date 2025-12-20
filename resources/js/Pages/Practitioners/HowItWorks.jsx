import PlayIcon from '@/Icons/PlayIcon'
import GuestLayout from '@/Layouts/GuestLayout'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function HowItWorks() {
    return (
        <GuestLayout>
            <Head title='How it Works' />
            <div className="space-y-10">
                <section className="md:max-w-6xl mx-auto px-4 space-y-5">
                    <div className="text-center space-y-5 ">
                        <h1 className="md:text-6xl text-3xl leading-tight md:leading-[72px] font-bold">Your Journey with Healthbubba</h1>
                        <p className="text-gray-500 md:text-lg">From Application to First Consultation <br /> We've designed a clear, secure process to get you verified and connected with patients.</p>
                    </div>
                </section>

                <section className='md:max-w-7xl px-2 mx-auto'>
                    <div className="bg-[#F8F7F7] border border-dashed space-y-10">
                        <div>
                            <div className="p-4 flex items-center gap-3">
                                <div className="size-6 shrink-0 text-white flex items-center justify-center font-semibold rounded-full bg-primary">1</div>
                                <p className="font-bold">The Onboarding Process: What You'll Need to Get Started</p>
                            </div>

                            <div className="grid md:grid-cols-12 md:gap-10">
                                <div className="md:col-span-7">
                                    <div className="grid md:grid-cols-3">
                                        <WorksItem title="Personal & Contact Details" caption='Your name, email, and phone.' className='md:aspect-square' />
                                        <WorksItem title="Professional Information" caption='Your provider type, specialty, years of experience, and any hospital affiliations.' className='md:aspect-square' />
                                        <WorksItem title="Verification Documents" caption='A copy of your valid medical license (with expiry date) and an e-copy of your signature.' className='md:aspect-square' />
                                        <WorksItem title="Operational Setup" caption='Your spoken languages, working hours, and consultation fees.' className='md:aspect-square' />
                                        <WorksItem title="Payout Information" caption='Your destination bank account details for settlements.' className='md:aspect-square' />
                                        <div className="md:col-span-2 p-4 bg-amber-50 text-center">
                                            <p className='text-amber-700 text-sm' ><span className='font-medium' >Note:</span> Once verified, your profile will be activated, and you can begin accepting consultations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-5">
                                    <img src="/assets/imgs/healthbubba-doctors-on-phone.png" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="p-4 flex items-center gap-3">
                                <div className="size-6 shrink-0 text-white flex items-center justify-center font-semibold rounded-full bg-primary">2</div>
                                <p className="font-bold">Managing Your Consultations: Connect with Patients, Anytime, Anywhere</p>
                            </div>

                            <div className="grid md:grid-cols-5 md:gap-10">
                                <div className="md:col-span-2">
                                    <img src="/assets/imgs/healthbubba-doctor-on-laptop.png" alt="" />
                                </div>

                                <div className="md:col-span-3">
                                    <div className="grid">
                                        <WorksItem title='Video Consultations' caption={'Conduct secure, HIPAA-compliant video calls directly through the Healthbubba platform. All you need is a stable internet connection and a professional setting.'} className='md:h-48' />
                                        <WorksItem title={'In-Person (Offline) Consultations'} caption={'Patients can book in-person appointments at your verified clinic address. To confirm the session, the patient will provide a unique consultation code upon arrival.'} className='md:h-48' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="p-4 flex items-center gap-3">
                                <div className="size-6 shrink-0 text-white flex items-center justify-center font-semibold rounded-full bg-primary">3</div>
                                <p className="font-bold">Code of Conduct: Our Commitment to Professionalism</p>
                            </div>

                            <div className="grid md:grid-cols-5 md:gap-10">
                                <div className="md:col-span-3">
                                    <div className="grid">
                                        <WorksItem title='Punctuality' caption={'We require all practitioners to be available at the scheduled time.'} className='md:h-32' />
                                        <WorksItem title={'Professionalism'} caption={'All interactions must uphold the highest professional and ethical standards.'} className='md:h-32' />
                                        <WorksItem title={'Compliance'} caption={'You must adhere to all Healthbubba policies and medical regulations.'} className='md:h-32' />
                                        <div className="p-4 bg-amber-50">
                                            <p className='text-amber-700 text-sm' ><span className='font-medium' >Note:</span> Repeated failure to attend sessions may result in account suspension.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <img src="/assets/imgs/healthbubba-doctor-consulting.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="p-4 flex items-center gap-3">
                                <div className="size-6 shrink-0 text-white flex items-center justify-center font-semibold rounded-full bg-primary">4</div>
                                <p className="font-bold">How You Get Paid: Simple, Transparent Settlements</p>
                            </div>

                            <div className="grid md:grid-cols-5 md:gap-10">
                                <div className="md:col-span-2">
                                    <img src="/assets/imgs/healthbubba-doctor-with-cash.png" alt="" />
                                </div>

                                <div className="md:col-span-3">
                                    <div className="grid">
                                        <WorksItem title='Consultation Completion' caption={'After your session, you are required to fill out a case note. Once you and the patient confirm completion, your fee is moved to your wallet.'} className='md:h-44' />
                                        <WorksItem title={'Your Settlement Wallet'} caption={'Track your Pending Balance (for booked sessions) and Settled Balance (for completed sessions) right in the app.'} className='md:h-44' />
                                        <WorksItem title={'Fast Withdrawals'} caption={'Move your Settled Balance to your linked bank account at any time. Withdrawals typically take 1-3 business days.'} className='md:h-44' />
                                        <div className="p-4 bg-amber-50">
                                            <p className='text-amber-700 text-sm' ><span className='font-medium' >Note:</span> Repeated failure to attend sessions may result in account suspension.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='max-w-7xl mx-auto px-2 md:pt-20'>
                    <div className="bg-primary rounded-3xl md:px-20 px-8 text-white relative md:min-h-96 bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat md:bg-right-top bg-center bg-origin-content">
                        <div className="h-full space-y-14 flex justify-center py-8 md:py-20">
                            <div className="md:space-y-5 space-y-5 text-center">
                                <h2 className="text-3xl md:text-4xl font-semibold">Let's Get Started</h2>
                                <p className="md:text-lg text-[#F3F3F3]">Join our network of forward-thinking practitioners today.</p>
                                <Link href={route('download')} class="btn btn-secondary">Apply to Join Healthbubba <PlayIcon class={'text-white ms-2 size-4'} /></Link>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    )
}

const WorksItem = ({className, title, caption, ...props}) => {
    return (
        <div className={`p-4 bg-white  border-b border-r border-dashed space-y-2 ${className}`} {...props} >
            <div className="size-10 flex items-center justify-center shadow rounded-full ">
                <CheckBadgeIcon className='size-6' />
            </div>
            <div>
                <p className="font-semibold">{title}</p>
                <p className='text-[#1F2428] text-sm'>{caption}</p>
            </div>
        </div>
    )
}
