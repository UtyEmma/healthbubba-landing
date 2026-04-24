import AppStoreButton from "@/Components/Buttons/AppStoreButton";
import PlaystoreButton from "@/Components/Buttons/PlaystoreButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { SubscriptionCTA } from "@/Layouts/Partials/SubscriptionCTA";
import { Head } from "@inertiajs/react";
import {
    CheckBadgeIcon,
    LockClosedIcon,
    PlayCircleIcon,
    ShieldCheckIcon,
    StarIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Testimonial from "@/Partials/Testimonial/Testimonial";

const trustItems = [
    {
        title: "Safe",
        description: "Your data is secure and confidential.",
        icon: LockClosedIcon,
    },
    {
        title: "Private",
        description: "Verified professionals only.",
        icon: CheckBadgeIcon,
    },
    {
        title: "Reliable",
        description: "Built for convenience and peace of mind.",
        icon: ShieldCheckIcon,
    },
];

export default function Download({ testimonials = [] }) {
    const socialProofItems = testimonials.slice(0, 4);
    const videoCards = socialProofItems.slice(0, 2).map((item, index) => ({
        ...item,
        poster:
            index === 0
                ? "/assets/imgs/media/video-call.png"
                : "/assets/imgs/media/appointments.png",
    }));
    const noteCards = socialProofItems.slice(0, 3);

    return (
        <GuestLayout>
            <Head title="Download" />

            <div className="space-y-10 md:space-y-16 px-4">
                <section className="">
                    <div className="mx-auto relative overflow-hidden rounded-[2rem] border-2 border-[#11AA6C] bg-primary px-5 py-8 md:px-12 md:py-14 bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat bg-top">
                        <div className="absolute inset-y-0 right-0 hidden md:block w-1/2 bg-gradient-to-l from-white/10 to-transparent" />

                        <div className="max-w-6xl mx-auto relative grid items-center gap-10 md:grid-cols-[1.05fr,0.95fr]">
                            <div className="text-white space-y-6">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm shadow-lg backdrop-blur-sm">
                                    <ShieldCheckIcon className="size-4 text-secondary" />
                                    <span>Trusted care, now in your pocket</span>
                                </div>

                                <div className="space-y-4">
                                    <h1 className="md:text-5xl text-3xl font-bold leading-tight md:max-w-xl">
                                        Start Taking Control of Your Health Today. Right From Your Phone.
                                    </h1>
                                    <p className="md:text-lg text-sm text-white/85 md:max-w-lg leading-relaxed">
                                        Access trusted health guidance, track your wellbeing, and stay informed,
                                        anytime, anywhere.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <PlaystoreButton />
                                    <AppStoreButton />
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -top-6 -left-4 hidden md:block h-28 w-28 rounded-full bg-secondary/30 blur-2xl" />
                                <div className="absolute bottom-10 -right-2 hidden md:block h-32 w-32 rounded-full bg-white/20 blur-3xl" />

                                <div className="relative mx-auto max-w-md">
                                   <div className="">
                                        <img
                                            src="/assets/imgs/media/mobile-display.png"
                                            className="mx-auto  max-h-[550px] drop-shadow-2xl"
                                            alt="Healthbubba mobile app screens"
                                        />
                                    </div>
                                    <div className="absolute left-0 top-8 hidden md:block rounded-2xl bg-white p-3 shadow-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-xl bg-primary/10 p-2">
                                                <CheckBadgeIcon className="size-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Verified experts</p>
                                                <p className="text-xs text-muted">Professional guidance you can trust</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 right-0 hidden md:block rounded-2xl bg-white p-3 shadow-xl">
                                        <div className="flex items-center gap-3">
                                            <img src="/assets/imgs/qr-code-2.svg" className="w-12" alt="QR code" />
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Scan to download</p>
                                                <p className="text-xs text-muted">Get the app in seconds</p>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-6 items-start bg-[#F7F7F8] border rounded-[2rem] shadow-sm p-5 md:p-8">
                        <div className="space-y-3">
                            <div className="inline-flex border shadow text-sm bg-white items-center space-x-2 p-2 px-3 rounded-[50px]">
                                <StarIcon className="size-4 text-secondary" />
                                <span>Email Subscription</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-medium">
                                Get FREE health tips weekly
                            </h2>
                            <p className="text-muted text-sm md:text-base">
                                Subscribe for practical wellness tips, trusted health updates, and helpful
                                reminders delivered straight to your inbox.
                            </p>
                        </div>

                        <SubscriptionCTA />
                    </div>
                </section> */}

                <section
                    className="bg-gray-100 relative bg-cover bg-center py-10 md:py-16 rounded-[2rem] overflow-hidden"
                    style={{ backgroundImage: "url('/assets/imgs/media/banners/banner-2.svg')" }}
                >
                    <div className="max-w-6xl mx-auto px-4 space-y-8">
                        <div className="space-y-4 text-center mx-auto md:max-w-4xl">
                            {/* <div className="inline-flex border shadow text-sm bg-white items-center space-x-2 p-2 px-3 rounded-[50px]">
                                <StarIcon className="size-4 text-secondary" />
                                <span>Social Proof</span>
                            </div> */}
                            <div className="space-y-3 text-center">
                                <h2 className="text-3xl md:text-4xl font-medium">
                                    Real feedback from people already using Healthbubba
                                </h2>
                                <p className="text-muted text-sm md:text-base">
                                    A quick look at what patients and healthcare professionals appreciate most:
                                    responsive care, simple follow-up, and a smoother healthcare experience.
                                </p>
                            </div>
                        </div>

                        <Testimonial 
                            testimonials={testimonials}
                        />


                    </div>
                </section>

                <section className="max-w-7xl mx-auto py-4 md:py-10">
                    <div className="space-y-10 items-center">
                        <div className="space-y-5 max-w-5xl mx-auto text-center">
                            <div className="space-y-3 flex flex-col items-center md:items-center">
                                <div className="inline-flex border shadow text-sm bg-white items-center space-x-2 p-2 px-3 rounded-[50px]">
                                    <ShieldCheckIcon className="size-4 text-primary" />
                                    <span>Trust Section</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-semibold">
                                    Healthcare support you can trust every step of the way
                                </h2>
                                <p className="text-muted text-sm md:text-base">
                                    Designed to feel simple, secure, and dependable whether you are booking a
                                    consultation, <br /> getting follow-up support, or staying on top of your health.
                                </p>
                            </div>

                            <div className="">
                                <img
                                    src="/assets/imgs/media/video-call.png"
                                    alt="Video consultation between patient and healthcare provider"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="grid max-w-6xl mx-auto md:grid-cols-3 gap-5">
                            {trustItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div key={item.title} className="bg-white rounded-3xl border shadow p-6 space-y-4">
                                        <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                            <Icon className="size-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold">{item.title}</h3>
                                            <p className="text-muted text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="pb-10 md:pb-20">
                    <div
                        id="final-download-cta"
                        className="max-w-7xl mx-auto rounded-[2rem] bg-primary text-white px-6 py-10 md:px-12 md:py-20 text-center bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat bg-top"
                    >
                        <div className="space-y-6">
                            <div className="space-y-3 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-semibold">
                                    Take the First Step Toward Better Health Today
                                </h2>
                                <p className="text-white/80 text-sm md:text-base">
                                    Download the app and keep trusted care, updates, and support close at hand.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <PlaystoreButton />
                                <AppStoreButton />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
