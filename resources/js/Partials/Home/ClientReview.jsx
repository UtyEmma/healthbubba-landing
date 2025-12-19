import React from 'react'

export const ClientReview = () => {
    return (
        <section className="bg-primary py-10 md:px-20 md:py-20 relative overflow-hidden bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat bg-top bg-origin-content">
            <div className="md:w-1/2 text-center text-white mx-auto space-y-10 z-10 px-4">
                <p className='text-2xl' >What people have to say about HealthBubba</p>
                <p className="md:text-xl">“I am impressed by Health Bubba's patient-centric contributions towards the Nigerian Health sector by leveraging technology to redefine quality healthcare. ”</p>
                <div className="flex justify-center items-center space-x-3">
                    <div>
                        <img className="w-14 h-14" src="/assets/imgs/logos/smartpharma.png" alt="" />
                    </div>
                    <div className="text-left">
                        <p className="font-bold">Oluchi  Anoruo</p>
                        <p>CoFounder, SmartPharm</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
