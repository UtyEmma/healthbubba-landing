import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function ({test, className}) {

    const {props} = usePage()

    return (
        <div className={`p-1 rounded-2xl min-h-full flex flex-col md:hover:shadow-xl border border-gray-200 transition-all duration-150 ${className}`}>
            <div className='rounded-xl overflow-hidden h-40'>
                <img src={`${props.content}${test.test_pic}`} className='object-cover h-full w-full' alt="" />
            </div>
            <div className="p-3 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                    <Link href={route('packages.detail', {
                        package: test.test_id
                    })} className="font-semibold text-sm line-clamp-1" >{test.test_name}</Link>
                    <p className="text-muted line-clamp-3">{test.test_heading}</p>
                </div>

                <div>
                    <Link href={route('packages.detail', {
                        package: test.test_id
                    })} className="py-1 px-3 flex-shrink border-gray-200 border-2 space-x-5 font-medium rounded-[50px] shadow-sm inline-flex items-center">Read More <ArrowRightIcon className='w-3 ms-3' /></Link>
                </div>
            </div>
        </div>
    )
}
