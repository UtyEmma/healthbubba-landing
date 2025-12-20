import Button from '@/Components/Button'
import PlayIcon from '@/Icons/PlayIcon'
import React from 'react'

export default function HeroArea() {
    return (
        <section className="md:max-w-7xl mx-auto px-4">
            <div className="text-center space-y-5 ">
                <h1 className="md:text-7xl text-4xl md:text-[64px] leading-tight md:leading-[72px] font-bold">Accessible, Affordable, and Reliable Healthcare. At Your Fingertips.
                    {/* <span className="block text-primary">All from Home.</span> */}
                </h1>
                <p className="max-w-3xl md:text-lg text-sm text-muted mx-auto">Connect with verified doctors, get lab tests, and manage prescriptions, all from the comfort of your home.</p>
                <div>
                    <Button onClick={open} className="btn btn-primary">Get Started <PlayIcon class={'text-white text-opacity-80 w-5 h-5'} /></Button>
                </div>
            </div>

            <div className="md:px-20 my-10">
                <img src="/assets/imgs/media/banner.png" className='mx-auto' alt="haelthbubba" />
            </div>
        </section>
    )
}
