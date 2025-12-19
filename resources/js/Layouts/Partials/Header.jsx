import CartIcon from '@/Icons/CartIcon'
import Separator from '@/Icons/Separator'
import { Menu } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, UserIcon } from '@heroicons/react/24/solid'
import { Link, usePage } from '@inertiajs/react'
import React, { useContext } from 'react'
import { DownloadContext } from '../GuestLayout'
import { CartModal } from './CartModal'
import { MobileMenu } from './MobileMenu'
import { useCart } from '@/Context/CartContext'
import Disclose from '@/Components/Display/Disclose'

export const Header = () => {

    

    const {is_practitioner} = usePage().props

    return (
        is_practitioner ? <PractitionersMenu /> : <PatientsMenu /> 
    )
}

const PractitionersMenu = () => {
    const {open} = useContext(DownloadContext)

    const {items} = useCart()

    const scrollTo = (selector) => {
        const elm = document.getElementById(selector)
        window.scrollTo({
            top: elm.offsetTop,
            behavior: 'smooth'
        })
    }

    const {props} = usePage()
    return (
        <header className='absolute w-full bg-transparent top-0 z-[50]'>
            <div className="hidden lg:flex justify-center mx-auto py-4 gap-x-5 text-[14px]">
                <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-[#0000001A] flex gap-8 items-center justify-between">
                    <div>
                        <Link href={route('home')}>
                            <img src="/assets/imgs/logo.svg" className='size-11' alt="" />
                        </Link>
                    </div>

                    <ul className="flex space-x-4 text-white">
                        <li>
                            <Link href={`${route('practitioners.how-it-works')}`} >How It Works</Link>
                        </li>
                        <li>
                            <Link href={`${route('practitioners.faqs')}`}>FAQs</Link>
                        </li>
                        <li>
                            <Link href={`${route('practitioners.support')}`}>Support</Link>
                        </li>
                        <li>
                            <button onClick={open} >Download App</button>
                        </li>
                    </ul>
                    <div>
                        <Disclose show={!!!props.auth.user} >
                            <Link href={route('register')} className="btn btn-white !py-3">Get Started</Link>
                        </Disclose>
                        <Disclose show={!!props.auth.user} >
                            <Menu >
                                <Menu.Button className="btn btn-white px-2">
                                    <UserIcon className='size-5 text-primary'  />
                                </Menu.Button>

                                <Menu.Items as='div' className='absolute bg-[#2F2F2F] z-50 border-2 border-[#505050] border-solid rounded-2xl shadow-lg min-w-52 px-2 mt-3 divide-y divide-[#505050]' anchor="bottom">
                                    <Menu.Item as='div' className="py-2">
                                        <Link href={route('logout')} className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">Logout</Link>
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </Disclose>
                    </div>
                </div>

                <div className="shrink-0">
                    <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-[#0000001A] flex space-x-2 justify-between items-center relative">
                        <div>
                            <Menu>
                                <Menu.Button className="btn btn-white bg-opacity-10 !py-3 text-white shrink-0 font-normal">
                                    For Health Prac... <ChevronDownIcon className='w-4 h-4' />
                                </Menu.Button>

                                <Menu.Items as='div' className='absolute bg-[#2F2F2F] z-50 border-2 border-[#505050] border-solid rounded-2xl shadow-lg min-w-52 px-2 mt-3 divide-y divide-[#505050]' anchor="bottom">
                                    <Menu.Item as='div' className="py-2">
                                        <Link href="#" className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">
                                        For Patients
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item as='div' className="py-2">
                                        <Link href={route('practitioners')} className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">
                                            For Health Practitioners
                                        </Link>
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden p-2 md:p-4 mx-auto flex space-x-3">
                <div className="flex-1">
                    <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-[#0000001A] flex items-center justify-between">
                        <div>
                            <Link href={route('home')}>
                                <img src="/assets/imgs/logo.svg" alt="" />
                            </Link>
                        </div>

                        <div className='flex space-x-2'>
                            <Disclose show={!!!props.auth.user} >
                                <Link href={route('register')} className="btn btn-white">Sign Up</Link>
                            </Disclose>
                            <Disclose show={!!props.auth.user} >
                                <Menu >
                                    <Menu.Button className="btn btn-white">
                                        <UserIcon className='size-5 text-primary'  />
                                    </Menu.Button>

                                    <Menu.Items as='div' className='absolute bg-[#2F2F2F] z-50 border-2 border-[#505050] border-solid rounded-2xl shadow-lg min-w-52 px-2 mt-3 divide-y divide-[#505050]' anchor="bottom">
                                        <Menu.Item as='div' className="py-2">
                                            <Link href={route('logout')} className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">Logout</Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </Disclose>
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

const PatientsMenu = () => {
    const {open} = useContext(DownloadContext)

    const {items} = useCart()

    const scrollTo = (selector) => {
        const elm = document.getElementById(selector)
        window.scrollTo({
            top: elm.offsetTop,
            behavior: 'smooth'
        })
    }

    const {props} = usePage()

    return (
        <header className='absolute w-full bg-transparent top-0 z-[50]'>
            <div className="hidden lg:grid max-w-4xl mx-auto py-4 gap-x-5 grid-cols-6 text-[14px]">
                <div className="col-span-4">
                    <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-[#0000001A] flex items-center justify-between">
                        <div>
                            <Link href={route('home')}>
                                <img src="/assets/imgs/logo.svg" alt="" />
                            </Link>
                        </div>
                        <ul className="flex space-x-4 text-white">
                            <li>
                                <Link href={`${route('about')}`} >About Us</Link>
                            </li>
                            <li>
                                <Link href={`${route('faqs')}`}>FAQs</Link>
                            </li>
                            <li>
                                <Menu >
                                    <Menu.Button  className={'flex items-center'}>
                                    Services <ChevronDownIcon className='ms-1 w-4 h-4' />
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
                            <Disclose show={!!!props.auth.user} >
                                <li>
                                    <a href={`${route('login')}`}>Login</a>
                                </li>
                            </Disclose>
                        </ul>
                        <div>
                            <Disclose show={!!!props.auth.user} >
                                <Link href={route('register')} className="btn btn-white">Sign Up</Link>
                            </Disclose>
                            <Disclose show={!!props.auth.user} >
                                <Menu >
                                    <Menu.Button className="btn btn-white px-2">
                                        <UserIcon className='size-5 text-primary'  />
                                    </Menu.Button>

                                    <Menu.Items as='div' className='absolute bg-[#2F2F2F] z-50 border-2 border-[#505050] border-solid rounded-2xl shadow-lg min-w-52 px-2 mt-3 divide-y divide-[#505050]' anchor="bottom">
                                        <Menu.Item as='div' className="py-2">
                                            <Link href={route('logout')} className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">Logout</Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </Disclose>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-[#0000001A] flex space-x-2 justify-between items-center relative">
                        <div>
                            <Menu>
                                <Menu.Button className="btn btn-white bg-opacity-10 text-white font-normal">
                                    For Patients <ChevronDownIcon className='w-4 h-4' />
                                </Menu.Button>

                                <Menu.Items as='div' className='absolute bg-[#2F2F2F] z-50 border-2 border-[#505050] border-solid rounded-2xl shadow-lg min-w-52 px-2 mt-3 divide-y divide-[#505050]' anchor="bottom">
                                    <Menu.Item as='div' className="py-2">
                                        <Link href="#" className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">
                                        For Patients
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item as='div' className="py-2">
                                        <Link href={route('practitioners')} className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">
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

            <div className="lg:hidden p-2 md:p-4 mx-auto flex space-x-3">
                <div className="flex-1">
                    <div className="rounded-2xl bg-secondary p-1 shadow-xl shadow-[#0000001A] flex items-center justify-between">
                        <div>
                            <Link href={route('home')}>
                                <img src="/assets/imgs/logo.svg" alt="" />
                            </Link>
                        </div>

                        <div className='flex space-x-2'>
                            <Disclose show={!!!props.auth.user} >
                                <Link href={route('register')} className="btn btn-white">Sign Up</Link>
                            </Disclose>
                            <Disclose show={!!props.auth.user} >
                                <Menu >
                                    <Menu.Button className="btn btn-white">
                                        <UserIcon className='size-5 text-primary'  />
                                    </Menu.Button>

                                    <Menu.Items as='div' className='absolute bg-[#2F2F2F] z-50 border-2 border-[#505050] border-solid rounded-2xl shadow-lg min-w-52 px-2 mt-3 divide-y divide-[#505050]' anchor="bottom">
                                        <Menu.Item as='div' className="py-2">
                                            <Link href={route('logout')} className="block py-2 px-3 bg-white bg-opacity-10 font-medium text-white rounded-lg">Logout</Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </Disclose>
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
