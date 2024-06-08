import CartIcon from '@/Icons/CartIcon'
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
                <div className="rounded-xl bg-secondary p-2 flex justify-between items-center">
                <div>
                    <button className="btn btn-white bg-opacity-10 text-white">For Patients <ChevronDownIcon class={'w-5 h-5'} /></button>
                </div>
                <div className="bg-white px-1 h-full before:w-2 before:absolute before:h-2 before:bg-white before:rounded-full before:top-0 after:w-2 after:absolute after:h-2 after:bg-white after:rounded-full after:bottom-0" />
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
