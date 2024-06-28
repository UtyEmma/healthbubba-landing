import GuestLayout from "@/Layouts/GuestLayout"
import { Faq } from "@/Partials/FAQs/Faq"
import Testimonial from "@/Partials/Testimonial/Testimonial"

export default ({faqs, testimonials}) => {

    return (
        <GuestLayout title="About Us" hideGap>
            <section className="py-10 max-w-7xl mx-auto space-y-5 md:space-y-10 px-4">
                <div className="flex justify-center items-center flex-col">

                    <div className="mx-auto inline-flex border shadow text-sm items-center space-x-1 p-2 px-3 rounded-[50px]">
                        <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3777 5.84771C17.1582 7.48023 17.3064 9.34401 16.7936 11.0794C16.2808 12.8147 15.1434 14.2986 13.6008 15.2446C12.0583 16.1907 10.22 16.5318 8.44077 16.2021C6.66152 15.8725 5.06744 14.8955 3.96618 13.4597C2.86493 12.0238 2.33457 10.231 2.47746 8.42708C2.62035 6.6232 3.42637 4.93619 4.73995 3.69165C6.05353 2.4471 7.78156 1.73325 9.59051 1.68785C11.3995 1.64246 13.1611 2.26874 14.5355 3.44584L16.1295 1.85115C16.235 1.7456 16.3782 1.68631 16.5274 1.68631C16.6767 1.68631 16.8198 1.7456 16.9254 1.85115C17.0309 1.9567 17.0902 2.09985 17.0902 2.24912C17.0902 2.39838 17.0309 2.54154 16.9254 2.64709L10.1754 9.39709C10.0698 9.50263 9.92669 9.56193 9.77743 9.56193C9.62816 9.56193 9.485 9.50263 9.37946 9.39709C9.27391 9.29154 9.21461 9.14839 9.21461 8.99912C9.21461 8.84985 9.27391 8.7067 9.37946 8.60115L11.3285 6.65209C10.8003 6.30274 10.1696 6.14189 9.53862 6.19558C8.90761 6.24927 8.31319 6.51435 7.85158 6.94791C7.38996 7.38147 7.08819 7.95813 6.9951 8.58454C6.90201 9.21095 7.02306 9.85045 7.33865 10.3995C7.65424 10.9486 8.14589 11.375 8.73402 11.6099C9.32216 11.8448 9.97234 11.8743 10.5793 11.6936C11.1863 11.513 11.7145 11.1327 12.0786 10.6145C12.4426 10.0963 12.621 9.47037 12.585 8.8381C12.5808 8.76423 12.5913 8.69027 12.6157 8.62043C12.6401 8.5506 12.6781 8.48626 12.7274 8.43109C12.7767 8.37592 12.8364 8.331 12.903 8.29889C12.9697 8.26678 13.042 8.24812 13.1159 8.24396C13.265 8.23557 13.4115 8.28679 13.5229 8.38634C13.578 8.43564 13.623 8.49531 13.6551 8.56197C13.6872 8.62863 13.7058 8.70095 13.71 8.77482C13.7613 9.66974 13.5057 10.5554 12.9854 11.2853C12.4652 12.0153 11.7114 12.5459 10.8488 12.7895C9.98608 13.033 9.06613 12.9749 8.24095 12.6248C7.41577 12.2746 6.73476 11.6534 6.31047 10.8638C5.88618 10.0742 5.74401 9.16345 5.90747 8.28209C6.07092 7.40072 6.53021 6.60152 7.20943 6.01655C7.88864 5.43159 8.74712 5.09588 9.64298 5.06493C10.5388 5.03397 11.4184 5.30962 12.1364 5.84631L13.736 4.2467C12.5638 3.27343 11.0733 2.76758 9.55078 2.8263C8.02829 2.88502 6.58117 3.50417 5.48737 4.56484C4.39357 5.6255 3.7302 7.05289 3.62469 8.57286C3.51918 10.0928 3.97895 11.5982 4.91571 12.7998C5.85247 14.0014 7.20015 14.8146 8.69992 15.0831C10.1997 15.3516 11.7458 15.0566 13.0413 14.2546C14.3368 13.4527 15.2903 12.2003 15.7187 10.7382C16.1471 9.27603 16.0202 7.70715 15.3623 6.33287C15.298 6.19823 15.2898 6.04355 15.3395 5.90285C15.3892 5.76216 15.4928 5.64697 15.6274 5.58263C15.7621 5.5183 15.9167 5.51008 16.0574 5.55979C16.1981 5.60951 16.3133 5.71307 16.3777 5.84771Z" fill="#5C5C5C" />
                        </svg>
                        <span>About Us</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl text-center mt-5">About Us</h2>
                </div>
                <div className="text-center md:w-4/5 mx-auto mb-20 space-y-3">
                    <p className="text-muted text-sm md:text-base">At HealthBubba, we are dedicated to revolutionizing healthcare by providing accessible, efficient, and high-quality telemedicine services. Our team of experienced medical professionals, innovative technologists, and compassionate support staff work together to deliver a seamless and personalized healthcare experience for patients around the globe.</p>
                </div>

            </section>

            <div className="md:max-w-[90%] mx-auto p md:py-10 px-4">
                <div className="rounded-xl overflow-hidden aspect-[16/7] w-full">
                    <img src="/assets/imgs/media/office-chairs.jpeg" className="object-cover w-full h-full" alt="" />
                </div>
            </div>

            <section className="md:w-8/12 mx-auto space-y-5 pb-20 px-4 text-sm md:text-base">
                <div className="space-y-2 md:space-y-7">
                    <h2 className="text-3xl md:text-4xl mt-5">Our Mission</h2>
                    <div className=" mb-20 space-y-3">
                        <p className="text-muted text-sm md:text-base">Our mission is to make healthcare accessible to everyone, regardless of location, by leveraging advanced telecommunication technologies. We believe that everyone deserves the best possible care and strive to break down barriers to healthcare access through our telemedicine platform.</p>
                    </div>
                </div>
                <div className="space-y-2 md:space-y-7">
                    <h2 className="text-3xl md:text-4xl mt-5">What We Do</h2>
                    <div className=" mb-20 text-muted space-y-3">
                        <p className=" text-sm md:text-base">We provide a comprehensive range of telemedicine services, including but not limited to:</p>

                        <ul className="list-disc list-inside"> 
                            <li>Virtual Consultations: Connect with board-certified doctors and specialists from the comfort of your home.</li>
                            <li>Remote Monitoring: Utilize cutting-edge devices to monitor your health conditions and receive timely interventions.</li>
                            <li>Prescriptions: Get your medications prescribed and delivered to your doorstep.</li>
                            <li>Lab tests</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-2 md:space-y-7">
                    <h2 className="text-3xl md:text-4xl mt-5">Our Values</h2>
                    <div className=" mb-20 space-y-3">
                        <p className="text-muted ">Patient-Centered Care: Our patients are at the heart of everything we do. We are committed to delivering care that is tailored to meet each individual's needs.
Innovation: We embrace the latest technological advancements to improve healthcare delivery and patient outcomes.
Accessibility: We strive to make our services available to everyone, regardless of geographical or financial barriers.
Integrity: We operate with the highest standards of ethics and professionalism in all our interactions.</p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 relative bg-cover bg-center pt-20" style={{
                    backgroundImage: "url('/assets/imgs/media/banners/banner-2.svg')"
                }}>
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

                        <div className="md:max-w-7xl mx-auto py-10 md:py-20">
                            <Testimonial testimonials={testimonials} />
                        </div>
                    </div>
                </div>
            </section>

        </GuestLayout>
    )

}