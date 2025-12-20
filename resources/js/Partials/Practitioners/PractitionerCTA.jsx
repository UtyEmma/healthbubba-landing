import PlayIcon from '@/Icons/PlayIcon'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function PractitionerCTA() {
    return (
        <section className="py-5 md:py-20 px-4 max-w-7xl mx-auto ">
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
    )
}
