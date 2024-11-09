import GuestLayout from '@/Layouts/GuestLayout';
import { Cta } from '@/Partials/Cta';
import PackageList from '@/Partials/Packages/PackageList';
import Testimonial from '@/Partials/Testimonial/Testimonial';
import { Link, Head } from '@inertiajs/react';
import { Faq } from '@/Partials/FAQs/Faq';
import { FeatureCards } from '@/Partials/Features/FeatureCards';
import Marquee from 'react-fast-marquee';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function Welcome({ categories, faqs = [], testimonials = [] }) {

    return (
        <>
            <Head title='Home' />
            <GuestLayout >
                <main>
                    <section className="border-b">
                        <div className="md:max-w-5xl mx-auto px-4">
                            <div className="text-center space-y-5 ">
                                <h1 className="md:text-7xl text-[24px] sm:text-[28px] md:text-[64px] leading-tight md:leading-[72px] font-bold">
                                    Healthcare and Prescription.
                                    <span className="block text-primary">All from Home.</span>
                                </h1>
                                <p className="max-w-3xl md:text-lg text-sm text-muted mx-auto">Book an appointment with a verified healthcare professional, order lab tests and manage prescriptions all from the convenience of your home.</p>
                                <div>
                                    <a href="#" className="btn btn-primary">Get Started <PlayIcon class={'text-white text-opacity-80 w-5 h-5'} /></a>
                                </div>
                                <div className="md:px-20 mt-10">
                                    <img src="/assets/imgs/media/banner.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id='about'>
                        <div key="about-text" className='hidden lg:block'>
                            <div className="text-sm mx-auto py-10 px-4 md:px-10 justify-between flex overflow-x-auto gap-7 md:gap-10">
                                <div className="flex flex-col items-center justify-stretch shrink-0 text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                        <img src="/assets/icons/primary-care.png" className="w-2/3" />
                                    </div>
                                    <div className="font-medium">Primary Care</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                        <img src="/assets/icons/manage.png" className="w-2/3" />
                                    </div>
                                    <div className="font-medium">Manage your Condition</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/behaviour.png" className="w-2/3" />
                                    </div>
                                    <div className="font-medium">Mental &amp; Behavioural Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                        <img src="/assets/icons/sexual-health.png" className="w-2/3" />
                                    </div>
                                    <div className="font-medium">Sexual Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/children.png" className="w-2/3" />
                                    
                                    </div>
                                    <div className="font-medium">Children's Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/senior-health.png" className="w-2/3" />                                    
                                    </div>
                                    <div className="font-medium">Senior Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/womens-health.png" className="w-2/3" />     
                                    </div>
                                    <div className="font-medium">Women's Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/mens-haelth.png" className="w-2/3" />    
                                    </div>
                                    <div className="font-medium">Men's Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/prescriptions.png" className="w-2/3" />    
                                    </div>
                                    <div className="font-medium">Online Prescriptions</div>
                                </div>
                            </div>
                        </div>

                        <div key="text-about" className='lg:hidden'>
                            <Marquee >
                                <div className="text-sm mx-auto py-10 px-0 justify-between overflow-x-auto gap-7 md:gap-10 flex" >
                                <div className="flex flex-col items-center justify-stretch shrink-0 text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                        <img src="/assets/icons/primary-care.png" className="w-2/3" />
                                    </div>
                                    <div className="font-medium">Primary Care</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                        <img src="/assets/icons/manage.png" className="w-2/3" />
                                    </div>
                                    <div className="font-medium">Manage your Condition</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/behaviour.png" className="w-2/3" />
                                    </div>
                                    <div className="font-medium">Mental &amp; Behavioural Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                        <img src="/assets/icons/sexual-health.png" className="w-2/3" />
                                    </div>
                                    <div className="font-medium">Sexual Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/children.png" className="w-2/3" />
                                    
                                    </div>
                                    <div className="font-medium">Children's Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/senior-health.png" className="w-2/3" />                                    
                                    </div>
                                    <div className="font-medium">Senior Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/womens-health.png" className="w-2/3" />     
                                    </div>
                                    <div className="font-medium">Women's Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/mens-haelth.png" className="w-2/3" />    
                                    </div>
                                    <div className="font-medium">Men's Health</div>
                                </div>
                                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                                    <img src="/assets/icons/prescriptions.png" className="w-2/3" />    
                                    </div>
                                    <div className="font-medium">Online Prescriptions</div>
                                </div>
                                </div>
                            </Marquee>
                        </div>
                    </section>

                    <section className="bg-secondary overflow-hidden relative py-20 bg-cover bg-no-repeat bg-top" style={{backgroundImage: 'url(/assets/imgs/media/doodle-bg.svg)'}}>
                        <div className="text-center max-w-3xl mx-auto text-white px-4 flex flex-col items-center space-y-5">
                            <p>Trusted by fast-growing Pharmacies and Healthcare companies around the world</p>
                            <div className="flex md:space-x-7 justify-around gap-2 gap-y-5 sm:gap-y-3 sm:gap-3 flex-wrap">
                                <div>
                                    <img src="/assets/imgs/brands/synlab.svg" alt="" />
                                </div>
                                {/* <div>
                                    <img src="/assets/imgs/brands/smart-pharm.svg" alt="" />
                                </div> */}
                                {/* <div>
                                    <img src="/assets/imgs/brands/graf-base.svg" alt="" />
                                </div>
                                <div>
                                    <img src="/assets/imgs/brands/covalent.svg" alt="" />
                                </div> */}
                                <div>
                                    <img src="/assets/imgs/brands/onehealth.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-7xl mx-auto py-10 md:py-20 px-3 sm:px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col gap-5 md:gap-10">
                            <div>
                                <div className="border shadow-lg h-full rounded-3xl overflow-hidden flex flex-col justify-between bg-[url(/assets/imgs/media/banners/banner-1.svg)] bg-bottom bg-no-repeat">
                                    <div className="md:p-10 p-3 sm:p-5 mb-5 items-center  flex flex-col space-y-5">
                                        <div className="p-3 border shadow-md inline-block mx-auto rounded-lg">
                                            <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.3125 15.25H17.5V10.75H20.3125C21.3138 10.75 22.2926 10.4531 23.1251 9.89682C23.9576 9.34054 24.6065 8.54989 24.9896 7.62484C25.3728 6.69979 25.4731 5.68189 25.2777 4.69986C25.0824 3.71783 24.6002 2.81578 23.8922 2.10777C23.1842 1.39977 22.2822 0.917614 21.3001 0.722277C20.3181 0.526939 19.3002 0.627193 18.3752 1.01036C17.4501 1.39353 16.6595 2.0424 16.1032 2.87493C15.5469 3.70745 15.25 4.68623 15.25 5.6875V8.5H10.75V5.6875C10.75 4.68623 10.4531 3.70745 9.89682 2.87493C9.34054 2.0424 8.54989 1.39353 7.62484 1.01036C6.69979 0.627193 5.68189 0.526939 4.69986 0.722277C3.71783 0.917614 2.81578 1.39977 2.10777 2.10777C1.39977 2.81578 0.917614 3.71783 0.722277 4.69986C0.526939 5.68189 0.627193 6.69979 1.01036 7.62484C1.39353 8.54989 2.0424 9.34054 2.87493 9.89682C3.70745 10.4531 4.68623 10.75 5.6875 10.75H8.5V15.25H5.6875C4.68623 15.25 3.70745 15.5469 2.87493 16.1032C2.0424 16.6595 1.39353 17.4501 1.01036 18.3752C0.627193 19.3002 0.526939 20.3181 0.722277 21.3001C0.917614 22.2822 1.39977 23.1842 2.10777 23.8922C2.81578 24.6002 3.71783 25.0824 4.69986 25.2777C5.68189 25.4731 6.69979 25.3728 7.62484 24.9896C8.54989 24.6065 9.34054 23.9576 9.89682 23.1251C10.4531 22.2926 10.75 21.3138 10.75 20.3125V17.5H15.25V20.3125C15.25 21.3138 15.5469 22.2926 16.1032 23.1251C16.6595 23.9576 17.4501 24.6065 18.3752 24.9896C19.3002 25.3728 20.3181 25.4731 21.3001 25.2777C22.2822 25.0824 23.1842 24.6002 23.8922 23.8922C24.6002 23.1842 25.0824 22.2822 25.2777 21.3001C25.4731 20.3181 25.3728 19.3002 24.9896 18.3752C24.6065 17.4501 23.9576 16.6595 23.1251 16.1032C22.2926 15.5469 21.3138 15.25 20.3125 15.25ZM17.5 5.6875C17.5 5.13124 17.665 4.58747 17.974 4.12496C18.283 3.66245 18.7223 3.30196 19.2362 3.08909C19.7501 2.87622 20.3156 2.82052 20.8612 2.92904C21.4068 3.03756 21.9079 3.30543 22.3012 3.69876C22.6946 4.0921 22.9624 4.59324 23.071 5.13881C23.1795 5.68438 23.1238 6.24988 22.9109 6.7638C22.698 7.27772 22.3376 7.71697 21.875 8.02601C21.4125 8.33505 20.8688 8.5 20.3125 8.5H17.5V5.6875ZM2.875 5.6875C2.875 4.94158 3.17132 4.22621 3.69876 3.69876C4.22621 3.17132 4.94158 2.875 5.6875 2.875C6.43342 2.875 7.14879 3.17132 7.67624 3.69876C8.20369 4.22621 8.5 4.94158 8.5 5.6875V8.5H5.6875C4.94158 8.5 4.22621 8.20369 3.69876 7.67624C3.17132 7.14879 2.875 6.43342 2.875 5.6875ZM8.5 20.3125C8.5 20.8688 8.33505 21.4125 8.02601 21.875C7.71697 22.3376 7.27772 22.698 6.7638 22.9109C6.24988 23.1238 5.68438 23.1795 5.13881 23.071C4.59324 22.9624 4.0921 22.6946 3.69876 22.3012C3.30543 21.9079 3.03756 21.4068 2.92904 20.8612C2.82052 20.3156 2.87622 19.7501 3.08909 19.2362C3.30196 18.7223 3.66245 18.283 4.12496 17.974C4.58747 17.665 5.13124 17.5 5.6875 17.5H8.5V20.3125ZM10.75 10.75H15.25V15.25H10.75V10.75ZM20.3125 23.125C19.5666 23.125 18.8512 22.8287 18.3238 22.3012C17.7963 21.7738 17.5 21.0584 17.5 20.3125V17.5H20.3125C21.0584 17.5 21.7738 17.7963 22.3012 18.3238C22.8287 18.8512 23.125 19.5666 23.125 20.3125C23.125 21.0584 22.8287 21.7738 22.3012 22.3012C21.7738 22.8287 21.0584 23.125 20.3125 23.125Z" fill="url(#paint0_linear_690_857)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_690_857" x1="12.1161" y1="21.9714" x2="19.0308" y2="-11.7373" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.175952" stopColor="#0ECF63" />
                                                    <stop offset={1} stopColor="#E8FCEC" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="space-y-5">
                                            <h2 className="font-bold text-2xl text-center">Begin your wellness journey</h2>
                                            <p className="text-muted md:text-lg text-center">Get the HealthBubba’s Patient App, consult and connect with specialists and healthcare professionals. </p>
                                        </div>
                                        <div className="bg-gray-200 p-1 rounded-xl space-x-2 sm:space-x-2">
                                            <button className="btn btn-white shadow-md text-sm md:text-base">Get on PlayStore</button>
                                            <button role="button" className="btn btn-white shadow-md text-sm md:text-base">Get on AppStore</button>
                                        </div>
                                    </div>
                                    <div >
                                        <img src="/assets/imgs/media/book-appointment.png" className="w-full px-0 object-right-bottom object-cover mb-0" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-flow-col h-full grid-rows-2 gap-y-5">
                                <div className="shadow-lg relative border border-primary  rounded-3xl bg-gradient-to-t from-[#57EF9F] to-[#57EF9F] p-4">
                                    <div className="bg-[url('/assets/imgs/media/banners/hand-holding-phone.png')] absolute right-0 bottom-0 top-0 left-0 md:left-32 bg-contain bg-no-repeat z-0" />
                                    <div className="text-white space-y-4 md:p-10 p-5 pt-20 absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-[#10B26F] via-[#57EF9F] to-transparent">
                                    <h5 className="text-lg font-bold">Easy to Use</h5>
                                    <p>With simplified navigation and clear instructions, patients can easily connect with doctors, receive prescriptions, and monitor their health with confidence and convenience.</p>
                                    </div>
                                </div>
                            <div>
                                <div className="border shadow-lg flex flex-col items-center rounded-3xl space-y-2">
                                    <div className="p-2">
                                        <img src="/assets/imgs/media/banners/doctor-with-mobile-phone.png" alt="" />
                                    </div>
                                    <div className="shadow border rounded-[50px] font-medium text-secondary mx-auto inline-block px-3 text-center py-1 text-sm md:text-base">500+ Online Healthcare Practitioners</div>
                                    <div className='relative'>
                                        <img src="/assets/imgs/media/banners/image-wheel.png" className="h-32 -mt-5 object-contain mx-auto fade" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent  to-white" />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    <FeatureCards />

                    <section className="py-20">
                        <div className="md:max-w-7xl mx-auto space-y-5 md:space-y-10">
                            <div className="flex justify-center">
                                <div className="mx-auto inline-flex border shadow text-sm items-center space-x-1 p-2 px-3 rounded-[50px]">
                                    <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3777 5.84771C17.1582 7.48023 17.3064 9.34401 16.7936 11.0794C16.2808 12.8147 15.1434 14.2986 13.6008 15.2446C12.0583 16.1907 10.22 16.5318 8.44077 16.2021C6.66152 15.8725 5.06744 14.8955 3.96618 13.4597C2.86493 12.0238 2.33457 10.231 2.47746 8.42708C2.62035 6.6232 3.42637 4.93619 4.73995 3.69165C6.05353 2.4471 7.78156 1.73325 9.59051 1.68785C11.3995 1.64246 13.1611 2.26874 14.5355 3.44584L16.1295 1.85115C16.235 1.7456 16.3782 1.68631 16.5274 1.68631C16.6767 1.68631 16.8198 1.7456 16.9254 1.85115C17.0309 1.9567 17.0902 2.09985 17.0902 2.24912C17.0902 2.39838 17.0309 2.54154 16.9254 2.64709L10.1754 9.39709C10.0698 9.50263 9.92669 9.56193 9.77743 9.56193C9.62816 9.56193 9.485 9.50263 9.37946 9.39709C9.27391 9.29154 9.21461 9.14839 9.21461 8.99912C9.21461 8.84985 9.27391 8.7067 9.37946 8.60115L11.3285 6.65209C10.8003 6.30274 10.1696 6.14189 9.53862 6.19558C8.90761 6.24927 8.31319 6.51435 7.85158 6.94791C7.38996 7.38147 7.08819 7.95813 6.9951 8.58454C6.90201 9.21095 7.02306 9.85045 7.33865 10.3995C7.65424 10.9486 8.14589 11.375 8.73402 11.6099C9.32216 11.8448 9.97234 11.8743 10.5793 11.6936C11.1863 11.513 11.7145 11.1327 12.0786 10.6145C12.4426 10.0963 12.621 9.47037 12.585 8.8381C12.5808 8.76423 12.5913 8.69027 12.6157 8.62043C12.6401 8.5506 12.6781 8.48626 12.7274 8.43109C12.7767 8.37592 12.8364 8.331 12.903 8.29889C12.9697 8.26678 13.042 8.24812 13.1159 8.24396C13.265 8.23557 13.4115 8.28679 13.5229 8.38634C13.578 8.43564 13.623 8.49531 13.6551 8.56197C13.6872 8.62863 13.7058 8.70095 13.71 8.77482C13.7613 9.66974 13.5057 10.5554 12.9854 11.2853C12.4652 12.0153 11.7114 12.5459 10.8488 12.7895C9.98608 13.033 9.06613 12.9749 8.24095 12.6248C7.41577 12.2746 6.73476 11.6534 6.31047 10.8638C5.88618 10.0742 5.74401 9.16345 5.90747 8.28209C6.07092 7.40072 6.53021 6.60152 7.20943 6.01655C7.88864 5.43159 8.74712 5.09588 9.64298 5.06493C10.5388 5.03397 11.4184 5.30962 12.1364 5.84631L13.736 4.2467C12.5638 3.27343 11.0733 2.76758 9.55078 2.8263C8.02829 2.88502 6.58117 3.50417 5.48737 4.56484C4.39357 5.6255 3.7302 7.05289 3.62469 8.57286C3.51918 10.0928 3.97895 11.5982 4.91571 12.7998C5.85247 14.0014 7.20015 14.8146 8.69992 15.0831C10.1997 15.3516 11.7458 15.0566 13.0413 14.2546C14.3368 13.4527 15.2903 12.2003 15.7187 10.7382C16.1471 9.27603 16.0202 7.70715 15.3623 6.33287C15.298 6.19823 15.2898 6.04355 15.3395 5.90285C15.3892 5.76216 15.4928 5.64697 15.6274 5.58263C15.7621 5.5183 15.9167 5.51008 16.0574 5.55979C16.1981 5.60951 16.3133 5.71307 16.3777 5.84771Z" fill="#5C5C5C" />
                                    </svg>
                                    <span>Order a Lab Test</span>
                                </div>
                            </div>
                            <div className="text-center md:w-2/4 mx-auto mb-20 px-4">
                                <h2 className="text-2xl font-semibold">Order a Lab Test</h2>
                                <p className="text-muted text-sm md:text-base">Book your lab tests, doctors' consultations, medication delivery, and vaccinations all from your home.</p>
                            </div>
                            <div className="md:w-5/6 mx-auto px-4">
                                <div className="md:flex md:space-x-10 items-center">
                                    <div className="md:w-2/5">
                                        <div className="border-t-4 shadow border-t-primary bg-gray-100">
                                            <div className="p-5 flex items-start bg-white space-x-3 ">
                                            <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                                <i className="bi bi-chevron-left" />
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <p className="font-semibold">Book your tests</p>
                                                <p className="text-muted text-sm">Find your test from more than 500+ test and packages</p>
                                            </div>
                                            </div>
                                            <div className="p-5 flex items-start space-x-3">
                                            <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                                <i className="bi bi-chevron-left" />
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <p className="font-semibold">Sample Collection</p>
                                                <p className="text-muted text-sm">Our trained Phlebotomist will collect your samples at the comfort of your home</p>
                                            </div>
                                            </div>
                                            <div className="p-5 flex items-start space-x-3">
                                            <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                                <i className="bi bi-chevron-left" />
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <p className="font-semibold">Receive accurate results</p>
                                                <p className="text-muted text-sm">Receive your result in your secure and confidential account within 48hours.</p>
                                            </div>
                                            </div>
                                            <div className="p-5 flex items-start space-x-3">
                                            <div className="w-10 flex items-center justify-center border rounded-lg aspect-square shadow-sm bg-white">
                                                <i className="bi bi-chevron-left" />
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <p className="font-semibold">Get Doctor's consultation</p>
                                                <p className="text-muted text-sm">To understand your result better get a Doctor's consultation</p>
                                            </div>
                                            </div>
                                            <div className="p-5 mb-5">
                                            <a href="#" className="btn btn-primary">Get Started</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:w-3/5">
                                        <img src="/assets/imgs/media/laboratory.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Client Start */}
                    {/* <ClientReview /> */}
                    {/* Client End */}

                    {/* Package Start */}
                    <section className="py-20 max-w-7xl mx-auto space-y-10 px-4">
                        <div className="flex justify-center">
                            <div className="mx-auto inline-flex border shadow text-sm items-center space-x-1 p-2 px-3 rounded-[50px]">
                                <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3777 5.84771C17.1582 7.48023 17.3064 9.34401 16.7936 11.0794C16.2808 12.8147 15.1434 14.2986 13.6008 15.2446C12.0583 16.1907 10.22 16.5318 8.44077 16.2021C6.66152 15.8725 5.06744 14.8955 3.96618 13.4597C2.86493 12.0238 2.33457 10.231 2.47746 8.42708C2.62035 6.6232 3.42637 4.93619 4.73995 3.69165C6.05353 2.4471 7.78156 1.73325 9.59051 1.68785C11.3995 1.64246 13.1611 2.26874 14.5355 3.44584L16.1295 1.85115C16.235 1.7456 16.3782 1.68631 16.5274 1.68631C16.6767 1.68631 16.8198 1.7456 16.9254 1.85115C17.0309 1.9567 17.0902 2.09985 17.0902 2.24912C17.0902 2.39838 17.0309 2.54154 16.9254 2.64709L10.1754 9.39709C10.0698 9.50263 9.92669 9.56193 9.77743 9.56193C9.62816 9.56193 9.485 9.50263 9.37946 9.39709C9.27391 9.29154 9.21461 9.14839 9.21461 8.99912C9.21461 8.84985 9.27391 8.7067 9.37946 8.60115L11.3285 6.65209C10.8003 6.30274 10.1696 6.14189 9.53862 6.19558C8.90761 6.24927 8.31319 6.51435 7.85158 6.94791C7.38996 7.38147 7.08819 7.95813 6.9951 8.58454C6.90201 9.21095 7.02306 9.85045 7.33865 10.3995C7.65424 10.9486 8.14589 11.375 8.73402 11.6099C9.32216 11.8448 9.97234 11.8743 10.5793 11.6936C11.1863 11.513 11.7145 11.1327 12.0786 10.6145C12.4426 10.0963 12.621 9.47037 12.585 8.8381C12.5808 8.76423 12.5913 8.69027 12.6157 8.62043C12.6401 8.5506 12.6781 8.48626 12.7274 8.43109C12.7767 8.37592 12.8364 8.331 12.903 8.29889C12.9697 8.26678 13.042 8.24812 13.1159 8.24396C13.265 8.23557 13.4115 8.28679 13.5229 8.38634C13.578 8.43564 13.623 8.49531 13.6551 8.56197C13.6872 8.62863 13.7058 8.70095 13.71 8.77482C13.7613 9.66974 13.5057 10.5554 12.9854 11.2853C12.4652 12.0153 11.7114 12.5459 10.8488 12.7895C9.98608 13.033 9.06613 12.9749 8.24095 12.6248C7.41577 12.2746 6.73476 11.6534 6.31047 10.8638C5.88618 10.0742 5.74401 9.16345 5.90747 8.28209C6.07092 7.40072 6.53021 6.60152 7.20943 6.01655C7.88864 5.43159 8.74712 5.09588 9.64298 5.06493C10.5388 5.03397 11.4184 5.30962 12.1364 5.84631L13.736 4.2467C12.5638 3.27343 11.0733 2.76758 9.55078 2.8263C8.02829 2.88502 6.58117 3.50417 5.48737 4.56484C4.39357 5.6255 3.7302 7.05289 3.62469 8.57286C3.51918 10.0928 3.97895 11.5982 4.91571 12.7998C5.85247 14.0014 7.20015 14.8146 8.69992 15.0831C10.1997 15.3516 11.7458 15.0566 13.0413 14.2546C14.3368 13.4527 15.2903 12.2003 15.7187 10.7382C16.1471 9.27603 16.0202 7.70715 15.3623 6.33287C15.298 6.19823 15.2898 6.04355 15.3395 5.90285C15.3892 5.76216 15.4928 5.64697 15.6274 5.58263C15.7621 5.5183 15.9167 5.51008 16.0574 5.55979C16.1981 5.60951 16.3133 5.71307 16.3777 5.84771Z" fill="#5C5C5C" />
                                </svg>
                                <span>Explore Test Packages</span>
                            </div>
                        </div>
                        <div className="text-center md:w-2/4 mx-auto mb-20">
                            <h2 className="text-2xl font-semibold">Discover and Explore Healthbubba’s Packages</h2>
                            <p className="text-muted text-sm md:text-base">You deserve convenient health care that meets you where you are.</p>
                        </div>

                        <PackageList categories={categories} />

                        <div className="text-center">
                            <Link href={route('packages')} className="border border-gray-200 px-3 py-1 bg-neutral-50 hover:bg-gray-200 duration-300 rounded-full justify-start items-start inline-flex">
                            View all Tests <i className="ms-1 bi bi-arrow-right-short" />
                            </Link>
                        </div>
                    </section>
                    {/* Package End */}

                    {/* Testimonials Start */}
                    <section className="bg-gray-100 relative bg-cover bg-center py-20" style={{
                        backgroundImage: "url('/assets/imgs/media/banners/banner-2.svg')"
                    }}>
                        {/* <img src="" alt="" /> */}
                        <div className="flex items-center justify-center px-4">
                            <div className="space-y-5 md:space-y-10 flex flex-col items-center">
                                <div className="mx-auto inline-flex border shadow text-sm bg-white items-center space-x-1 p-2 px-3 rounded-[50px]">
                                    <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3777 5.84771C17.1582 7.48023 17.3064 9.34401 16.7936 11.0794C16.2808 12.8147 15.1434 14.2986 13.6008 15.2446C12.0583 16.1907 10.22 16.5318 8.44077 16.2021C6.66152 15.8725 5.06744 14.8955 3.96618 13.4597C2.86493 12.0238 2.33457 10.231 2.47746 8.42708C2.62035 6.6232 3.42637 4.93619 4.73995 3.69165C6.05353 2.4471 7.78156 1.73325 9.59051 1.68785C11.3995 1.64246 13.1611 2.26874 14.5355 3.44584L16.1295 1.85115C16.235 1.7456 16.3782 1.68631 16.5274 1.68631C16.6767 1.68631 16.8198 1.7456 16.9254 1.85115C17.0309 1.9567 17.0902 2.09985 17.0902 2.24912C17.0902 2.39838 17.0309 2.54154 16.9254 2.64709L10.1754 9.39709C10.0698 9.50263 9.92669 9.56193 9.77743 9.56193C9.62816 9.56193 9.485 9.50263 9.37946 9.39709C9.27391 9.29154 9.21461 9.14839 9.21461 8.99912C9.21461 8.84985 9.27391 8.7067 9.37946 8.60115L11.3285 6.65209C10.8003 6.30274 10.1696 6.14189 9.53862 6.19558C8.90761 6.24927 8.31319 6.51435 7.85158 6.94791C7.38996 7.38147 7.08819 7.95813 6.9951 8.58454C6.90201 9.21095 7.02306 9.85045 7.33865 10.3995C7.65424 10.9486 8.14589 11.375 8.73402 11.6099C9.32216 11.8448 9.97234 11.8743 10.5793 11.6936C11.1863 11.513 11.7145 11.1327 12.0786 10.6145C12.4426 10.0963 12.621 9.47037 12.585 8.8381C12.5808 8.76423 12.5913 8.69027 12.6157 8.62043C12.6401 8.5506 12.6781 8.48626 12.7274 8.43109C12.7767 8.37592 12.8364 8.331 12.903 8.29889C12.9697 8.26678 13.042 8.24812 13.1159 8.24396C13.265 8.23557 13.4115 8.28679 13.5229 8.38634C13.578 8.43564 13.623 8.49531 13.6551 8.56197C13.6872 8.62863 13.7058 8.70095 13.71 8.77482C13.7613 9.66974 13.5057 10.5554 12.9854 11.2853C12.4652 12.0153 11.7114 12.5459 10.8488 12.7895C9.98608 13.033 9.06613 12.9749 8.24095 12.6248C7.41577 12.2746 6.73476 11.6534 6.31047 10.8638C5.88618 10.0742 5.74401 9.16345 5.90747 8.28209C6.07092 7.40072 6.53021 6.60152 7.20943 6.01655C7.88864 5.43159 8.74712 5.09588 9.64298 5.06493C10.5388 5.03397 11.4184 5.30962 12.1364 5.84631L13.736 4.2467C12.5638 3.27343 11.0733 2.76758 9.55078 2.8263C8.02829 2.88502 6.58117 3.50417 5.48737 4.56484C4.39357 5.6255 3.7302 7.05289 3.62469 8.57286C3.51918 10.0928 3.97895 11.5982 4.91571 12.7998C5.85247 14.0014 7.20015 14.8146 8.69992 15.0831C10.1997 15.3516 11.7458 15.0566 13.0413 14.2546C14.3368 13.4527 15.2903 12.2003 15.7187 10.7382C16.1471 9.27603 16.0202 7.70715 15.3623 6.33287C15.298 6.19823 15.2898 6.04355 15.3395 5.90285C15.3892 5.76216 15.4928 5.64697 15.6274 5.58263C15.7621 5.5183 15.9167 5.51008 16.0574 5.55979C16.1981 5.60951 16.3133 5.71307 16.3777 5.84771Z" fill="#5C5C5C" />
                                    </svg>
                                    <span>People say this about us</span>
                                </div>
                                <div className="text-center md:w-4/6 mx-auto md:mb-20 space-y-4">
                                    <h2 className="text-3xl md:text-4xl font-medium">Wall of Love</h2>
                                    <p className="text-muted text-sm md:text-base md:w-4/5 mx-auto">Listen to the buzz about us and discover why Health Bubba is making waves in the health tech world. Our innovative approach to healthcare is revolutionizing how people access medical services..</p>
                                </div>

                                <div className="md:max-w-7xl mx-auto md:py-20">
                                    <Testimonial testimonials={testimonials} />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonials End */}

                    {/* FAQs Start */}
                    <Faq faqs={faqs} />
                    {/* FAQs End */}

                    <section className="py-10 md:py-20 px-4 max-w-7xl mx-auto ">
                        <Cta />
                    </section>
                </main>
            </ GuestLayout>
        </>
    );
}
