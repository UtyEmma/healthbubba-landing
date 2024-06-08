import CartIcon from '@/Icons/CartIcon'
import Separator from '@/Icons/Separator'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

export const Header = () => {
    return (
        <header>
            <div className="max-w-4xl py-4 mx-auto grid gap-x-10 grid-cols-6">
            <div className="col-span-4">
                <div className="rounded-xl bg-secondary p-2 flex items-center justify-between">
                    <div>
                        <Link href={route('home')}>
                            <img src="/assets/imgs/logo.svg" alt="" />
                        </Link>
                    </div>
                    <ul className="flex space-x-4 text-white">
                        <li>
                            <Link href={'#'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'#'}>FAQ</Link>
                        </li>
                        <li>
                            <Link href={route('packages')}>Services</Link>
                        </li>
                        <li>
                            <Link href={route('download')}>Download</Link>
                        </li>
                    </ul>
                    <div>
                        <Link href={route('register')} className="btn btn-white">Sign Up</Link>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="rounded-xl bg-secondary p-2 flex justify-between items-center relative">
                <div>
                    <Menu>
                        <Menu.Button className="btn btn-white bg-opacity-10 text-white">
                            For Patients <ChevronDownIcon class={'w-4 h-4'} />
                        </Menu.Button>

                        <Menu.Items as='div' className='absolute bg-[#2F2F2F] z-50 border-2 border-[#505050] border-solid rounded-2xl shadow-lg min-w-52 px-2 mt-3 divide-y divide-[#505050]' anchor="bottom">
                            <Menu.Item as='div' className="py-2">
                                <Link href="#" className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">
                                For Patients
                                </Link>
                            </Menu.Item>

                            <Menu.Item as='div' className="py-2">
                                <Link href="#" className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">
                                    Health Practitioners
                                </Link>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
                <Separator className='w-2 h-auto' />
                <div>
                    <button className="btn btn-white w-auto">
                        <CartIcon className="w-6 h-6 stroke-black" />
                    </button>
                </div>
                </div>
            </div>
            </div>
        </header>
    )
}
