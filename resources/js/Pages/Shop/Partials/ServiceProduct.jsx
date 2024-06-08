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
                    <h4 class={'font-semibold '}>Amoxicilin & Clavulanic Acid Tab - 375Mg</h4>
                    <p className="text-muted text-sm">Urinalysis is a test of your urine. It's used to detect and manage a wide range of disorders, such as urinary...</p>
                </div>
                <div className="flex justify-between items-center">
                    <button className="py-2 px-5 border space-x-3 font-medium rounded-[50px] shadow">NGN 5,000</button>
                    <button className="p-3 bg-black text-white border space-x-3 rounded-xl shadow"><CartIcon className={'w-6 h-6 text-white stroke-white'} /></button>
                </div>
            </div>
        </div>
    )
}
