import { useCart } from '@/Context/CartContext'
import { toNumber } from '@/Helpers/Utils'
import useClickOutside from '@/Hooks/useClickOutside'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { CheckCircleIcon, PlayIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, usePage } from '@inertiajs/react'
import React, { useRef, useState } from 'react'

export const CartModal = ({show, setShow, item, setItem}) => {

    const close = () => {
        setShow(false);
        setItem({});
    }

    const { items } = useCart()

    const ref = useRef(null)

    useClickOutside(ref, () => setShow(false))

    return (
        <>
            <Dialog as="div"  open={show} className="relative z-50 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen bg-black/25 overflow-y-auto">
                    <div className="flex min-h-full relative items-center justify-center p-4">
                        <div ref={ref} className="absolute top-3 md:top-10 left-2 md:left-auto right-2 md:right-5 p-5 bg-white rounded-2xl space-y-7 w-auto md:w-2/6">
                            <div className="flex justify-between" >
                                <div className='flex items-center space-x-2'>
                                    <CheckCircleIcon className='w-7 h-7 text-green-600' />
                                    <p className='font-semibold text-lg'>Added to Cart</p>
                                </div>

                                <div>
                                    <button onClick={close}>
                                        <XMarkIcon className='w-7 h-7' />
                                    </button>
                                </div>
                            </div>

                            <div className='flex gap-5'>
                                {/* <div className="w-2/12">
                                    <img src={`${props.content}${item.}`} className='aspect-square w-full rounded-xl object-cover' alt="" />
                                </div> */}
                                <div className="flex-1 space-y-1">
                                    <h3 className='font-semibold'>{item.name}</h3>
                                    <div class="h-7 px-2.5 py-1 bg-white border-2 border-gray-200 rounded-[99px] shadow-sm justify-center items-center gap-2.5 inline-flex font-medium">
                                    <div class="text-neutral-900 text-sm font-normal font-['Inter'] leading-tight">NGN {toNumber(item.price).toLocaleString()}</div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center space-x-4'>
                                <Link href={route('cart')} onClick={close} className='btn btn-light shadow-none text-sm'>View Cart ({items.length})</Link>
                                <Link href={route('checkout')} onClick={close} className='btn btn-primary shadow-none text-sm'>Checkout <PlayIcon class={'text-white text-opacity-70 w-5 h-5'} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
