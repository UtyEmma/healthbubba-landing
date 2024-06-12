import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { SelectPackageItem } from './Partials/SelectPackageItem'
import SinglePackage from '@/Partials/Packages/SinglePackage'

export default function () {
    return (
        <GuestLayout>
            <div className="border-gray-200 border-solid border-b pb-5">
                <div className="max-w-7xl mx-auto">
                    <div class={'space-y-1'}>
                        <ul class={'flex space-x-1 items-center text-muted'}>
                            <li>Home</li>
                            <li>/</li>
                            <li>Packages</li>
                            <li>/</li>
                            <li>STI Tests</li>
                        </ul>

                        <h1 class={'text-4xl font-semibold'}>STI Tests</h1>
                    </div>
                </div>
            </div>

            <div className="border-gray-200 border-solid border-b">
                <div className="max-w-6xl mx-auto py-10">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-8 space-y-10">
                            <div className="rounded-2xl overflow-hidden h-96">
                                <img src="/assets/imgs/media/banners/sti.jpeg" class='object-cover' alt="" />
                            </div>

                            <div>
                                <div className="border bg-gray-100 p-2 rounded-2xl h-96">
                                    <div className="bg-white h-full w-full rounded-xl p-5 text-muted">
                                        <p>A simple screening panel that screens for a broad range of sexually transmitted infections. STIs don’t always cause symptoms. It’s possible to contract sexually transmitted infections from people who seem perfectly healthy and may not even know they have an infection. Get tested</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="border bg-gray-100 p-2 rounded-2xl h-full space-y-3">
                                <div >
                                    <p className="font-semibold">Packages</p>
                                </div>
                                <SelectPackageItem name="Chlamydia trachomatis IgG Ab" price="NGN 39,000" />
                                <SelectPackageItem name="Chlamydia trachomatis IgA Ab" price="NGN 51,000" />
                                <SelectPackageItem name="Herpes Simplex Virus Type 1 IgM Ab" price="NGN 126,000" />
                                <SelectPackageItem name="Hepatitis B virus surface Ag stat" price="NGN 19,000" />
                                <SelectPackageItem name="Hepatitis C status" price="NGN 21,000" />
                                <SelectPackageItem name="Neisseria Gonorrhea" price="NGN 79,000" />
                                <SelectPackageItem name="Herpes Simplex Virus Type 2 IgM Ab" price="NGN 126,000" />
                                <SelectPackageItem name="HIV Status" price="NGN 15,300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-20 max-w-7xl mx-auto space-y-10">
                <div className="w-2/4 mx-auto space-y-10">
                    <div className="flex justify-center">
                    <div className="mx-auto inline-flex border shadow text-sm items-center space-x-1 p-2 px-3 rounded-[50px]">
                        <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.76953 3.95833C3.76953 3.15292 4.42245 2.5 5.22786 2.5H17.3112C18.1166 2.5 18.7695 3.15292 18.7695 3.95833V14.375C18.7695 15.1804 18.1166 15.8333 17.3112 15.8333H14.0828C14.0342 15.8333 13.9872 15.8503 13.9499 15.8812L12.2013 17.3299C11.6592 17.779 10.8736 17.7768 10.3341 17.3245L8.61321 15.882C8.5757 15.8506 8.52832 15.8333 8.47938 15.8333H5.22786C4.42245 15.8333 3.76953 15.1804 3.76953 14.375V3.95833ZM11.2695 5.83333C11.5325 5.83333 11.7457 6.04653 11.7457 6.30952C11.7457 7.24346 11.9526 7.80724 12.2907 8.14543C12.6289 8.48361 13.1927 8.69048 14.1266 8.69048C14.3896 8.69048 14.6028 8.90367 14.6028 9.16667C14.6028 9.42966 14.3896 9.64286 14.1266 9.64286C13.1927 9.64286 12.6289 9.84972 12.2907 10.1879C11.9526 10.5261 11.7457 11.0899 11.7457 12.0238C11.7457 12.2868 11.5325 12.5 11.2695 12.5C11.0065 12.5 10.7933 12.2868 10.7933 12.0238C10.7933 11.0899 10.5865 10.5261 10.2483 10.1879C9.91011 9.84972 9.34632 9.64286 8.41239 9.64286C8.14939 9.64286 7.9362 9.42966 7.9362 9.16667C7.9362 8.90367 8.14939 8.69048 8.41239 8.69048C9.34632 8.69048 9.91011 8.48361 10.2483 8.14543C10.5865 7.80724 10.7933 7.24346 10.7933 6.30952C10.7933 6.04653 11.0065 5.83333 11.2695 5.83333Z" fill="#11244A" />
                        </svg>
                        <span>FAQ</span>
                    </div>
                    </div>
                    <div className="text-center  mb-20">
                    <h2 className="text-3xl font-semibold">Frequently Asked Questions (FAQs)</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur. Montes posuere non lorem tempus mus. Vitae laoreet ipsum mi sagittis id vehicula semper. Sed enim mollis pulvinar.</p>
                    </div>
                    <div className="border rounded-2xl divide-y">
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium">What is HealthBubba?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-dash" /></span>
                        </div>
                        </div>
                        <div className>
                        <p className="w-11/12 text-muted">Lorem ipsum dolor sit amet consectetur. Proin elit dui dis purus lacus elit morbi. Sed ante eget tortor aenean viverra molestie euismod blandit. Laoreet vestibulum vitae ac ante amet. Et lorem nisi vulputate.</p>
                        <div className />
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium">How does  HealthBubba Work?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-dash" /></span>
                        </div>
                        </div>
                        <div className>
                        <p className="w-11/12 text-muted">Lorem ipsum dolor sit amet consectetur. Proin elit dui dis purus lacus elit morbi. Sed ante eget tortor aenean viverra molestie euismod blandit. Laoreet vestibulum vitae ac ante amet. Et lorem nisi vulputate.</p>
                        <div className />
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium">How does Telemedicine work?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-dash" /></span>
                        </div>
                        </div>
                        <div className>
                        <p className="w-11/12 text-muted">Lorem ipsum dolor sit amet consectetur. Proin elit dui dis purus lacus elit morbi. Sed ante eget tortor aenean viverra molestie euismod blandit. Laoreet vestibulum vitae ac ante amet. Et lorem nisi vulputate.</p>
                        <div className />
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium">How do I access HealthBubba services?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-dash" /></span>
                        </div>
                        </div>
                        <div className>
                        <p className="w-11/12 text-muted">Lorem ipsum dolor sit amet consectetur. Proin elit dui dis purus lacus elit morbi. Sed ante eget tortor aenean viverra molestie euismod blandit. Laoreet vestibulum vitae ac ante amet. Et lorem nisi vulputate.</p>
                        <div className />
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium">Can I trust the accuracy of the test results obtained through
                            HealthBubba?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-dash" /></span>
                        </div>
                        </div>
                        <div className>
                        <p className="w-11/12 text-muted">Lorem ipsum dolor sit amet consectetur. Proin elit dui dis purus lacus elit morbi. Sed ante eget tortor aenean viverra molestie euismod blandit. Laoreet vestibulum vitae ac ante amet. Et lorem nisi vulputate.</p>
                        <div className />
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium">How can I obtain my result?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-dash" /></span>
                        </div>
                        </div>
                        <div className>
                        <p className="w-11/12 text-muted">Lorem ipsum dolor sit amet consectetur. Proin elit dui dis purus lacus elit morbi. Sed ante eget tortor aenean viverra molestie euismod blandit. Laoreet vestibulum vitae ac ante amet. Et lorem nisi vulputate.</p>
                        <div className />
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium w-11/12 text-wrap">What measures are in place to ensure the safety of my personal and
                            medical information on HealthBubba?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-dash" /></span>
                        </div>
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium w-11/12 text-wrap">How do I prepare for the test? Are there any special instructions?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-plus" /></span>
                        </div>
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium w-11/12 text-wrap">What should I do if I have trouble collecting my sample?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-plus" /></span>
                        </div>
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between" role="button">
                        <h4 className="text-medium w-11/12 text-wrap">Is there a way to track the status of my test kit shipment and delivery?</h4>
                        <div className="w-1/12 text-end">
                            <span><i className="bi bi-plus" /></span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto space-y-10">
                <div className="flex justify-center">
                    <div className="mx-auto inline-flex border shadow text-sm items-center space-x-1 p-2 px-3 rounded-[50px]">
                    <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3777 5.84771C17.1582 7.48023 17.3064 9.34401 16.7936 11.0794C16.2808 12.8147 15.1434 14.2986 13.6008 15.2446C12.0583 16.1907 10.22 16.5318 8.44077 16.2021C6.66152 15.8725 5.06744 14.8955 3.96618 13.4597C2.86493 12.0238 2.33457 10.231 2.47746 8.42708C2.62035 6.6232 3.42637 4.93619 4.73995 3.69165C6.05353 2.4471 7.78156 1.73325 9.59051 1.68785C11.3995 1.64246 13.1611 2.26874 14.5355 3.44584L16.1295 1.85115C16.235 1.7456 16.3782 1.68631 16.5274 1.68631C16.6767 1.68631 16.8198 1.7456 16.9254 1.85115C17.0309 1.9567 17.0902 2.09985 17.0902 2.24912C17.0902 2.39838 17.0309 2.54154 16.9254 2.64709L10.1754 9.39709C10.0698 9.50263 9.92669 9.56193 9.77743 9.56193C9.62816 9.56193 9.485 9.50263 9.37946 9.39709C9.27391 9.29154 9.21461 9.14839 9.21461 8.99912C9.21461 8.84985 9.27391 8.7067 9.37946 8.60115L11.3285 6.65209C10.8003 6.30274 10.1696 6.14189 9.53862 6.19558C8.90761 6.24927 8.31319 6.51435 7.85158 6.94791C7.38996 7.38147 7.08819 7.95813 6.9951 8.58454C6.90201 9.21095 7.02306 9.85045 7.33865 10.3995C7.65424 10.9486 8.14589 11.375 8.73402 11.6099C9.32216 11.8448 9.97234 11.8743 10.5793 11.6936C11.1863 11.513 11.7145 11.1327 12.0786 10.6145C12.4426 10.0963 12.621 9.47037 12.585 8.8381C12.5808 8.76423 12.5913 8.69027 12.6157 8.62043C12.6401 8.5506 12.6781 8.48626 12.7274 8.43109C12.7767 8.37592 12.8364 8.331 12.903 8.29889C12.9697 8.26678 13.042 8.24812 13.1159 8.24396C13.265 8.23557 13.4115 8.28679 13.5229 8.38634C13.578 8.43564 13.623 8.49531 13.6551 8.56197C13.6872 8.62863 13.7058 8.70095 13.71 8.77482C13.7613 9.66974 13.5057 10.5554 12.9854 11.2853C12.4652 12.0153 11.7114 12.5459 10.8488 12.7895C9.98608 13.033 9.06613 12.9749 8.24095 12.6248C7.41577 12.2746 6.73476 11.6534 6.31047 10.8638C5.88618 10.0742 5.74401 9.16345 5.90747 8.28209C6.07092 7.40072 6.53021 6.60152 7.20943 6.01655C7.88864 5.43159 8.74712 5.09588 9.64298 5.06493C10.5388 5.03397 11.4184 5.30962 12.1364 5.84631L13.736 4.2467C12.5638 3.27343 11.0733 2.76758 9.55078 2.8263C8.02829 2.88502 6.58117 3.50417 5.48737 4.56484C4.39357 5.6255 3.7302 7.05289 3.62469 8.57286C3.51918 10.0928 3.97895 11.5982 4.91571 12.7998C5.85247 14.0014 7.20015 14.8146 8.69992 15.0831C10.1997 15.3516 11.7458 15.0566 13.0413 14.2546C14.3368 13.4527 15.2903 12.2003 15.7187 10.7382C16.1471 9.27603 16.0202 7.70715 15.3623 6.33287C15.298 6.19823 15.2898 6.04355 15.3395 5.90285C15.3892 5.76216 15.4928 5.64697 15.6274 5.58263C15.7621 5.5183 15.9167 5.51008 16.0574 5.55979C16.1981 5.60951 16.3133 5.71307 16.3777 5.84771Z" fill="#5C5C5C" />
                    </svg>
                    <span>Explore Test Packages</span>
                    </div>
                </div>
                <div className="text-center w-2/4 mx-auto mb-20">
                    <h2 className="text-2xl font-semibold">Discover and Explore Healthbubba’s Packages</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur. Montes posuere non lorem tempus mus. Vitae laoreet ipsum mi sagittis id vehicula semper. Sed enim mollis pulvinar.</p>
                </div>
                <div className="flex justify-center items-center space-x-3 flex-wrap">
                    <button className="border-2 text-sm items-center space-x-1 p-2 px-3 hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300 bg-gray-100 rounded-[50px]">Hematology</button>
                    <button className="border-2 border-black text-sm items-center space-x-1 p-2 px-3 bg-black text-white shadow-lg rounded-[50px] hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300">Microbiology</button>
                    <button className="border-2 text-sm items-center space-x-1 p-2 px-3 bg-gray-100 rounded-[50px] hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300">Specialized Tests</button>
                    <button className="border-2 text-sm items-center space-x-1 p-2 px-3 bg-gray-100 rounded-[50px] hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300">Chemical Pathology</button>
                </div>

                <div className="grid grid-cols-4 gap-5">
                    <div>
                        <SinglePackage />
                    </div>
                    <div>
                        <SinglePackage />
                    </div>
                    <div>
                        <SinglePackage />
                    </div>
                    <div>
                        <SinglePackage />
                    </div>
                </div>

                <div className="text-center">
                    <button className="border px-3 py-1 bg-neutral-50 rounded-full shadow justify-start items-start inline-flex">
                    View all Tests <i className="ms-2 bi bi-arrow-right-short" />
                    </button>
                </div>
            </section>
        </GuestLayout>
    )
}
