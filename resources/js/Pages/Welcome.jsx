import GuestLayout, { DownloadContext } from '@/Layouts/GuestLayout';
import { Cta } from '@/Partials/Cta';
import { Link, Head, usePage } from '@inertiajs/react';
import { FeatureCards } from '@/Partials/Features/FeatureCards';
import { useContext } from 'react';
import HospitalLogosDisplay from '@/Partials/Home/HospitalLogosDisplay';
import HeroArea from '@/Partials/Home/HeroArea';
import PartnerPharmacies from '@/Partials/Home/PartnerPharmacies';
import { ClientReview } from '@/Partials/Home/ClientReview';
import AboutSection from '@/Partials/Home/AboutSection';
import OrderTestSection from '@/Partials/Home/OrderTestSection';

export default function Welcome({ categories, faqs = [], testimonials = [] }) {

    const {open} = useContext(DownloadContext)

    const {props} = usePage()

    return (
        <>
            <Head title='Home' />
            <GuestLayout >
                <main>
                    <HeroArea />
                    <HospitalLogosDisplay />

                    <PartnerPharmacies />

                    <AboutSection />

                    <FeatureCards />

                    <OrderTestSection />

                    {/* Client Start */}
                    <ClientReview />
                    {/* Client End */}


                    {/* Testimonials Start */}
                    
                    {/* Testimonials End */}

                    {/* FAQs Start */}
                    {/* <Faq faqs={faqs} /> */}
                    {/* FAQs End */}

                    {/* <ContactForm /> */}

                    <section className="py-10 md:py-20 px-2 max-w-7xl mx-auto ">
                        <Cta />
                    </section>
                </main>
            </ GuestLayout>
        </>
    );
}
