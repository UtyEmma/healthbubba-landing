import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function CartItem() {
    return (
        <div className="grid grid-cols-4 items-center px-4 py-3 border-b border-gray-200">
            <div className={'col-span-3 md:col-span-2 flex space-x-3 items-center'}>
                <img src="/assets/imgs/products/product-thumb.png" class={'aspect-square w-10 rounded-md'} alt="" />
                <p className="font-medium text-sm md:text-base">Herpes Simplex Virus Type 1 IgM Ab</p>
            </div>
            <div className='hidden md:block'>
                <p className="font-medium text-sm md:text-base">NGN 40.00</p>
            </div>
            <div class={'text-end md:pe-5 flex items-center justify-end space-x-3'}>
                <p className="font-medium text-sm md:text-base">NGN 40.00</p>
                <button><XMarkIcon className="w-6 h-6 text-gray-400 hover:text-red-500 transition duration-150" /></button>
            </div>
        </div>
    )
}
