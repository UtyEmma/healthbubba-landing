import PlayIcon from '@/Icons/PlayIcon'
import React from 'react'

export const Cta = () => {
    return (
        <div className="bg-primary rounded-2xl px-20 text-white relative min-h-96 bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat bg-center bg-origin-content">
            <div className="w-1/2 h-full flex items-center py-20">
                <div className="space-y-5">
                    <h2 className="text-4xl font-semibold">Begin Your Wellness Journey</h2>
                    <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur. Montes posuere non lorem tempus mus. Vitae laoreet ipsum mi sagittis id vehicula semper. Sed enim mollis pulvinar.</p>
                    <button class="btn btn-secondary">Download <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></button>
                </div>
            </div>
            <div>
                <img src="/assets/imgs/media/iphone-demo.png" className="absolute top-0 right-0" alt="" />
            </div>
        </div>
    )
}
