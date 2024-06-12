import GuestLayout from '@/Layouts/GuestLayout'
import { Cta } from '@/Partials/Cta'
import SinglePackage from '@/Partials/Packages/SinglePackage'
import React from 'react'

export default function () {
    return (
        <GuestLayout>
            <div class={'max-w-7xl mx-auto'}>
                <div class={'mb-5 px-4'}>
                    <ul class={'flex space-x-1 items-center'}>
                        <li>Home</li>
                        <li>/</li>
                        <li>Packages</li>
                    </ul>

                    <h2 class={'text-2xl md:text-4xl font-semibold'}>Explore the available medical test packages</h2>
                </div>

                <div className="py-3 px-4 border-y border-gray-200 flex justify-between items-center">
                    <div className='md:block hidden'>
                        <p className="text-muted">1-25 of 179 results</p>
                    </div>

                    <div class={'w-full md:w-2/5'}>
                        <div class={'relative  flex items-center '}>
                            <span class={'absolute left-2'}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4999 17.5L13.8749 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#9CA3AF" stroke-width="1.31602" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <input type="text" class={'pl-10 w-full border border-primary rounded-md shadow'} placeholder='Search Doctors, Symptoms e.t.c' />
                        </div>
                    </div>
                    <div class={'md:block hidden w-1/6'}>
                        <select name="" class={'border w-full border-gray-100 rounded-md shadow'} id="">
                            <option value="">Select</option>
                        </select>
                    </div>
                </div>

                <div class={'grid md:grid-cols-12 py-10 px-4'}>
                    <div className="md:col-span-3 space-y-2">
                        <ul class={'space-y-2 sticky top-10'}>
                            <li >
                                <label class='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" name="" class='rounded p-2' id="" />
                                    <span>Children Health</span>
                                </label>
                            </li>
                            <li class=''>
                                <label class='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" name="" class='rounded p-2' id="" />
                                    <span>Women’s Health</span>
                                </label>
                            </li>
                            <li>
                                <label class='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" name="" class='rounded p-2' id="" />
                                    <span>Men’s Health</span>
                                </label>
                            </li>
                            <li>
                                <label class='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" defaultChecked name="" class='rounded checked:text-primary p-2' id="" />
                                    <span>Microbiology</span>
                                </label>
                            </li>
                            <li>
                                <label class='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" name="" class='rounded p-2' id="" />
                                    <span>Hematology</span>
                                </label>
                            </li>
                            <li>
                                <label class='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" name="" class='rounded p-2' id="" />
                                    <span>Specialized Tests</span>
                                </label>
                            </li>
                            <li>
                                <label class='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" name="" class='rounded p-2' id="" />
                                    <span>Chemical Pathology</span>
                                </label>
                            </li>
                            <li>
                                <label class='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" name="" class='rounded p-2' id="" />
                                    <span>Special Packages</span>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-9">
                        <div className="grid md:grid-cols-3 gap-5 mb-4">
                            <div>
                                <SinglePackage />
                            </div>
                            <div>
                                <SinglePackage />
                            </div>
                            <div>
                                <SinglePackage />
                            </div>
                            <div>
                                <SinglePackage />
                            </div>
                            <div>
                                <SinglePackage />
                            </div>
                            <div>
                                <SinglePackage />
                            </div>
                            <div>
                                <SinglePackage />
                            </div>
                            <div>
                                <SinglePackage />
                            </div>
                            <div>
                                <SinglePackage />
                            </div>
                        </div>

                        <div class={'flex justify-between text-muted'}>
                            <div>
                                <p>1 - 13 of 200 results</p>
                            </div>
                            <div class={'flex space-x-5'}>
                                <p>1 of 16 pages</p>

                                <div className="flex space-x-3">
                                    <p>Prev</p>
                                    <p>Next</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 px-4">
                    <Cta />
                </div>
            </div>
        </GuestLayout>
    )
}
