import { usePage } from "@inertiajs/react";
import React from "react";

const accountTypes = [
    {
        title: "Individual",
        description: "Sponsor family and loved ones.",
        color: "#08A852",
        icon: (
            <svg viewBox="0 0 32 32" className="size-14" aria-hidden="true">
                <circle cx="16" cy="9" r="5" fill="currentColor" />
                <path
                    d="M7 24.25c0-5.08 4.03-8.25 9-8.25s9 3.17 9 8.25V27H7v-2.75Z"
                    fill="currentColor"
                />
                <path
                    d="m16 23.9-3.2-3.15a2.06 2.06 0 0 1 2.91-2.91l.29.28.29-.28a2.06 2.06 0 0 1 2.91 2.91L16 23.9Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        title: "Business",
        description: "Provide healthcare coverage for employees.",
        color: "#3478E5",
        icon: (
            <svg viewBox="0 0 32 32" className="size-14" aria-hidden="true">
                <path
                    d="M11 8V6.8C11 5.25 12.25 4 13.8 4h4.4C19.75 4 21 5.25 21 6.8V8h4.2A2.8 2.8 0 0 1 28 10.8v4.45c-3.2 1.21-7.38 1.75-12 1.75s-8.8-.54-12-1.75V10.8A2.8 2.8 0 0 1 6.8 8H11Zm2.5 0h5V6.8a.3.3 0 0 0-.3-.3h-4.4a.3.3 0 0 0-.3.3V8Z"
                    fill="currentColor"
                />
                <path
                    d="M14 18.8c.65.03 1.32.05 2 .05s1.35-.02 2-.05v1.45a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V18.8Z"
                    fill="currentColor"
                />
                <path
                    d="M4 17.35c2.6.91 5.97 1.44 10 1.58v1.32a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.32c4.03-.14 7.4-.67 10-1.58V25a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7.65Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        title: "Institutional",
        description: "Fund and manage healthcare coverage for large groups.",
        color: "#7735CA",
        icon: (
            <svg viewBox="0 0 32 32" className="size-14" aria-hidden="true">
                <path d="M16 3 3 9v3h26V9L16 3Z" fill="currentColor" />
                <path
                    d="M6 14h4v10H6V14Zm8 0h4v10h-4V14Zm8 0h4v10h-4V14ZM3 26h26v3H3v-3Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
];

export default function SponsorAccounts() {
    const { urls } = usePage().props;

    return (
        <section className="mx-auto max-w-7xl px-2 py-5 sm:px-4 md:py-10" aria-labelledby="sponsor-accounts-title" >
            <div className="overflow-hidden rounded-2xl border border-[#dce9df] bg-[#f7fbf8] px-5 py-6 shadow-[0_8px_24px_rgba(25,79,48,0.07)] sm:px-7 lg:grid lg:grid-cols-[1.25fr_2fr] lg:items-stretch lg:gap-8 lg:px-10 lg:py-7">
                <div className="flex flex-col justify-center">
                    <h2 id="sponsor-accounts-title" className="max-w-md text-2xl font-bold leading-tight text-secondary lg:text-[28px]" >
                        <span className="text-primary">Sponsor</span> healthcare <br className="hidden sm:block" /> for the people who matter.
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-muted sm:text-base">
                        Provide healthcare access for your family, employees, communities, large groups or beneficiaries through Health Bubba.
                    </p>

                    <div className="mt-5 max-w-sm flex flex-col justify-center">
                        <a href={route('sponsor-accounts')} className="btn btn-primary" >
                            Explore Sponsor Accounts
                            <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" aria-hidden="true" >
                                <path
                                    d="m7.5 4 6 6-6 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <p className="mt-2 text-center text-sm text-muted">
                            Already have a Sponsor Account?{" "}
                            <a href={urls.sponsors} className="font-semibold text-[#079447] hover:underline">Sign In</a>
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 gap-3 items-center sm:grid-cols-3 sm:gap-4">
                        {accountTypes.map((account) => (
                            <article
                                key={account.title}
                                className="flex min-h-full flex-col items-center rounded-xl border border-gray-100 bg-white px-4 py-5 text-center shadow-[0_7px_20px_rgba(31,54,40,0.06)]"
                            >
                                <div style={{ color: account.color }}>
                                    {account.icon}
                                </div>
                                <h3 className="mt-3 font-bold text-secondary">{account.title}</h3>
                                <span
                                    className="mt-2 h-0.5 w-8 rounded-full"
                                    style={{ backgroundColor: account.color }}
                                    aria-hidden="true"
                                />
                                <p className="mt-3 text-sm font-medium leading-5 text-secondary">
                                    {account.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <svg
                        viewBox="0 0 48 38"
                        className="absolute -bottom-5 -left-8 hidden h-10 w-12 text-[#079447] lg:block"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M2 2c20 2 31 12 32 31"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            strokeLinecap="round"
                        />
                        <path
                            d="m28 27 6 7 5-8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
