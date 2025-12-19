import { usePage } from '@inertiajs/react'
import Marquee from 'react-fast-marquee';
import React from 'react'

export default function HospitalLogosDisplay() {

    const {hospitals} = usePage().props
    return (
        <div className='py-10 space-y-7 max-w-6xl mx-auto'>
            <div>
                <h3 className='font-semibold text-3xl text-center' >Trusted by Leading Hospitals</h3>
            </div>

            <Marquee >
                { hospitals.map(hospital => <HospitalItem hospital={hospital} /> ) }
            </Marquee>
        </div>
    )
}

const HospitalItem = ({hospital}) => {
    return (
        <div className="flex items-center mx-5 gap-1">
            <div className='size-14 px-0.5 rounded border'>
                <img src={hospital.logo} className='h-full w-full object-contain' alt="" />
            </div>

            <p className="font-medium">{hospital.name}</p>
        </div>
    )
} 
