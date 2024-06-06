import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'

export default function () {
    return (
        <GuestLayout>
            <div className="py-20">
                <div class="min-h-[80vh] border-[#11AA6C] border-solid border-2 px-20 rounded-xl bg-primary max-w-6xl mx-auto relative  bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat bg-top bg-origin-content">
                    <div className="w-1/2 text-white space-y-3 py-16">
                        <img src="/assets/imgs/logos/logo-black.svg " alt="" />

                        <div >
                            <h2 class={'text-4xl font-bold'}>Book appointment, Order a Lab Test and Manage your Medications.</h2>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Montes posuere non lorem tempus mus. Vitae laoreet ipsum mi sagittis id vehicula semper. Sed enim mollis pulvinar.</p>
                        </div>

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


                        <div class={'flex items-center space-x-4'}>
                            <div>
                                <img src="/assets/imgs/qr-code-2.svg" class={'w-20'} alt="" />
                            </div>

                            <div>
                                <h2 class={'text-2xl text-white font-bold'}>Scan to download <br /> the app</h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="/assets/imgs/media/mobile-display.png" class={'absolute -top-20 w-1/2 right-0'} alt="" />
                    </div>

                </div>
            </div>
        </GuestLayout>
    )
}
