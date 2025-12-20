import Accordion from '@/Components/Accordion'
import Input from '@/Components/Forms/Input'
import SearchIcon from '@/Icons/SearchIcon'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'

export default function Faqs() {

    const {faqs} = usePage().props

    return (
        <GuestLayout >
            <Head title='Frequently Asked Questions' />
            <div className="space-y-10">
                <section className="md:max-w-6xl mx-auto px-4 space-y-5">
                    <div className="text-center space-y-5 ">
                        <h1 className="md:text-6xl text-3xl sm:text-[28px] leading-tight md:leading-[72px] font-bold">Frequently Asked Questions</h1>
                        <p className="text-gray-500 md:text-lg">Have questions? We have answers. Find help with onboarding, payments, platform rules, <br /> and more.</p>
                    </div>

                    <div className='flex justify-center'>
                        <Input
                            prefix={<SearchIcon className="!size-6" />}
                            placeholder="Search FAQ" 
                            className="md:w-1/2 w-full bg-gray-100 rounded-md shadow-sm border border-gray-200" />
                    </div>
                </section>

                <div className="md:max-w-3xl mx-auto px-4 space-y-10">
                    {
                        faqs.map((faq, index) => {
                            return (
                                <div key={index} className='space-y-3' >
                                    <h4 className='font-medium'>{faq.section}</h4>
                                    <Accordion>
                                        {
                                            faq.faqs.map((item, i) => (
                                                <Accordion.Panel key={i} >
                                                    <Accordion.Button>{item.question}</Accordion.Button>
                                                    <Accordion.Content>{item.answer}</Accordion.Content>
                                                </Accordion.Panel>
                                            ))
                                        }
                                    </Accordion>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </GuestLayout>
    )
}
