import CartIcon from '@/Icons/CartIcon'
import Separator from '@/Icons/Separator'
import { Menu } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React, { useContext } from 'react'
import { DownloadContext } from '../GuestLayout'
import { CartModal } from './CartModal'
import { MobileMenu } from './MobileMenu'
import { useCart } from '@/Context/CartContext'

export const Header = () => {

    const {open} = useContext(DownloadContext)

    const {items} = useCart()

    return (
        <header>
            <div className="hidden lg:grid max-w-3xl py-4 mx-auto gap-x-5 grid-cols-6">
                <div className="col-span-4">
                    <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-gray-200 flex items-center justify-between">
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
                                <Menu >
                                    <Menu.Button  className={'flex items-center'}>
                                    Services <ChevronDownIcon class={'ms-1 w-4 h-4'} />
                                    </Menu.Button>

                                    <Menu.Items  as='div' className='absolute bg-[#2F2F2F] z-50 border-2 border-[#505050] border-solid rounded-2xl shadow-lg min-w-52 p-2 mt-4 divide-y divide-white/5 ' anchor="bottom">
                                        <Menu.Item>
                                            <Link href="#" className="block p-2 text-white rounded-lg">
                                                Virtual Consultation
                                            </Link>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <Link href={route('packages')} className="block p-2 text-white rounded-lg">
                                                Order a Lab Test
                                            </Link>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <Link href={route('shop')} className="block p-2 text-white rounded-lg">
                                                Order Medications
                                            </Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </li>
                            <li>
                                <button onClick={open} >Download</button>
                            </li>
                        </ul>
                        <div>
                            <Link href={route('register')} className="btn btn-white">Sign Up</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-gray-200 flex space-x-2 justify-between items-center relative">
                        <div>
                            <Menu>
                                <Menu.Button className="btn btn-white bg-opacity-10 text-white font-normal">
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
                            <Link href={route('cart')} className="btn btn-white w-auto relative">
                                <div className="relative">
                                    <CartIcon className="w-6 h-6 stroke-black" />
                                    {
                                        items.length > 0 && <div className="h-4 w-4 rounded-full bg-primary text-white text-xs flex items-center justify-center absolute -bottom-1 -right-1">{items.length}</div>
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden p-4 mx-auto flex space-x-3">
                <div className="flex-1">
                    <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-gray-200 flex items-center justify-between">
                        <div>
                            <Link href={route('home')}>
                                <img src="/assets/imgs/logo.svg" alt="" />
                            </Link>
                        </div>

                        <div className='flex space-x-2'>
                            <Link href={route('register')} className="btn btn-white">Sign Up</Link>

                            <div>
                                <Link href={route('cart')} className="btn btn-white w-auto">
                                    <div className="relative">
                                        <CartIcon className="w-6 h-6 stroke-black" />
                                        {
                                            items.length > 0 && <div className="h-4 w-4 rounded-full bg-primary text-white text-xs flex items-center justify-center absolute -bottom-1 -right-1">{items.length}</div>
                                        }
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shrink-0">
                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}
