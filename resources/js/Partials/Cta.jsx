import PlayIcon from '@/Icons/PlayIcon'
import { Link } from '@inertiajs/react'
import React from 'react'

export const Cta = () => {
    return (
        <div className="bg-primary rounded-2xl md:px-20 px-8 text-white relative md:min-h-96 bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat md:bg-right-top bg-center bg-origin-content">
            <div className="md:w-1/2 h-full space-y-10 md:space-y-14 py-8 md:py-20">
                <div className="md:space-y-5 space-y-5">
                    <h2 className="text-3xl md:text-4xl font-semibold">Begin Your Wellness Journey</h2>
                    <p className="md:text-lg text-white">Discover a new era of personalized wellness – welcome to a platform that truly transforms healthcare.</p>
                </div>

                <Link href={route('download')} class="btn btn-secondary">Download <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></Link>
            </div>

            <div className='hidden md:block'>
                <img src="/assets/imgs/media/iphone-demo.png" className="absolute top-0 right-0" alt="" />
            </div>
        </div>
    )
}
