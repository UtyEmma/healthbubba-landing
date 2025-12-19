import React from 'react'
import Disclose from '../Display/Disclose'

export default function Input({className, prefix, suffix, ...props}) {
    return (
        <div className={`flex overflow-hidden px-2 ${className}`}>
            <Disclose as='div' className="shrink-0 pe-2 grid items-center place-content-center text-gray-700"  show={!!prefix}>
                {prefix}
            </Disclose>
            <input type="text" className='flex-1 px-0 focus:ring-0 bg-transparent border-none' {...props} />
            <Disclose as='div' className="shrink-0 pl-2 grid items-center place-content-center text-gray-700"  show={!!suffix}>
                {suffix}
            </Disclose>
        </div>
    )
}
