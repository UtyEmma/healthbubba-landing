import { Disclosure, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'

export const FaqItem = ({title, content, open = false}) => {
    return (
        <>
            <Disclosure as={'div'} defaultOpen={open} className="p-5 space-y-3">
                {({open}) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between" role="button">
                            <h4 className="font-semibold text-left font-[Inter] text-[14px]">{title}</h4>
                            <div className="w-1/12 text-end flex justify-end">
                                {open ? <MinusIcon className='w-5 h-5' /> : <PlusIcon className='w-5 h-5' />}
                                {/* <span><i className="bi bi-dash" /></span> */}
                            </div>
                        </Disclosure.Button>

                        <Transition
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 -translate-y-6"
                            enterTo="opacity-100 translate-y-0"
                            leave="duration-300 ease-out"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-6"
                        >
                            <Disclosure.Panel>
                                    <p className="w-11/12 text-muted font-[Inter] text-[14px]">{content}</p>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </>
    )
}
