import HandleIcon from '@/Icons/HandleIcon'
import TargetIcon from '@/Icons/TargetIcon'
import GuestLayout from '@/Layouts/GuestLayout'
import { FeatureCarousel } from '@/Partials/Features/FeatureCarousel'
import HowItWorks from '@/Partials/Practitioners/HowItWorks'
import Testimonial from '@/Partials/Testimonial/Testimonial'
import { PlayIcon } from '@heroicons/react/24/solid'
import { Head, Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Practitioners({ testimonials = [], features = []}) {
    const {props} = usePage()
    return (
        <>
            <Head title='Health Practitioners' />
            <GuestLayout hideGap className="!pt-0" >
                <div className="h-[70vh] md:h-[100vh] flex items-center justify-center relative bg-no-repeat bg-center bg-cover bg-[url(/assets/imgs/female-doctor-in-office.png)] px-2">
                    <div className="absolute top-0  bottom-0 right-0 left-0 bg-gradient-to-b z-0 to-black/90 via-black-70 from-black/20"></div>
                    <div className='text-center max-w-6xl mx-auto space-y-5 md:space-y-10 pt-20 z-10'>
                        <div className=" md:space-y-5 space-y-2  text-white">
                            <h1 className='md:text-7xl text-3xl font-bold '>Flexible, Convenient Healthcare at Your Fingertips</h1>
                            <div className="md:w-4/6 mx-auto">
                                <p className='md:text-lg'>Reach more patients, manage video and in-person consultations, and streamline your payments—all on one compliant platform.</p>
                            </div>
                        </div>

                        <div className="space-x-4">
                            <Link href={'/download'} target='__blank' className="btn btn-primary shadow-[#0000001A]" >Get Started <PlayIcon class={'text-white text-opacity-80 w-5 h-5'} /> </Link>
                            <a href={'#'} target='__blank' className="btn bg-white shadow-[#0000001A]" >See How It Works</a>
                        </div>
                    </div>
                </div>

                <section className="max-w-7xl mx-auto py-10 px-2 text-center">
                    <div className="font-medium text-secondary mx-auto inline-block px-3 text-center py-1 text-sm md:text-base">Join 500+ Verified Practitioners Providing Care across Nigeria</div>
                    <div className='relative'>
                        <img src="/assets/imgs/healthbubba-doctors-wheel.png" className="h-48 object-contain mx-auto -mb-10 fade" alt="" />
                    </div>
                    <div className="shadow-sm shadow-gray-100 border-2 rounded-[50px] inline-flex items-center gap-3 text-secondary mx-auto w-auto px-8 text-center py-1 text-sm">
                        <p>HIPAA-Compliant Platform</p>
                        <div className="border-x-[1.5px] h-4"></div>
                        <p>Secure & Timely Payments</p>
                    </div>
                </section>
                {/* <section className="max-w-7xl mx-auto py-10 md:py-20 px-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col gap-5 md:gap-10">
                        <div>
                            <div className="border shadow-lg h-full rounded-xl overflow-hidden flex flex-col justify-between bg-[url(/assets/imgs/media/banners/banner-1.svg)] bg-bottom bg-no-repeat">
                                <div className="md:p-10 p-3 sm:p-5 mb-5 items-center  flex flex-col space-y-5">
                                    <div className="p-3 border shadow-md inline-block mx-auto rounded-lg">
                                        <HandleIcon className="size-[26px]" />
                                    </div>
                                    <div className="md:space-y-5 space-y-0">
                                        <h2 className="font-bold md:text-2xl text-xl text-center">Empower Yourself, Tend to All.</h2>
                                        <p className="text-muted md:text-lg text-center">Download our telemedicine app to provide seamless care to your patients from any location.</p>
                                    </div>
                                    <div className="bg-gray-200 p-1 rounded-xl space-x-2 sm:space-x-2">
                                        <a href={props.urls.doctors.playstore} target='__blank' className="btn btn-white shadow-md text-sm md:text-base">Get on PlayStore</a>
                                        <a href={props.urls.doctors.appstore} target='__blank' className="btn btn-white shadow-md text-sm md:text-base">Get on AppStore</a>
                                    </div>
                                </div>
                                <div >
                                    <img src="/assets/imgs/iphone-preview.png" className="w-full px-0 object-right-bottom object-cover mb-0" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-flow-col h-full grid-rows-2 gap-y-5">
                            <div className="shadow-lg relative border border-primary  rounded-xl bg-gradient-to-t from-[#57EF9F] to-[#57EF9F] p-4">
                                <div className="bg-[url('/assets/imgs/media/banners/hand-holding-phone.png')] absolute right-0 bottom-0 top-0 left-0 md:left-32 bg-contain bg-no-repeat z-0" />
                                <div className="text-white space-y-4 md:p-10 p-5 pt-20 absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-[#10B26F] via-[#13AB5BFA] to-transparent">
                                <h5 className="text-lg font-bold">Easy to Use</h5>
                                <p>With simplified navigation and clear instructions, patients can easily connect with doctors, receive prescriptions, and monitor their health with confidence and convenience.</p>
                                </div>
                            </div>
                        
                            <div className="border shadow-lg flex flex-col items-center rounded-xl space-y-2">
                                <div className="p-2">
                                    <img src="/assets/imgs/smiling-doctor.png" alt="" />
                                </div>
                                <div className="shadow border rounded-[50px] font-medium text-secondary mx-auto inline-block px-3 text-center py-1 text-sm md:text-base">500+ Online Healthcare Practitioners</div>
                                <div className='relative'>
                                    <img src="/assets/imgs/media/banners/image-wheel.png" className="h-32 -mt-5 object-contain mx-auto fade" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-l rounded-b-xl from-white via-transparent  to-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="md:py-20 py-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                    <div className="max-w-7xl mx-auto px-2">
                        <div className="flex items-center justify-center">
                            <div className="space-y-5 md:space-y-10 flex flex-col items-center">
                                <div className="mx-auto inline-flex border gap-1 shadow text-sm bg-white items-center space-x-1 p-1.5 px-3 rounded-[50px]">
                                    <TargetIcon className="size-5" />
                                    <span className='font-medium'>Key Features</span>
                                </div>
                                <div className="text-center md:w-5/6 px-2 mx-auto md:mb-20 space-y-3">
                                    <h2 className="text-2xl md:text-3xl leading-none font-semibold">A Platform Built for Your Convenience and Professional Growth</h2>
                                    <p className="text-muted text-sm md:text-base mx-auto">Designed to simplify your health journey and strengthen your professional path, Healthbubba brings convenience and growth together.</p>
                                </div>
                            </div>
                        </div>

                        <FeatureCarousel features={features} />
                    </div>
                </section>

                <HowItWorks />

                {/* Testimonials Start */}
                <section className="bg-gray-100 relative bg-cover bg-center py-20" style={{backgroundImage: "url('/assets/imgs/media/banners/banner-2.svg')"}}>
                    <div className=" px-2">
                        <h2 className="text-3xl text-center md:text-4xl font-semibold">Trusted by Your Peers</h2>
                        <div className="space-y-5 flex flex-col items-center">
                            {/* <div className="mx-auto inline-flex border shadow text-sm bg-white items-center space-x-1 p-2 px-3 rounded-[50px]">
                                <TargetIcon className="size-5" />
                                <span>People say this about us</span>
                            </div> */}
                            {/* <div className="text-center md:w-4/6 mx-auto space-y-4"> */}
                                {/* <p className="text-muted text-sm md:text-base md:w-4/5 mx-auto">Listen to the buzz about us and discover why Health Bubba is making waves in the health tech world. Our innovative approach to healthcare is revolutionizing how people access medical services..</p> */}
                            {/* </div> */}

                            <div className="md:max-w-7xl mx-auto">
                                <Testimonial testimonials={testimonials} />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonials End */}

                <section className="py-10 md:py-20 px-2 max-w-7xl mx-auto ">
                    <div className="bg-primary rounded-2xl md:px-20 px-5 text-white relative md:min-h-96 bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat md:bg-right-top bg-center bg-origin-content">
                        <div className="md:w-1/2 h-full flex items-center py-5 md:py-20">
                            <div className="md:space-y-5 space-y-1">
                                <h2 className="text-2xl md:text-4xl font-semibold">Ready to Re-invent Your Practice?</h2>
                                <p className="md:text-lg text-white">Join our network of forward-thinking practitioners today.</p>

                                <div className="pt-3">
                                    <Link href={route('download')} class="btn btn-secondary">Start Your Application <PlayIcon class={'text-white w-6 h-6'} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className='hidden md:block'>
                            <img src="/assets/imgs/cta-phone-preview.png" className="absolute top-0 right-0" alt="" />
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    )
}
