import React, { useState } from 'react'
import TestimonialContent from './TestimonialContent';
import TestimonialItem from './TestimonialItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function () {

    const [active, setActive] = useState(0);
    const [next, setNext] = useState(1);
    const [prev, setPrev] = useState(2);



    return (
        <div className="flex flex-col md:flex-row md:space-x-20 justify-center items-center px-4">
            <div>
                <button className="hidden md:block rounded-full p-3 bg-white shadow border">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="md:w-4/6 relative">
                <div className="px-5 md:px-10">
                    <div className='flex space-x-2  md:space-x-5 absolute items-center top-0 bottom-0 z-0 right-0 left-0'>
                        <TestimonialItem
                            message="I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched. "
                            image={'/assets/imgs/avatars/jane-nwosu.png'}
                            author={'Jane Nwosu'}
                            role={'Healthcare Professional'}
                            classes={{
                                message: 'line-clamp-1'
                            }}
                        />
                        <TestimonialItem
                            message="I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched. "
                            image={'/assets/imgs/avatars/jane-nwosu.png'}
                            author={'Jane Nwosu'}
                            role={'Healthcare Professional'}
                            classes={{
                                message: 'line-clamp-1'
                            }}
                        />
                    </div>

                    <TestimonialItem
                        message="I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched. "
                        image={'/assets/imgs/avatars/jane-nwosu.png'}
                        author={'Jane Nwosu'}
                        role={'Healthcare Professional'}
                        active={true}
                    />
                </div>
            </div>

            <div>
                <button className="hidden md:block rounded-full p-3 bg-white shadow border">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="flex justify-center space-x-10 mt-10">
                <button className="block md:hidden rounded-full p-3 bg-white shadow border">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button className="block md:hidden rounded-full p-3 bg-white shadow border">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
