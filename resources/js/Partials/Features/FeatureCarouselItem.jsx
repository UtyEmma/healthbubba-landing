import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React, { useMemo } from 'react'

export default function FeatureCarouselItem({title, next, prev, stopAutoplay, description, image}) {

    const nextItem = () => {
        next();
        stopAutoplay()
    }

    const prevItem = () => {
        prev();
        stopAutoplay()
    }
    
    return (
        <div className="rounded-xl border-[3px] mx-auto bg-white border-gray-200" >
            <div className="pb-4 pt-3 px-3 md:px-5  border-b border-gray-200">
                <div className='flex px-2...........\...., space-x-1'>
                    <div className="size-2 rounded-full bg-[#FF0000]"></div>
                    <div className="size-2 rounded-full bg-[rgb(0,128,0)]"></div>
                    <div className="size-2 rounded-full bg-[#FF8000]"></div>
                </div>
            </div>
            <div className="md:p-5 p-3 border-b">
                <div className="grid md:grid-cols-2">
                    <div className='md:px-2 h-full flex flex-col space-y-3'>
                        <div className="flex-1">
                            <h1 className='font-semibold text-lg'>{title}</h1>
                            <p className='text-muted md:text-base text-sm' >{description}</p>
                        </div>

                        <div className="md:py-5 shrink-0">
                            <div className='space-x-2 md:flex hidden' >
                                <button onClick={prevItem} className="rounded-full p-3 bg-white shadow border">
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>
                                
                                <button onClick={nextItem} className="rounded-full p-3 bg-white shadow border">
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={image} className='rounded-[2px] w-full' alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-5'>
                <Link href='/download' className='btn btn-primary'>Download App <PlayIcon className='text-white text-opacity-80 w-5 h-5' /></Link>
            </div>
        </div>
    )
}
