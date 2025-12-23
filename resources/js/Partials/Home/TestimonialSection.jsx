import React from 'react'
import Testimonial from '../Testimonial/Testimonial'
import { usePage } from '@inertiajs/react'
import TargetIcon from '@/Icons/TargetIcon'

export default function TestimonialSection() {

    const {testimonials} = usePage().props

    return (
        <section className="bg-gray-100 relative bg-cover bg-center py-20" style={{
            backgroundImage: "url('/assets/imgs/media/banners/banner-2.svg')"
        }}>
            {/* <img src="" alt="" /> */}
            <div className="flex items-center justify-center px-4">
                <div className="space-y-5 md:space-y-10 flex flex-col items-center">
                    <div className="mx-auto inline-flex border shadow text-sm bg-white items-center space-x-1 p-2 px-3 rounded-[50px]">
                        <TargetIcon className="size-5" />
                        <span>People say this about us</span>
                    </div>
                    <div className="text-center md:w-4/6 mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl font-medium">Wall of Love</h2>
                        <p className="text-muted text-sm md:text-base md:w-4/5 mx-auto">Listen to the buzz about us and discover why Health Bubba is making waves in the health tech world. Our innovative approach to healthcare is revolutionizing how people access medical services..</p>
                    </div>

                    <div className="md:max-w-7xl mx-auto">
                        <Testimonial testimonials={testimonials} />
                    </div>
                </div>
            </div>
        </section>
    )
}
