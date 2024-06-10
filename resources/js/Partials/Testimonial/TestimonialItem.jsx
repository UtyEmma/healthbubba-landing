import React from 'react'
import TestimonialContent from './TestimonialContent'

export default function ({active}) {
    return (
        <div style={{
            zoom: active ? 1 : 0.95 
        }} className={active ? '' : 'bg-white p-10 shadow-sm rounded-2xl'}>
            <div className={active ? 'rounded-2xl bg-white bg-opacity-95 shadow-md p-5 md:p-16 space-y-5 relative z-50' : 'blur-sm'}>
                <TestimonialContent
                    message="I had a top-notch experience with Healthbubba! The speed and affordability of their services are unmatched. "
                    image={'/assets/imgs/avatars/jane-nwosu.png'}
                    author={'Jane Nwosu'}
                    role={'Healthcare Professional'}
                />
            </div>
        </div>
    )
}
