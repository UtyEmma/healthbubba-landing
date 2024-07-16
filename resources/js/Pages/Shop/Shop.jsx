import GuestLayout from '@/Layouts/GuestLayout'
import { Cta } from '@/Partials/Cta'
import React, { useState } from 'react'
import { SingleProduct } from './Partials/SingleProduct'
import { Head, Link } from '@inertiajs/react'

export default function ({categories, products}) {

    const [medications, setMedications] = useState(products)
    const [category, setCategory] = useState(categories[0])

    const [prevCategory, setPrevCategory] = useState(null)

    const [loading, setLoading] = useState(false)

    const update = (category) => {
        setCategory(prev => {
            setPrevCategory(prev)
            return category;
        })

        setLoading(true)

        fetch(route('medications.list', {category: category.category_id}))
            .then(async res => {
                const {medications, category} = await res.json()
                setMedications(medications)
            })
            .catch(err => {
                setCategory(prevCategory)
                setPrevCategory(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <GuestLayout>
            <Head title='Medication' />
            <div className="mb-4">
                <div class={'max-w-7xl mx-auto px-4'}>
                    <ul class={'flex space-x-1 font-medium text-muted items-center'}>
                        <li>
                            <Link className='hover:text-primary' href={route('home')}>Home</Link>
                        </li>
                        <li>/</li>
                        <li>Medications</li>
                    </ul>

                    <h2 class={'text-2xl md:text-4xl font-medium'}>Explore Medications</h2>
                </div>
            </div>

            <div className="py-3 border-y border-gray-200">
                <div className="max-w-7xl mx-auto flex gap-x-4 justify-between items-center px-4">
                    <div className='shrink-0 md:w-2/5 hidden md:block'>
                        <p className="text-muted">1-{medications.length} of {medications.length} results</p>
                    </div>

                    <div class={'flex-1 md:w-2/5 '}>
                        <div class={'relative  flex items-center '}>
                            <span class={'absolute left-2'}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4999 17.5L13.8749 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#9CA3AF" stroke-width="1.31602" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <input type="text" class={'pl-10 w-full border border-primary rounded-md shadow'} placeholder='Search Medications' />
                        </div>
                    </div>

                    <div class={'md:w-1/6'}>

                    </div>
                </div>
            </div>

            <div className="md:py-20 py-5 max-w-7xl mx-auto px-4">
                <div class={'md:grid md:grid-cols-12 space-y-5 md:space-y-0'}>
                    <div className="md:col-span-3 col-span-full space-y-2">
                        <ul class={'space-y-2 sticky top-10'}>
                            {
                                categories.map((item, index) => (
                                    <li >
                                        <label class='flex space-x-2  items-center font-medium'>
                                            <input type="checkbox" checked={item.category_id == category.category_id} onChange={e => update(item)} class='rounded text-primary p-2' id="" />
                                            <span>{item.category_name}</span>
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-span-9">
                        <div className="grid md:grid-cols-3 gap-5 mb-4">
                            {
                                medications.map(medication => (
                                    <div>
                                        <SingleProduct medication={medication} />
                                    </div>
                                ))
                            }
                        </div>

                        {/* <div class={'flex justify-between text-muted'}>
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
                        </div> */}
                    </div>
                </div>

                <div className="py-20">
                    <Cta />
                </div>
            </div>

        </GuestLayout>
    )
}
