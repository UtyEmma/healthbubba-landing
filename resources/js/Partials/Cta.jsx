import React from 'react'

export const Cta = () => {
    return (
        <div className="bg-primary rounded-2xl px-20 text-white relative min-h-96 bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat bg-center bg-origin-content">
            <div className="w-1/2 h-full flex items-center py-20">
                <div className="space-y-5">
                    <h2 className="text-4xl font-semibold">Begin Your Wellness Journey</h2>
                    <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur. Montes posuere non lorem tempus mus. Vitae laoreet ipsum mi sagittis id vehicula semper. Sed enim mollis pulvinar.</p>
                    <div className="w-[110px] h-9 px-3 py-1.5 bg-neutral-800 rounded-lg shadow shadow-inner justify-start items-center gap-[3px] inline-flex">
                        <div className="h-9 opacity-50 bg-gradient-to-b from-white to-white rounded-md" />
                        <div className="h-9 bg-gradient-to-b from-white to-white rounded-md" />
                        <div className="text-white text-sm font-medium leading-normal">Download</div>
                        <div className="w-4 h-4 opacity-60 flex-col justify-center items-center inline-flex">
                            <div className="w-4 h-4 relative">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6" clipPath="url(#clip0_690_1471)">
                                <path d="M11.6 8.00039L6 4.40039V11.6004L11.6 8.00039Z" fill="white" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                <clipPath id="clip0_690_1471">
                                    <rect width={16} height={16} fill="white" />
                                </clipPath>
                                </defs>
                            </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/imgs/media/iphone-demo.png" className="absolute top-0 right-0" alt="" />
            </div>
        </div>
    )
}
