import GuestLayout from '@/Layouts/GuestLayout'
import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { CheckoutSuccess } from './CheckoutSuccess'

export default function () {
    return (
        <GuestLayout>
            <div className='pb-5 px-4'>
                <h2 className={'md:text-4xl text-3xl md:px-36 mx-auto font-semibold'}>Checkout</h2>
            </div>

            <div className="border-t border-gray-200 md:pl-36 ">
                <div className="grid md:grid-cols-5 gap-10">
                    <div className="order-2 md:order-1 md:col-span-3 px-4 md:py-10 space-y-5">
                        <div className="card">
                            <div className="grid grid-cols-12 gap-2 md:gap-5">
                                <div className='col-span-full'>
                                    <label className="form-label">Email Address</label>
                                    <input type='email' placeholder='Email Address' className="form-control" />
                                </div>

                                <div className='col-span-6'>
                                    <label className="form-label">First name</label>
                                    <input placeholder='First Name' className="form-control" />
                                </div>

                                <div className='col-span-6'>
                                    <label className="form-label">Last name</label>
                                    <input placeholder='Last Name' className="form-control" />
                                </div>

                                <div className='col-span-full'>
                                    <label className="form-label">Street Address</label>
                                    <input placeholder='Street Address' className="form-control" />
                                </div>

                                <div className='col-span-full'>
                                    <label className="form-label">Apt, Suite, Unit, Building, Floor</label>
                                    <input placeholder='Apt, Suite, Unit, Building, Floor' className="form-control" />
                                </div>

                                <div className='col-span-4'>
                                    <label className="form-label">State</label>
                                    <input placeholder='State' className="form-control" />
                                </div>

                                <div className='col-span-4'>
                                    <label className="form-label">City</label>
                                    <input placeholder='City' className="form-control" />
                                </div>

                                <div className='col-span-4'>
                                    <label className="form-label">Postal Code</label>
                                    <input placeholder='Postal Code' className="form-control" />
                                </div>

                                <div className='col-span-12'>
                                    <label className="form-label">Phone number</label>
                                    <input placeholder='Phone Number' type='tel' className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                        <button className="btn btn-primary">Checkout <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></button>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-2">
                        <div className='md:border-l border-b md:border-b-0 border-gray-200 bg-gray-50 py-5 h-auto md:px-10 px-4'>
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
            </div>

            {/* <CheckoutSuccess /> */}

        </GuestLayout>
    )
}
