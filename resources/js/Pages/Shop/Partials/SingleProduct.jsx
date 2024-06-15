import CartIcon from '@/Icons/CartIcon'
import React from 'react'

export const SingleProduct = () => {
    return (
        <div class={'p-3 rounded-xl shadow border border-gray-100'}>
            <div>
                <img src="/assets/imgs/products/product-img.png" alt="" />
            </div>

            <div class={'md:py-5 space-y-5'}>
                <h4 class={'font-medium text-sm md:text-base'}>Amoxicilin & Clavulanic Acid Tab - 375Mg</h4>
                <div className="flex justify-between items-center">
                    <button className="md:py-2 py-1 md:px-5 px-3 text-sm md:text-base border space-x-3 font-medium rounded-[50px] shadow">NGN 5,000</button>
                    <button className="md:p-3 p-2 bg-black text-white border space-x-3 rounded-xl shadow"><CartIcon className={'md:w-6 md:h-6 w-5 h-5 text-white stroke-white'} /></button>
                </div>
            </div>
        </div>
    )
}
