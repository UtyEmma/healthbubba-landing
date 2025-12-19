import PlayIcon from '@/Icons/PlayIcon'
import TargetIcon from '@/Icons/TargetIcon'
import React from 'react'

export default function OrderTestSection() {
    return (
        <section className="py-20">
            <div className="md:max-w-7xl mx-auto space-y-5 md:space-y-10">
                <div className="flex justify-center">
                    <div className="mx-auto inline-flex border shadow text-sm items-center space-x-1 p-2 px-3 rounded-[50px]">
                        <TargetIcon className="size-6" />
                        <span>Order a Lab Test</span>
                    </div>
                </div>
                <div className="text-center md:w-2/4 mx-auto mb-20 px-4">
                    <h2 className="text-2xl font-semibold">Order a Lab Test</h2>
                    <p className="text-muted text-sm md:text-base">Book your lab tests, doctors' consultations, medication delivery, and vaccinations all from your home.</p>
                </div>
                <div className="md:w-5/6 mx-auto px-4">
                    <div className="md:flex md:space-x-10 items-center">
                        <div className="md:w-2/5">
                            <div className="border-t-4 shadow border-t-primary bg-gray-100">
                                <div className="p-5 flex items-start bg-white space-x-3 ">
                                <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                    <i className="bi bi-chevron-left" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <p className="font-semibold">Book your tests</p>
                                    <p className="text-muted text-sm">Find your test from more than 500+ test and packages</p>
                                </div>
                                </div>
                                <div className="p-5 flex items-start space-x-3">
                                <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                    <i className="bi bi-chevron-left" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <p className="font-semibold">Sample Collection</p>
                                    <p className="text-muted text-sm">Our trained Phlebotomist will collect your samples at the comfort of your home</p>
                                </div>
                                </div>
                                <div className="p-5 flex items-start space-x-3">
                                <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                    <i className="bi bi-chevron-left" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <p className="font-semibold">Receive accurate results</p>
                                    <p className="text-muted text-sm">Receive your result in your secure and confidential account within 48hours.</p>
                                </div>
                                </div>
                                <div className="p-5 flex items-start space-x-3">
                                <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                    <i className="bi bi-chevron-left" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <p className="font-semibold">Get Doctor's consultation</p>
                                    <p className="text-muted text-sm">To understand your result better get a Doctor's consultation</p>
                                </div>
                                </div>
                                <div className="p-5 mb-5">
                                    <a href="#" className="btn btn-primary">Get Started <PlayIcon class={'text-white text-opacity-80 w-5 h-5'} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-3/5">
                            <img src="/assets/imgs/media/laboratory.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
