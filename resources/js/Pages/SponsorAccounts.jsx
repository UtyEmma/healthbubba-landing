import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, usePage } from '@inertiajs/react'
import { useState } from 'react'

const sponsorAccounts = [
    {
        name: 'Individual Sponsor',
        tagline: 'Sponsor healthcare for family and loved ones.',
        description: 'Ensure your family and loved ones get quality healthcare when they need it most.',
        color: '#079e55',
        btnClass: 'btn-green',
        softColor: '#eaf8f1',
        steps: ['Add beneficiaries', 'Choose coverage / plan', 'Make payment', 'Manage beneficiaries', 'Track healthcare usage'],
        icon: 'individual',
    },
    {
        name: 'Business Sponsor',
        tagline: 'Provide healthcare coverage for your employees.',
        description: "Support your team's health and wellbeing with affordable and reliable healthcare.",
        color: '#1478ee',
        btnClass: 'btn-blue',
        softColor: '#ebf6ff',
        steps: ['Add employees', 'Choose coverage', 'Fund / pay for coverage', 'Manage employee coverage', 'Track healthcare usage'],
        icon: 'business',
    },
    {
        name: 'Institutional Sponsor',
        tagline: 'Fund and manage healthcare coverage for large groups.',
        description: 'Empower communities, organizations and programs with accessible healthcare for everyone.',
        color: '#7a2bd0',
        btnClass: 'btn-purple',
        softColor: '#f5efff',
        steps: ['Fund your account', 'Start a campaign', 'Allocate healthcare benefits', 'Enroll beneficiaries', 'Track healthcare usage'],
        icon: 'institutional',
    },
]

function SponsorIcon({ type, color }) {
    if (type === 'business') {
        return (
            <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
                <path d="M22 17v-3a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v3h8a7 7 0 0 1 7 7v10c-7 3-15.4 4-25 4S14 37 7 34V24a7 7 0 0 1 7-7h8Zm5 0h10v-3H27v3Z" fill={color} />
                <path d="M7 39c7.2 2.4 15.6 3.5 25 3.5S49.8 41.4 57 39v12a7 7 0 0 1-7 7H14a7 7 0 0 1-7-7V39Z" fill={color} />
                <rect x="27" y="35" width="10" height="9" rx="2" fill="white" />
            </svg>
        )
    }

    if (type === 'institutional') {
        return (
            <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
                <path d="M32 7 6 20v6h52v-6L32 7Z" fill={color} />
                <path d="M12 31h8v19h-8V31Zm16 0h8v19h-8V31Zm16 0h8v19h-8V31ZM7 54h50v6H7v-6Z" fill={color} />
            </svg>
        )
    }

    return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
            <circle cx="32" cy="17" r="11" fill={color} />
            <path d="M13 52c0-12 8.5-21 19-21s19 9 19 21v5H13v-5Z" fill={color} />
            <path d="m32 49-6-5.8a4 4 0 0 1 5.6-5.7l.4.4.4-.4a4 4 0 0 1 5.6 5.7L32 49Z" fill="white" />
        </svg>
    )
}

const ArrowRight = () => (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M4 10h11m-4-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const WhatsAppIcon = ({ className = '' }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
        <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M11.1 9.8c.4-.3.8-.4 1.2-.2l2 3.3c.2.4.2.8-.1 1.1l-1 1.1c.9 2 2.4 3.6 4.5 4.6l1.2-1.2c.3-.3.7-.4 1.1-.2l3.1 1.8c.4.2.5.7.4 1.1-.5 1.8-2.2 3-4.1 2.7-5.9-.9-10.6-5.6-11.3-11.5-.2-1.1.3-2.1 1.1-2.8.6-.5 1.3-.6 1.9.2Z" fill="currentColor" />
    </svg>
)

const HeadsetIcon = () => (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-[#079e55]" fill="none" aria-hidden="true">
        <path d="M10 35v-5a22 22 0 0 1 44 0v5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M15 33h3a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-3a6 6 0 0 1-6-6v-7a6 6 0 0 1 6-6Zm34 0h-3a5 5 0 0 0-5 5v9a5 5 0 0 0 5 5h3a6 6 0 0 0 6-6v-7a6 6 0 0 0-6-6Z" fill="currentColor" />
        <path d="M45 52c-2 4-5.5 6-10 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <rect x="28" y="54" width="9" height="6" rx="3" fill="currentColor" />
    </svg>
)

export default function SponsorAccounts() {
    const { urls } = usePage().props
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Head title="Sponsor Accounts" />
            <GuestLayout >
                <main className="mx-auto max-w-7xl pb-8">
                    <section className="px-2 pb-7 pt-3 text-center sm:pb-9">
                        <h1 className="text-5xl font-bold leading-loose sm:text-6xl">
                            Sponsor healthcare.  Make a <span className="relative inline-block text-[#079e55]">real impact.<span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#079e55]" aria-hidden="true" /></span>
                        </h1>
                        <p className="mx-auto mt-8 max-w-2xl leading-6 text-[#58657a] sm:text-lg sm:leading-7">
                            Choose the type of sponsor account that fits your purpose.
                            <br className="hidden sm:block" /> You can manage, fund and track healthcare access for those who matter most.
                        </p>
                    </section>

                    <div className="space-y-5">
                        {sponsorAccounts.map((account) => (
                            <article key={account.name} className="rounded-2xl border border-[#e4e9ed] bg-white p-5 shadow-[0_3px_12px_rgba(17,36,55,0.05)] sm:p-6">
                                <div className="grid gap-6 md:grid-cols-[1.5fr_1fr_1fr] md:items-center">
                                    <div className="flex md:items-center gap-5 md:border-r md:border-[#d9e1e8] md:pr-7">
                                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl lg:h-28 lg:w-28" style={{ backgroundColor: account.softColor }}>
                                            <SponsorIcon type={account.icon} color={account.color} />
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-bold sm:text-2xl">{account.name}</h2>
                                            <p className="mt-2 font-bold leading-6" style={{ color: account.color }}>{account.tagline}</p>
                                            <p className="mt-4 text-sm leading-6 text-[#58657a]">{account.description}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="mb-3 text-sm font-bold sm:text-base">How it works</h3>
                                        <ol className="space-y-2">
                                            {account.steps.map((step, index) => (
                                                <li key={step} className="flex items-center gap-3 text-sm text-[#58657a]">
                                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: account.color }}>
                                                        {index + 1}
                                                    </span>
                                                    {step}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                    

                                    <a href={urls.sponsors} className={`btn ${account.btnClass} btn-sm`} >
                                        <span>Sign Up as {account.name}</span>
                                        <ArrowRight />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <aside className="mt-5 flex flex-col gap-5 rounded-2xl bg-[#effaf6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <div className="flex items-center gap-5">
                            <HeadsetIcon />
                            <div>
                                <h2 className="text-lg font-bold">Need help choosing?</h2>
                                <p className="mt-1 text-sm text-[#58657a]">Our team is here to help you find the right sponsor account for your needs.</p>
                            </div>
                        </div>
                        <a
                            href={urls.whatsapp_support}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border-2 border-[#079e55] bg-white px-6 py-3 font-bold text-[#079e55] transition hover:bg-[#079e55] hover:text-white"
                        >
                            <WhatsAppIcon className="h-7 w-7" />
                            Chat with us
                        </a>
                    </aside>
                </main>
            </GuestLayout>
        </>
    )
}
