import { Disclosure, Transition } from '@headlessui/react'
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
        <Disclosure.Button className={`group border-none focus:border-none flex p-2 w-full justify-between !text-left items-center gap-2 ${className}`} {...props}>
            <p className='font-medium text-left'>{children}</p>

            <PlusIcon className="w-5 shrink-0 text-black group-data-open:rotate-180" />
        </Disclosure.Button>
    )
}

Accordion.Content = ({children, className = '', ...props}) => {
    return (
        // <div className="overflow-hidden">
        <Transition
            enter="duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="duration-300 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-6"
        >
            <Disclosure.Panel 
                transition
                className={`origin-top transition overflow-hidden text-gray-500 px-2 pb-2 duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 ${className}`} 
                {...props} 
            >
                {children}
            </Disclosure.Panel >
        </Transition>
        // </div>
    )
}

export default Accordion
