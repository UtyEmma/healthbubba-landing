import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function ({test, className}) {
    return (
        // <div className={`p-1 rounded-2xl hover:shadow-xl border border-gray-200 transition-all duration-150 ${className}`}>
        //     <div>
        //         <img src="/assets/imgs/packages/microbiology.png" alt="" />
        //     </div>
        //     <div className="p-3 space-y-4">
        //         <div className="space-y-2">
        //         <Link href={route('packages.detail', {
        //             package: test.test_id
        //         })} className="font-semibold text-sm line-clamp-1" >{test.test_name}</Link>
        //         <p className="text-muted line-clamp-3">{test.test_desc}</p>
        //         </div>
        //         <Link href={route('packages.detail', {
        //             package: test.test_id
        //         })} className="py-1 px-3 border-gray-200 border-2 space-x-5 font-medium rounded-[50px] shadow-sm inline-flex items-center">Read More <ArrowRightIcon className='w-3 ms-3' /></Link>
        //     </div>
        // </div>
        <div className={`p-1 rounded-2xl hover:shadow-xl border border-gray-200 transition-all duration-150 ${className}`}>
            <div>
                <img src="/assets/imgs/packages/microbiology.png" alt="" />
            </div>
            <div className="p-3 space-y-4">
                <div className="space-y-2">
                <a className="font-semibold text-sm line-clamp-1" >Microbiology</a>
                <p className="text-muted line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, delectus.</p>
                </div>
                <a className="py-1 px-3 border-gray-200 border-2 space-x-5 font-medium rounded-[50px] shadow-sm inline-flex items-center">Read More <ArrowRightIcon className='w-3 ms-3' /></a>
            </div>
        </div>
    )
}
