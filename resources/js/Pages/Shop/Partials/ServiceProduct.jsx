import CartIcon from '@/Icons/CartIcon'
import React from 'react'

export default () => {
    return (
        <div class={'p-2 rounded-xl shadow border border-gray-100'}>
            <div>
                <img src="/assets/imgs/packages/urinalysis.png" alt="" />
            </div>

            <div class={'py-4 space-y-5'}>
                <div>
                    <h4 class={'font-semibold text-sm md:text-base'}>Amoxicilin & Clavulanic Acid Tab - 375Mg</h4>
                    <p className="text-muted text-sm md:line-clamp-3 line-clamp-2">Urinalysis is a test of your urine. It's used to detect and manage a wide range of disorders, such as urinary...</p>
                </div>
                <div className="flex justify-between items-center">
                    <button className="py-2 md:px-5 px-2 text-sm md:text-base border space-x-3 font-medium rounded-[50px] shadow">NGN 5,000</button>
                    <button className="md:p-3 p-2 bg-black text-white border space-x-3 rounded-xl shadow"><CartIcon className={'md:w-6 md:h-6 w-5 h-5 text-white stroke-white'} /></button>
                </div>
            </div>
        </div>
    )
}
