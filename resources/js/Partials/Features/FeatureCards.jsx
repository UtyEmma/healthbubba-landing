import TargetIcon from '@/Icons/TargetIcon'
import React from 'react'

export const FeatureCards = () => {
    return (
        <section className="bg-[#F7F7F8] py-20 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-y-2 border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div class="space-y-5 mb-10">
                    <div className="flex justify-center">
                        <div className="mx-auto inline-flex border bg-white shadow font-medium text-sm items-center gap-2 p-2 px-3 rounded-[50px]">
                            <TargetIcon className="size-5"  />
                            <span>Simplifying remote healthcare</span>
                        </div>
                    </div>
                    <div className="text-center md:w-2/4 mx-auto mb-20 space-y-5">
                        <h2 className="text-3xl font-semibold">How to get started</h2>
                        <p className="text-muted text-sm md:text-base">Here's how HealthBubba simplifies the process of connecting with healthcare professionals.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-5 md:gap-10">
                    <div className="col-span-2">
                        <div className="border-t border-t-gray-800 shadow-md space-y-7 pt-7">
                            <div className="md:px-7 px-4">
                                <h3 className="text-[16px] mb-[12px] font-semibold">Register Your Account and Get Started</h3>
                                <p className="text-muted text-[14px]">You can sign up through the website or on the mobile app and start connecting with licensed healthcare professionals.</p>
                            </div>
                            <div>
                                <img src="/assets/imgs/media/register.png" className="w-full" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="border-t border-t-[#0470D1] space-y-7 pt-7 bg-white min-h-full flex flex-col justify-between shadow">
                            <div className="md:px-7 px-4">
                                <h3 className="text-[16px] mb-[12px] font-semibold">Easy Consultation Booking</h3>
                                <p className="text-muted text-[14px]">View available timings and book health consultations for clinic or virtual sessions without making phone calls. You will also receive automated alerts about the status of your requests.</p>
                            </div>
                            <div className="px-10">
                                <img src="/assets/imgs/media/appointments.png" className="w-full" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="border-t border-t-[#223F59]  py-7 bg-white min-h-full flex flex-col shadow space-y-7">
                        <div className="md:px-7 px-4">
                            <h3 className="text-[16px] mb-[12px] font-semibold">Convenient Consultations</h3>
                            <p className="text-muted text-[14px]">Easy video consultations with licensed healthcare professionals. Receive clear next-step guidance after every session.</p>
                        </div>
                        <div className="md:px-7 px-4 flex-1 flex items-center">
                            <img src="/assets/imgs/media/video-call.png" className="w-full" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="border-t border-t-[#C728FF] shadow-md space-y-7 py-7">
                        <div className="md:px-7 px-4">
                            <h3 className="text-[16px] mb-[12px] font-semibold">Health Guidance</h3>
                            <p className="text-muted text-[14px]">Get health guidance and stay on top of your care plan with trusted professionals who have a proven track record.</p>
                        </div>
                        <div className='md:px-4 px-4'>
                            <img src="/assets/imgs/media/prescriptions.png" className="w-full" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="border-t border-t-gray-800 shadow-md space-y-5 pt-7">
                        <div className="md:px-7 px-4">
                            <h3 className="text-[16px] mb-[12px] font-semibold">Secure Mobile Payments</h3>
                            <p className="text-muted text-[14px]">Make payments for consultations and lab appointments right from the app – simple, fast, and secure.</p>
                        </div>
                        <div className>
                            <img src="/assets/imgs/media/mobile-payment.png" className="w-full" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="border-t border-t-[#068940] shadow py-7 space-y-7 bg-white min-h-full flex flex-col">
                        <div className="md:px-7 px-4">
                            <h3 className="text-[16px] mb-[12px] font-semibold">Mobile Notifications and Alerts</h3>
                            <p className="text-muted text-[14px]">Receive notifications about new services, events, or announcements relevant to you. Get timely automated reminders about upcoming appointments to help you stay on track.</p>
                        </div>
                        <div className="flex-1 flex items-center md:px-10 px-4">
                            <img src="/assets/imgs/media/notifications.png" className="w-full" alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
