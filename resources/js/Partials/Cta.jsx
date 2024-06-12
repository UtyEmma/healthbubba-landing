import PlayIcon from '@/Icons/PlayIcon'
import React from 'react'

export const Cta = () => {
    return (
        <div className="bg-primary rounded-2xl md:px-20 px-10 text-white relative min-h-96 bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat bg-right-top bg-origin-content">
            <div className="md:w-1/2 h-full flex items-center py-10 md:py-20">
                <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl font-semibold font-inter">Begin Your Wellness Journey</h2>
                    <p className="md:text-lg text-white">Lorem ipsum dolor sit amet consectetur. Montes posuere non lorem tempus mus. Vitae laoreet ipsum mi sagittis id vehicula semper. Sed enim mollis pulvinar.</p>
                    <button class="btn btn-secondary mt-20">Download <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></button>
                </div>
            </div>

            <div className='hidden md:block'>
                <img src="/assets/imgs/media/iphone-demo.png" className="absolute top-0 right-0" alt="" />
            </div>
        </div>
    )
}
