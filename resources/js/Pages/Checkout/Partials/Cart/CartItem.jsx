import { useCart } from '@/Context/CartContext'
import { toNumber } from '@/Helpers/Utils'
import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function CartItem({item}) {

    const {remove} = useCart()

    return (
        <div className="grid grid-cols-12  items-center px-4 py-3 border-b border-gray-200">
            <div className={'col-span-3 md:col-span-5 flex space-x-3 items-center'}>
                {/* <img src="/assets/imgs/products/product-thumb.png" className={'aspect-square w-10 rounded-md'} alt="" /> */}
                <p className="text-muted text-sm md:text-base">{item.name}</p>
            </div>
            <div className='hidden text-end col-span-3 md:block'>
                <p className="text-muted  text-sm md:text-base">NGN {toNumber(item.price).toLocaleString()}</p>
            </div>
            <div className={'text-end col-span-3 md:pe-5 flex items-center justify-end space-x-3'}>
                <p className="text-sm md:text-base">NGN {item.price * item.quantity}</p>
            </div>
            <div className="col-span-1 text-end">
                <button onClick={() => remove(item)} ><XMarkIcon className="w-6 h-6 text-gray-400 hover:text-red-500 transition duration-150" /></button>
            </div>
        </div>
    )
}
