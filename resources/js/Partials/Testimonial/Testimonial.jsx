import React, { useState } from 'react'
import TestimonialContent from './TestimonialContent';
import TestimonialItem from './TestimonialItem';

export default function () {

    const [active, setActive] = useState(0);
    const [next, setNext] = useState(1);
    const [prev, setPrev] = useState(2);

    return (
        <div className="px-10">
            <div className='flex space-x-5 absolute items-center top-0 bottom-0 z-0 right-0 left-0'>
                <TestimonialItem />
                <TestimonialItem />
            </div>

            <TestimonialItem active={true} />
        </div>
    )
}
