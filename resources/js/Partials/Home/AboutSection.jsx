import CommandIcon from '@/Icons/CommandIcon'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function AboutSection() {
    const {props} = usePage()

    return (
        <section className="max-w-7xl mx-auto py-10 md:py-20 px-3 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col gap-5 md:gap-10">
                <div>
                    <div className="border shadow-lg h-full rounded-3xl overflow-hidden flex flex-col justify-between bg-[url(/assets/imgs/media/banners/banner-1.svg)] bg-bottom bg-no-repeat">
                        <div className="md:p-10 p-3 sm:p-5 mb-5 items-center  flex flex-col space-y-5">
                            <div className="p-3 border shadow-md inline-block mx-auto rounded-lg">
                                <CommandIcon />
                            </div>
                            
                            <div className="space-y-5">
                                <h2 className="font-bold text-2xl text-center">Begin your wellness journey</h2>
                                <p className="text-muted md:text-lg text-center">Get the HealthBubba’s Patient App, consult and connect with specialists and healthcare professionals. </p>
                            </div>

                            <div className="p-2 border shadow-md w-1/4 mx-auto rounded-lg">
                                <div className="overflow-hidden border rounded-lg">
                                    <img src="/assets/bubba_play.png" class="w-full aspect-square"  alt="" />
                                </div>
                            </div>
                            {/* <div className="bg-gray-200 p-1 rounded-xl space-x-2 sm:space-x-2">
                                <a href={props.urls.patients.playstore} target='__blank' className="btn btn-white shadow-md text-sm md:text-base">Get on PlayStore</a>
                                <a href={props.urls.patients.appstore} target='__blank' className="btn btn-white shadow-md text-sm md:text-base">Get on AppStore</a>
                            </div> */}
                        </div>
                        <div >
                            <img src="/assets/imgs/media/book-appointment.png" className="w-full px-0 object-right-bottom object-cover mb-0" alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-col h-full grid-rows-2 gap-y-5">
                    <div className="shadow-lg relative border border-primary  rounded-3xl bg-gradient-to-t from-[#57EF9F] to-[#57EF9F] p-4">
                        <div className="bg-[url('/assets/imgs/media/banners/hand-holding-phone.png')] absolute right-0 bottom-0 top-0 left-0 md:left-32 bg-contain bg-no-repeat z-0" />
                        <div className="text-white space-y-4 md:p-10 p-5 pt-20 absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-[#10B26F] via-[#57EF9F] to-transparent">
                        <h5 className="text-lg font-bold">Easy to Use</h5>
                        <p>With simplified navigation and clear instructions, patients can easily connect with doctors, receive prescriptions, and monitor their health with confidence and convenience.</p>
                        </div>
                    </div>
                <div>
                    <div className="border shadow-lg flex flex-col items-center rounded-3xl space-y-2">
                        <div className="p-2">
                            <img src="/assets/imgs/media/banners/doctor-with-mobile-phone.png" alt="" />
                        </div>
                        <div className="shadow border-2 rounded-[50px] font-medium text-secondary mx-auto inline-block px-3 text-center py-1 text-sm md:text-base">500+ Online Healthcare Practitioners</div>
                        <div className='relative'>
                            <img src="/assets/imgs/media/banners/image-wheel.png" className="h-32 -mt-5 object-contain mx-auto fade" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent  to-white" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
