import { Dialog, Popover, Transition } from '@headlessui/react'
import { CheckCircleIcon, PlayIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React, { useState } from 'react'

export const CartModal = () => {

    const [show, setShow] = useState(false)

    const close = () => setShow(false)

    const open = () => setShow(true)

    return (
        <>
            <Transition appear show={show}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen bg-black/25 overflow-y-auto">
                        <div className="flex min-h-full relative items-center justify-center p-4">
                            <div className="absolute top-3 md:top-10 left-2 md:left-auto right-2 md:right-5 p-5 bg-white rounded-2xl space-y-7 w-auto md:w-2/6">
                                <div className="flex justify-between" >
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon className='w-7 h-7 text-green-800' />
                                        <p className='font-semibold text-lg'>Added to Cart</p>
                                    </div>

                                    <div>
                                        <button onClick={close}>
                                            <XMarkIcon className='w-7 h-7' />
                                        </button>
                                    </div>
                                </div>

                                <div className='grid grid-cols-12 gap-5'>
                                    <div className="col-span-2">
                                        <img src="/assets/imgs/media/banners/sti.jpeg" className='aspect-square w-full rounded-xl object-cover' alt="" />
                                    </div>
                                    <div className="col-span-10 space-y-1">
                                        <h3 className='font-semibold'>Herpes Simplex Virus Type 1 IgM Ab</h3>
                                        <div class="w-[94px] h-7 px-2.5 py-1 bg-white rounded-[99px] shadow justify-center items-center gap-2.5 inline-flex font-medium">
                                        <div class="text-neutral-900 text-sm font-normal font-['Inter'] leading-tight">NGN 5,000</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center space-x-4'>
                                    <Link href={route('cart')} onClick={close} className='btn btn-light shadow-none text-sm'>View Cart (1)</Link>
                                    <Link href={route('checkout')} onClick={close} className='btn btn-primary shadow-none text-sm'>Checkout <PlayIcon class={'text-white text-opacity-70 w-5 h-5'} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}
