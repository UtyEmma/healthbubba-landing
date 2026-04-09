import { usePage } from '@inertiajs/react'
import React, { useMemo } from 'react'

export default function PlaystoreButton({className, type = 'patient'}) {

    const {urls} = usePage().props
    
    const url = useMemo(() => {
        if(type == 'patient') return urls.patients.playstore
        return urls.doctors.playstore
    }, [type])

    return (
        <a href={url} target='__blank'>
            <img src="/assets/svgs/google-play.svg" className={`h-12 rounded-xl ${className}`} alt="" />
        </a>
    )
}

