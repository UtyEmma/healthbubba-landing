import React, { useEffect, useMemo, useState } from 'react'
import TestimonialContent from './TestimonialContent';
import TestimonialItem from './TestimonialItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';

export default function () {

    const [items, setItems] = useState([
        {
            message: 'I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched.',
            image: '/assets/imgs/avatars/jane-nwosu.png',
            role: 'Healthcare Professional',
            author: 'Jane Nwosu'
        },
        {
            message: 'I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched.',
            image: '/assets/imgs/avatars/jane-nwosu.png',
            role: 'Healthcare Professional',
            author: 'Jane Nwosu'
        },
        {
            message: 'I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched.',
            image: '/assets/imgs/avatars/jane-nwosu.png',
            role: 'Healthcare Professional',
            author: 'Jane Nwosu'
        },
        {
            message: 'I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched.',
            image: '/assets/imgs/avatars/jane-nwosu.png',
            role: 'Healthcare Professional',
            author: 'Jane Nwosu'
        },
    ])


    const [active, setActive] = useState(0);
    const [next, setNext] = useState(1);
    const [prev, setPrev] = useState(items.length - 1);
    const [forward, setForward] = useState(false)

    const isLastItem = useMemo(() => next == items.length, [next])

    const nextItem = () => {
        setForward(true);

        let current = active;
        let previousItem = prev
        let nextItem = next

        setActive(nextItem);
        setPrev(current);
        setNext((next) => {
            const num = next + 1
            return num == items.length ? 0 : num 
        });
    }
    
    const prevItem = () => {
        setForward(false)

        let current = active;
        let previousItem = prev
        let nextItem = next

        setActive(previousItem);
        setNext(current);
        setPrev(prev => {
            let num = prev - 1
            return num <= 0 ? (items.length - 1) : num 
        });

    }



    return (
        <div className="flex flex-col md:flex-row md:space-x-20 justify-center items-center md:px-4">
            <div>
                <button onClick={prevItem} className="hidden md:block rounded-full p-3 bg-white shadow border">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="md:w-4/6 relative overflow-hidden">
                <div className="md:px-0 relative md:p-5 ">
                    <div className={'flex items-center py-10 md:px-5 md:space-x-3 ' + `${isLastItem ? 'justify-start' : 'justify-end'}`}>
                        {
                            items.map((item, index) => (
                                <>
                                    <Transition as='div' 
                                        className={'duration-1000'} 
                                        show={index == prev}  
                                        enterFrom='translate-x-full'
                                        enterTo='translate-x-0'
                                        leaveFrom='translate-x-0'
                                        leaveTo={forward ? 'scale-110 -translate-x-40' : 'translate-x-full'}
                                        leave='absolute z-50 hidden'
                                    >
                                        <TestimonialItem 
                                            {...item}
                                            classes={{
                                                message: 'line-clamp-1'
                                            }}
                                            index={index}
                                            next={next}
                                            prev={prev}
                                            label={index == prev ? 'prev' : 'next'}
                                            active={false}
                                        />
                                    </Transition>
                                
                                    <Transition as='div' className={'duration-1000'} 
                                        enterFrom='translate-x-full'
                                        enterTo='translate-x-0'
                                        leaveFrom='translate-x-0'
                                        leaveTo='scale-110 -translate-x-40'
                                        leave='absolute z-50 hidden'
                                        show={index == next}  >
                                        <TestimonialItem 
                                            {...item}
                                            classes={{
                                                message: 'line-clamp-1'
                                            }}
                                            index={index}
                                            next={next}
                                            prev={prev}
                                            label={index == next ? 'next' : 'prev'}
                                            active={false}
                                        />
                                    </Transition>
                                
                                    <Transition 
                                        show={index == active} 
                                        as='div'  
                                        className={`absolute left-5 right-5 md:left-16 md:right-16 z-10 duration-1000 py-5`}
                                        enterFrom={`${forward ? 'translate-x-full' : '-translate-x-full'} scale-0`}
                                        enterTo='scale-100 translate-0'
                                        leaveFrom='scale-100 translate-0'
                                        leaveTo={`top-0 bottom-0 left-0 right-0 scale-0 ${forward ? '-translate-x-full' : ' translate-x-full'}`}
                                    >
                                        <TestimonialItem
                                            message="I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched. "
                                            image={'/assets/imgs/avatars/jane-nwosu.png'}
                                            author={'Jane Nwosu'}
                                            role={'Healthcare Professional'}
                                            active={index == active}
                                        />
                                    </Transition>
                                </>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div>
                <button onClick={nextItem} className="hidden md:block rounded-full p-3 bg-white shadow border">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="md:hidden flex justify-center space-x-10 mt-10">
                <button onClick={prevItem} className="block md:hidden rounded-full p-3 bg-white shadow border">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button onClick={nextItem} className="block md:hidden rounded-full p-3 bg-white shadow border">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

const Items = () => (
    <div className="md:w-4/6 relative">
        <div className="px-5 md:px-10">
            <div className='flex space-x-2  md:space-x-5 absolute items-center top-0 bottom-0 z-0 right-0 left-0'>
                <TestimonialItem
                    message="I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched."
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
)
