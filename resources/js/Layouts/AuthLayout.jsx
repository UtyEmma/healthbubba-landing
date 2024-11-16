import Toast from '@/Components/Toast'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function ({children}) {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center p-4 space-y-5 justify-center">
                <div>
                    <Link href={route('home')}>
                        <img src="/assets/imgs/logos/logo-long.svg" alt="" />
                    </Link>
                </div>
                <div className="md:w-4/12">
                    {children}
                </div>
            </div>

            
            <Toast />
        </>
    )
}
