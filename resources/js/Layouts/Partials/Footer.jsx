import { ChevronUpIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { SubscriptionCTA } from './SubscriptionCTA'
import { ScrollToTop } from './ScrollToTop'

export const Footer = () => {
    return (
        <footer className="border-t md:py-10">
            <div className="max-w-7xl mx-auto divide-y">
                <div className="grid gap-5 md:grid-cols-2 py-10 px-4">
                    <div className="md:w-2/3 space-y-5">
                        <div>
                            <img src="/assets/imgs/logos/logo-long.svg" alt="" />
                        </div>

                        <SubscriptionCTA className='hidden md:block' />
                    </div>

                    <div class="grid gap-5 md:grid-cols-3">
                        <div>
                            <p className="text-gray-400 mb-3 font-semibold">Company</p>
                            <ul class="text-gray-500 text-sm space-y-2  font-medium">
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Order a Lab test</a>
                                </li>
                                <li>
                                    <a href="#">Order Medications</a>
                                </li>
                                <li>
                                    <a href="#">Health Professional’s Page</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-3 font-semibold">Legal</p>
                            <ul class="text-gray-500 text-sm space-y-2  font-medium">
                                <li>
                                    <a href="#">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p class="text-gray-400 mb-3 font-semibold" >Need help?</p>
                            <ul class="text-gray-500 text-sm space-y-2  font-medium">
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>Visit Us: G24/25 Triangle Business Place beside Circle Mall, Osapa Lekki
                                Lagos State</li>
                                <li>1 800 228 1966</li>
                            </ul>
                        </div>
                    </div>

                    <SubscriptionCTA className='md:hidden block' />
                </div>

                <div class={'pt-5 pb-5 md:pb-0 flex flex-col md:flex-row gap-y-5 justify-between items-center'}>
                    <p class={'font-medium text-sm md:text-base order-2 md:order-1'}>© {new Date().getFullYear()} <a href="/">HealthBubba</a></p>

                    <div class={'flex space-x-3 order-1 md:order-2'}>
                        <div>
                            <div className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/twitter.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/instagram.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/facebook.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/threads.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/telegram.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="border border-gray-200 w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/linkedin.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
