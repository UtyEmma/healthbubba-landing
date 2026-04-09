import { usePage } from '@inertiajs/react'
import React, { useMemo } from 'react'

export default function AppStoreButton({className, type = 'patient'}) {

    const {urls} = usePage().props

    const url = useMemo(() => {
        if(type == 'patient') return urls.patients.appstore
        return urls.doctors.appstore
    }, [type])

    return (
        <a href={url} target='__blank'>
            <img src="/assets/svgs/app-store.svg" className={`h-12 rounded-xl ${className}`} alt="" />
        </a>
    )
}
