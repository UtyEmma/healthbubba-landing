import { Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, usePage } from '@inertiajs/react'
import React, { useContext } from 'react'
import { DownloadContext } from '../GuestLayout'
import Disclose from '@/Components/Display/Disclose'

export const MobileMenu = () => {

    const {open: openDownload} = useContext(DownloadContext)

    const {is_practitioner} = usePage().props

    return (
        <>
            <Popover className={'h-full'}>
                {
                    ({open, close}) => (
                        <>
                            <Popover.Button className="btn rounded-2xl bg-secondary p-1 px-3 h-full shadow-xl shadow-[#0000001A] flex space-x-2 justify-between items-center">
                                {open ? <XMarkIcon className='w-9 h-9 text-white' /> : <Bars3Icon className="w-9 h-9 text-white" />}
                            </Popover.Button>

                            <Popover.Panel
                                anchor="bottom"
                                className="absolute left-0 right-0 mt-2 w-full px-4 z-50"
                            >
                                <div className='bg-[#292929] p-2 rounded-2xl text-gray-200 border z-50 border-[#505050] divide-y divide-white/5 text-sm'>
                                    <Disclosure >
                                        {
                                            ({open}) => (
                                                <>
                                                    <Disclosure.Button className='w-full group p-3 flex justify-between items-center'>
                                                        <p>For {open ? '' : is_practitioner ? 'Health Practitioners' : 'Patients'}</p>
                                                        <ChevronRightIcon className='w-5 transition-all duration-300 group-data-[headlessui-state=open]:rotate-90' />
                                                    </Disclosure.Button>

                                                    <Disclosure.Panel as='div' className={'divide-y divide-white/5 transition-all duration-300'}>
                                                        <Link href={route('home')} className='w-full ps-7 p-3 flex justify-between items-center'>
                                                            For Patients
                                                        </Link>
                                                        <Link href={route('practitioners')} className='w-full ps-7 p-3 flex justify-between items-center'>
                                                            Health Practitioners
                                                        </Link>
                                                    </Disclosure.Panel>
                                                </>
                                            )
                                        }
                                    </Disclosure>
                                    
                                    <Disclose show={!is_practitioner}>
                                        <Disclosure >
                                            <Disclosure.Button className='w-full group p-3 flex justify-between items-center'>
                                                <p>Services</p>
                                                <ChevronRightIcon className='w-5 transition-all duration-300 group-data-[headlessui-state=open]:rotate-90' />
                                            </Disclosure.Button>

                                            <Disclosure.Panel as='div' className={'divide-y divide-white/5 transition-all duration-300'}>
                                                <Link href='' className='w-full ps-7 p-3 flex justify-between items-center'>
                                                    Virtual Consultation
                                                </Link>

                                                <Link href={route('packages')} className='w-full ps-7 p-3 flex justify-between items-center'>
                                                    Order a Lab test
                                                </Link>

                                                <Link href={route('shop')} className='w-full ps-7 p-3 flex justify-between items-center'>
                                                    Order Medications
                                                </Link>
                                            </Disclosure.Panel>
                                        </Disclosure>

                                        <div role='button' onClick={() => {
                                            close();
                                            openDownload();
                                        }} className='p-3 w-full'>
                                            Download
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <Link className="p-3 w-full" href={`${route(`faqs`)}`}>FAQ</Link>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <Link className="p-3 w-full" href={route('about')}>About</Link>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <Link className="p-3 w-full" href={route('login')}>Login</Link>
                                        </div>
                                    </Disclose>

                                    <Disclose show={is_practitioner} >
                                        <div className='flex justify-between items-center'>
                                            <Link className="p-3 w-full" href={route(`practitioners.how-it-works`)}>How it Works</Link>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <Link className="p-3 w-full" href={route(`practitioners.faqs`)}>FAQs</Link>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <Link className="p-3 w-full" href={route(`practitioners.support`)}>Support</Link>
                                        </div>
                                        <div role='button' onClick={() => {
                                            close();
                                            openDownload();
                                        }} className='p-3 w-full'>
                                            Download
                                        </div>
                                    </Disclose>
                                </div>
                            </Popover.Panel>
                        </>
                    )
                }
            </Popover>
        </>
    )
}
