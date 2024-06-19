import Disclose from '@/Components/Display/Disclose'
import React from 'react'
import { FaqItem } from './FaqItem'

export const Faq = ({faqs}) => {
    return (
        <Disclose show={faqs.length > 0}>
            <section id="faqs" className="md:py-20 py-10 max-w-7xl mx-auto space-y-5 md:space-y-10 px-4">
                <div className="md:w-2/4 mx-auto space-y-10">
                    <div className="flex justify-center">
                        <div className="mx-auto inline-flex border-2 border-gray-200 shadow-sm text-sm items-center space-x-1 p-2 px-3 rounded-[50px]">
                            <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.76953 3.95833C3.76953 3.15292 4.42245 2.5 5.22786 2.5H17.3112C18.1166 2.5 18.7695 3.15292 18.7695 3.95833V14.375C18.7695 15.1804 18.1166 15.8333 17.3112 15.8333H14.0828C14.0342 15.8333 13.9872 15.8503 13.9499 15.8812L12.2013 17.3299C11.6592 17.779 10.8736 17.7768 10.3341 17.3245L8.61321 15.882C8.5757 15.8506 8.52832 15.8333 8.47938 15.8333H5.22786C4.42245 15.8333 3.76953 15.1804 3.76953 14.375V3.95833ZM11.2695 5.83333C11.5325 5.83333 11.7457 6.04653 11.7457 6.30952C11.7457 7.24346 11.9526 7.80724 12.2907 8.14543C12.6289 8.48361 13.1927 8.69048 14.1266 8.69048C14.3896 8.69048 14.6028 8.90367 14.6028 9.16667C14.6028 9.42966 14.3896 9.64286 14.1266 9.64286C13.1927 9.64286 12.6289 9.84972 12.2907 10.1879C11.9526 10.5261 11.7457 11.0899 11.7457 12.0238C11.7457 12.2868 11.5325 12.5 11.2695 12.5C11.0065 12.5 10.7933 12.2868 10.7933 12.0238C10.7933 11.0899 10.5865 10.5261 10.2483 10.1879C9.91011 9.84972 9.34632 9.64286 8.41239 9.64286C8.14939 9.64286 7.9362 9.42966 7.9362 9.16667C7.9362 8.90367 8.14939 8.69048 8.41239 8.69048C9.34632 8.69048 9.91011 8.48361 10.2483 8.14543C10.5865 7.80724 10.7933 7.24346 10.7933 6.30952C10.7933 6.04653 11.0065 5.83333 11.2695 5.83333Z" fill="#11244A" />
                            </svg>
                            <span>FAQ</span>
                        </div>
                    </div>
                    <div className="text-center  mb-20">
                        <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions (FAQs)</h2>
                        <p className="text-muted">Our mission it to improve the world’s health through compassionate and afforable care through innovation.</p>
                    </div>

                    <div className="border rounded-2xl divide-y">
                        {
                            faqs.map((item, index) => (
                                <FaqItem title={item.question} open={index == 0} content={item.answer} />
                            ))
                        }

                    </div>
                </div>
            </section>
        </Disclose>
    )
}
