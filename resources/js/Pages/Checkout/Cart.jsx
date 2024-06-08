import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import CartItem from './Partials/Cart/CartItem'
import Button from '@/Components/Button'
import { PlayIcon } from '@heroicons/react/24/solid'
import ServiceProduct from '../Shop/Partials/ServiceProduct'

export default function () {
    return (
        <GuestLayout>
            <div className='py-5'>
                <h2 className={'text-4xl md:px-36 mx-auto font-semibold'}>Cart</h2>
            </div>

            <div className="border-y border-gray-200 md:pl-36">
                <div className="grid grid-cols-5 divide-x">
                    <div className="col-span-3 divide-y py-5">
                        <div className="pb-5">
                            <p className="font-medium">2 items in Cart</p>
                        </div>
                        <div className="grid grid-cols-4 py-3 border-b border-gray-200">
                            <div className={'col-span-2'}>
                                <p className="font-medium">Product</p>
                            </div>
                            <div>
                                <p className="font-medium">Price</p>
                            </div>
                            <div className={'text-end pe-5'}>
                                <p className="font-medium">Total</p>
                            </div>
                        </div>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className="col-span-2 bg-gray-50 p-5 px-10">
                        <div>
                            <button className="btn btn-primary w-full">Checkout <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></button>
                        </div>

                        <div className="py-5 border-b border-gray-200">
                            <h3 className="text-xl font-medium">Order Summary</h3>
                        </div>

                        <div className="py-5 border-y border-gray-200 space-y-3">
                            <div className="flex justify-between">
                                <p className='text-muted'>Order Summary</p>
                                <p className='font-medium'>NGN 80.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p className='text-muted'>Order Total</p>
                                <p className='font-medium'>NGN 80.00</p>
                            </div>
                        </div>
                        <div className="py-5 border-y border-gray-200 space-y-3">
                            <div className="flex justify-between">
                                <p className='text-muted'>Questions?</p>
                            </div>
                        </div>
                        <div className="py-5 border-t border-gray-200 space-y-3">
                            <div className="flex justify-between">
                                <p className='text-muted'><a href="" class={'underline'}>Chat with us</a> or call 08116848839</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class={'py-20'}>
                <div className="mx-auto max-w-7xl space-y-10">
                    <div>
                        <h1 className='text-3xl font-semibold text-center'>Similar tests you might be interested in</h1>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                        <div>
                            <ServiceProduct />
                        </div>
                        <div>
                            <ServiceProduct />
                        </div>
                        <div>
                            <ServiceProduct />
                        </div>
                        <div>
                            <ServiceProduct />
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
