import { Disclosure } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Card from '../Card'

function Accordion({children, className = '', ...props}) {
    return (
        <Card {...props} className={`border-2 rounded-2xl divide-y-2 !p-0 shadow-gray-100 !space-y-0 ${className}`} >
            {children}
        </Card>
    )
}

Accordion.Panel = ({children, className = '', ...props}) => {
    return (
        <Disclosure as={'div'} {...props} className={`p-3 ${className}`}>
            {children}
        </Disclosure>
    )
}

Accordion.Button = ({children, className = '', ...props}) => {
    return (
        <Disclosure.Button className={`group border-none focus:border-none flex p-2 w-full justify-between items-center gap-2 ${className}`} {...props}>
            <span className='font-medium'>{children}</span>

            <PlusIcon className="w-5 text-black group-data-open:rotate-180" />
        </Disclosure.Button>
    )
}

Accordion.Content = ({children, className = '', ...props}) => {
    return (
        // <div className="overflow-hidden">
            <Disclosure.Panel 
                transition
                className={`origin-top transition text-gray-500 px-2 pb-2 duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 ${className}`} 
                {...props} 
            >
                {children}
            </Disclosure.Panel >
        // </div>
    )
}

export default Accordion
