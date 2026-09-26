import { usePage } from "@inertiajs/react"
import { useMemo } from "react"

export const isApplePlatform = () => {
    if (typeof navigator === 'undefined') return false

    const platform = `${navigator.platform || ''} ${navigator.userAgent || ''}`
    return /iPhone|iPad|iPod|Macintosh|MacIntel|MacPPC|Mac68K/i.test(platform)
}

export const useAppUrls = () => {

    const {urls} = usePage().props

    const doctor = useMemo(() => {
        return isApplePlatform() ? urls.doctors.appstore : urls.doctors.playstore;
    }, [urls])

    const patient = useMemo(() => {
        return isApplePlatform() ? urls.patients.appstore : urls.patients.playstore;
    }, [urls])

    return { patient, doctor }
}