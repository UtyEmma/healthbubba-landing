import React from 'react'
import { SubscriptionCTA } from './SubscriptionCTA'
import { Link, usePage } from '@inertiajs/react'
import Disclose from '@/Components/Display/Disclose'

export const Footer = () => {

    const {props} = usePage()

    return (
        <footer className="border-t md:py-10 bg-white z-50">
            <div className="max-w-7xl mx-auto divide-y">
                <div className="grid gap-5 md:grid-cols-2 py-10 px-2">
                    <div className="md:w-2/3 space-y-5">
                        <div>
                            <img src="/assets/imgs/logos/logo-long.svg" alt="" />
                        </div>

                        <SubscriptionCTA className='hidden md:block' />
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <div>
                            <p className="text-gray-400 mb-3 font-medium">Company</p>
                            <ul className="text-neutral-700 text-sm space-y-2  font-medium ">
                                <li>
                                    <Link className='hover:text-black' href={`${route('home')}#about`}>About</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-black' href={route('packages')}>Order a Lab test</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-black' href={route('shop')}>Order Medications</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-black' href={route('practitioners')}>Health Professional’s Page</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-black' href={route('contact')}>Get In Touch</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-3 font-medium">Legal</p>
                            <ul className="text-neutral-700 text-sm space-y-2  font-medium">
                                <li>
                                    <Link className='hover:text-black' href={route('terms')}>Terms and Conditions</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-black' href={route('privacy-policy')}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-black' href={route('cancellation-policy')}>Cancellation & Rescheduling Policy</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-black' href={route('data-deletion')}>Data Deletion</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-3 font-medium" >Need help?</p>
                            <ul className="text-neutral-700 text-sm space-y-2  font-medium">
                                <li>
                                    <Link className='hover:text-black' href={route('faqs')}>FAQ</Link>
                                </li>
                                <li>Visit Us: G24/25 Triangle Business Place beside Circle Mall, Osapa Lekki Lagos State</li>
                                <li>
                                    <a href="tel:09163324000">{props.phone}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <SubscriptionCTA className='md:hidden block' />
                </div>

                <div className={'pt-5 pb-5 md:pb-0 flex flex-col md:flex-row gap-y-5 justify-between items-center'}>
                    <p className={'text-sm md:text-base font-normal order-2 md:order-1'}>
                        © {new Date().getFullYear()} <Link href="/" className="hover:text-primary font-medium duration-150" >HealthBubba</Link>
                    </p>

                    <div className={'flex space-x-3 order-1 md:order-2'}>
                        
                        <Disclose show={props.social.twitter}>
                            <div>
                                <a href={props.social.twitter} target='_blank' className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                    <img src="/assets/imgs/social/twitter.svg" alt="" />
                                </a>
                            </div>
                        </Disclose>

                        <Disclose show={props.social.instagram}>
                            <div>
                                <a href={props.social.instagram} target='_blank' className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                    <img src="/assets/imgs/social/instagram.svg" alt="" />
                                </a>
                            </div>
                        </Disclose>

                        <Disclose show={props.social.facebook}>
                            <div>
                                <a href={props.social.facebook} target='_blank' className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                    <img src="/assets/imgs/social/facebook.svg" alt="" />
                                </a>
                            </div>
                        </Disclose>

                        <Disclose show={props.social.threads} >
                            <div>
                                <a href={props.social.threads} target='_blank' className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                    <img src="/assets/imgs/social/threads.svg" alt="" />
                                </a>
                            </div>
                        </Disclose>

                        <Disclose show={props.social.telegram}>
                            <div>
                                <a href={props.social.threads} target='_blank' className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                    <img src="/assets/imgs/social/telegram.svg" alt="" />
                                </a>
                            </div>
                        </Disclose>

                        <Disclose show={props.social.linkedin}>
                            <div>
                                <a href={props.social.linkedin} target='_blank' className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                    <img src="/assets/imgs/social/linkedin.svg" alt="" />
                                </a>
                            </div>
                        </Disclose>
                    </div>
                </div>
            </div>
        </footer>
    )
}
