import React from 'react'

export const FeatureCards = () => {
    return (
        <section className="bg-[#F7F7F8] py-20 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-5 md:gap-10">
                    <div className="col-span-2">
                        <div className="border-t border-t-gray-800 shadow-md space-y-7 pt-7">
                            <div className="md:px-7 px-4">
                                <h3 className="text-lg font-semibold">Register your account and Use</h3>
                                <p className="text-muted">You can signup through the website or on the mobile app and start connecting with Healthcare professionals</p>
                            </div>
                            <div>
                                <img src="/assets/imgs/media/register.png" className="w-full" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="border-t border-t-[#0470D1] space-y-7 pt-7 bg-white min-h-full flex flex-col justify-between shadow">
                            <div className="md:px-7 px-4">
                                <h3 className="text-lg font-semibold">Easy appointment booking</h3>
                                <p className="text-muted">View your consultation timings and book appointments for clinic or online consultations without having to make phone calls. They also receive automated alerts about the status of their appointment requests.</p>
                            </div>
                            <div className="px-10">
                                <img src="/assets/imgs/media/appointments.png" className="w-full" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="border-t border-t-[#223F59]  py-7 bg-white min-h-full flex flex-col shadow space-y-7">
                        <div className="md:px-7 px-4">
                            <h3 className="text-lg font-semibold">Telehealth and Consultations</h3>
                            <p className="text-muted">You can easily follow-up and connect through your telemedicine sessions on the HealthBubba app. You can book a session, pay through the mobile app and consult via video. You also receive consultation summaries (including e-prescriptions) sent after a session.</p>
                        </div>
                        <div className="md:px-7 px-4 flex-1 flex items-center">
                            <img src="/assets/imgs/media/video-call.png" className="w-full" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="border-t border-t-[#C728FF] shadow-md space-y-7 py-7">
                        <div className="md:px-7 px-4">
                            <h3 className="text-lg font-semibold">Prescriptions on the go</h3>
                            <p className="text-muted">Get accurate and legal prescriptions from medical experts with an accurate track record of your past prescriptions and sound analysis of your current health.</p>
                        </div>
                        <div className='md:px-4 px-4'>
                            <img src="/assets/imgs/media/prescriptions.png" className="w-full" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="border-t border-t-gray-800 shadow-md space-y-5 pt-7">
                        <div className="md:px-7 px-4">
                            <h3 className="text-lg font-semibold">Mobile Payments</h3>
                            <p className="text-muted">Make Payments for telemedicine sessions, Lab tests and prescriptions right from the app </p>
                        </div>
                        <div className>
                            <img src="/assets/imgs/media/mobile-payment.png" className="w-full" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="border-t border-t-[#068940] shadow py-7 space-y-7 bg-white min-h-full flex flex-col">
                        <div className="md:px-7 px-4">
                            <h3 className="text-lg font-semibold">Mobile Notifications and Alerts</h3>
                            <p className="text-muted">You can receive notifications  about events, new services or any announcements that may be relevant to you, on your mobile app. You can also receive timely automated reminders about upcoming appointments, to reduce no-shows.</p>
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
