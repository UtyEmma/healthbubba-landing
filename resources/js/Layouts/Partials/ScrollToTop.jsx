import Disclose from '@/Components/Display/Disclose'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

export const ScrollToTop = () => {

    const [show, setShow] = useState(false)

    const toggle = () => window.scrollY > (window.innerHeight * 2) ? setShow(true) : setShow(false)

    useEffect(() => {
        window.addEventListener('scroll', (e) => toggle())
        return window.removeEventListener('scroll', () => toggle())
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Disclose show={show}>
            <button onClick={scrollUp} className="btn ring-0 fixed bottom-3 right-3 rounded-full p-2 bg-primary hover:bg-primary-500 text-white">
                <ChevronUpIcon className='w-6 h-6' />
            </button>
        </Disclose>
    )
}
