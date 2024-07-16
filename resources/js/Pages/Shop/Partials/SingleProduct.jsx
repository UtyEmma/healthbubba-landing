import { useCart } from '@/Context/CartContext'
import { toNumber } from '@/Helpers/Utils'
import CartIcon from '@/Icons/CartIcon'
import { usePage } from '@inertiajs/react'
import React from 'react'

export const SingleProduct = ({medication}) => {

    const {add} = useCart()

    const {props} = usePage()

    return (
        <div class={'p-3 rounded-xl shadow-sm border-2 border-gray-200 h-full'}>
            <div>
                <img src={`${props.content}${medication.medication_pic}`} className='aspect-square object-cover object-center' alt="" />
            </div>

            <div class={'md:py-3 space-y-5 flex-1 flex flex-col justify-between w-full'}>
                <h4 class={'font-semibold text-sm md:text-base'}>{medication.medication_name}</h4>
                <div className="flex justify-between items-center">
                    <button className=" py-1 px-3 text-sm md:text-base border-2 border-gray-200 space-x-3 font-medium rounded-[50px] shadow-sm"><span className='text-muted text-xs'>NGN</span> {toNumber(medication.medication_price).toLocaleString()}</button>
                    <button onClick={() => add({
                        name: medication.medication_name,
                        price: toNumber(medication.medication_price),
                        id: medication.medication_id,
                        type: 'medication'
                    })} className="btn md:p-3 p-2 bg-black text-white space-x-3 rounded-xl shadow "><CartIcon className={'md:w-6 md:h-6 w-5 h-5 text-white stroke-white'} /></button>
                </div>
            </div>
        </div>
    )
}
