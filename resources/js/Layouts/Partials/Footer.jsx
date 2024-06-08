import React from 'react'

export const Footer = () => {
    return (
        <footer className="border-t py-10">
            <div className="max-w-7xl mx-auto divide-y">
                <div className="grid grid-cols-2 py-10">
                    <div className="w-2/3 space-y-5">
                        <div>
                            <img src="/assets/imgs/logos/logo-long.svg" alt="" />
                        </div>

                        <div class="p-5 rounded-xl shadow border space-y-3 bg-white">
                            <h5 class={'font-semibold'}>Subscribe to Our Newsletter</h5>
                            <div className="flex space-x-3">
                                <input type="text" placeholder='Email Address' class="form-control flex-1" />
                                <button class="btn btn-primary">Subscribe</button>
                            </div>

                            <div class={'text-center'}>
                                <p class={'font-medium text-sm'}>・ Unsubscribe anytime.</p>
                            </div>
                        </div>

                        <div class={'space-y-2'}>
                            <a href="" className="block underline">Download our Android App</a>
                            <a href="" className="block underline">Download our iOS App</a>
                        </div>

                        <div class={'flex w-2/3 items-center space-x-3'}>
                            <div className="p-2 flex-shrink-0 shadow-md inline-block rounded-lg">
                                <img src="/assets/imgs/qr-code.svg" alt="" />
                            </div>

                            <div class={'flex-1'}>
                                <p className="text-xl font-semibold">Scan to download the Patient App</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3">
                        <div>
                            <p className="text-gray-400 mb-3 font-semibold">Company</p>
                            <ul class="text-muted text-sm space-y-2  font-semibold">
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
                            <ul class="text-muted text-sm space-y-2  font-semibold">
                                <li>
                                    <a href="#">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p class="text-gray-400 mb-3 font-semibold" >Need help</p>
                            <ul class="text-muted text-sm space-y-2  font-semibold">
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>Visit Us: G24/25 Triangle Business Place beside Circle Mall, Osapa Lekki
                                Lagos State</li>
                                <li>1 800 228 1966</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class={'pt-5 flex justify-between items-center'}>
                    <p class={'font-semibold'}>© {new Date().getFullYear()} <a href="/">HealthBubba</a></p>

                    <div class={'flex space-x-3'}>
                        <div>
                            <div className="w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/twitter.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/instagram.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/facebook.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/threads.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/telegram.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="w-10 items-center flex justify-center bg-white aspect-square rounded-full shadow">
                                <img src="/assets/imgs/social/linkedin.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
