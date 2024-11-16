import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import CartItem from './Partials/Cart/CartItem'
import { PlayIcon } from '@heroicons/react/24/solid'
import ServiceProduct from '../Shop/Partials/ServiceProduct'
import { useCart } from '@/Context/CartContext'
import { Head, Link, router } from '@inertiajs/react'
import toast from 'react-hot-toast'
import SinglePackage from '@/Partials/Packages/SinglePackage'

export default function ({tests}) {

    return (
        <GuestLayout>
            <div className='pb-5 px-4'>
                <h2 className={'text-4xl md:px-36 mx-auto font-medium'}>Cart</h2>
            </div>

            <Cart />

            <div className={'md:py-20 py-10'}>
                <div className="mx-auto max-w-7xl space-y-10 px-4">
                    <div>
                        <h1 className='text-2xl md:text-3xl font-semibold text-center'>Similar tests you might be interested in</h1>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {
                            tests.map(test => <SinglePackage key={test.test_id} test={test} />)
                        }
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

const Cart = () => {

    const {items, total} = useCart()

    const checkout = () => {
        if(items.length <= 0) return toast.error('Please add atleast one item to your cart');
        return router.visit(route('checkout'))
    }

    return (
        <>
            <Head title='Cart' />
            <div className="border-y border-gray-200 md:pl-36">
                <div className="grid md:grid-cols-5 gap-x-2 divide-x">
                    <div className="md:col-span-3 divide-y py-5">
                        <div className="pb-5 px-4">
                            <p className="font-medium">{items.length} items in Cart</p>
                        </div>
                        <div className="grid grid-cols-12 py-3 px-4 border-b border-gray-200">
                            <div className={'col-span-3 md:col-span-5'}>
                                <p className="font-medium">Product</p>
                            </div>
                            <div className='hidden text-end col-span-3 md:block'>
                                <p className="font-medium">Price</p>
                            </div>
                            <div className={'text-end col-span-3 pe-5'}>
                                <p className="font-medium">Total</p>
                            </div>
                            <div className="col-span-1"></div>
                        </div>

                        {
                            items.length > 0

                            ?

                            items.map(item => <CartItem key={item.id} item={item} />)

                            :

                            <div className='p-5 flex-col space-y-4 justify-center text-center'>
                                <h4 className='text-lg'>Your cart is empty</h4>
                                <Link href={route('packages')} className='btn btn-primary'>Keep Shopping</Link>
                            </div>
                        }
                    </div>
                    <div className="md:col-span-2 bg-gray-50 p-5 md:px-10 px-4">
                        <div className='hidden md:block'>
                            <button onClick={checkout} className="btn btn-primary w-full">Checkout <PlayIcon className={'text-white text-opacity-70 w-6 h-6'} /></button>
                        </div>

                        <div className="md:py-5 border-b border-gray-200">
                            <h3 className="text-xl font-medium">Order Summary</h3>
                        </div>

                        <div className="py-5 border-y border-gray-200 space-y-3">
                            <div className="flex justify-between">
                                <p className='text-muted'>Order Summary</p>
                                <p className='font-medium'>NGN {total.toLocaleString()}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className='text-muted'>Order Total</p>
                                <p className='font-medium'>NGN {total.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="py-5 border-y border-gray-200 space-y-3">
                            <div className="flex justify-between">
                                <p className='text-muted'>Questions?</p>
                            </div>
                        </div>
                        <div className="py-5 border-t border-gray-200 space-y-3">
                            <div className="flex justify-between">
                                <p className='text-muted'><a href="#" className={'underline'}>Chat with us</a> or call <a href="tel:09163326000">0916 332 6000</a></p>
                            </div>
                        </div>

                        <div className='md:hidden'>
                            <button onClick={checkout}  className="btn btn-primary w-full">Checkout <PlayIcon className={'text-white text-opacity-70 w-6 h-6'} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
