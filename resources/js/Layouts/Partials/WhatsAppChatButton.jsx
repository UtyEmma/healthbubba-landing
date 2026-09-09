import { usePage } from '@inertiajs/react'

export const WhatsAppIcon = ({ className = '' }) => (
    <svg
        aria-hidden="true"
        className={className}
        fill="none"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M27.4 4.6A15.86 15.86 0 0 0 16.06 0C7.22 0 .04 7.18.04 16c0 2.82.74 5.58 2.14 8L0 32l8.2-2.14A16 16 0 0 0 16.04 32h.02C24.88 32 32 24.82 32 16A15.88 15.88 0 0 0 27.4 4.6ZM16.06 29.3h-.02a13.25 13.25 0 0 1-6.76-1.86l-.48-.28-4.86 1.28 1.3-4.74-.3-.48A13.3 13.3 0 1 1 16.06 29.3Zm7.3-9.96c-.4-.2-2.36-1.16-2.72-1.3-.36-.14-.62-.2-.88.2-.26.4-1.02 1.3-1.24 1.56-.24.26-.46.3-.86.1-.4-.2-1.68-.62-3.2-1.98a12.02 12.02 0 0 1-2.22-2.76c-.24-.4-.02-.62.18-.82.18-.18.4-.46.6-.7.2-.22.26-.4.4-.66.14-.26.06-.5-.04-.7-.1-.2-.88-2.12-1.2-2.9-.32-.76-.64-.66-.88-.68h-.76c-.26 0-.7.1-1.06.5-.36.4-1.38 1.36-1.38 3.3s1.42 3.82 1.62 4.08c.2.26 2.78 4.24 6.72 5.94.94.4 1.68.66 2.24.84.94.3 1.8.26 2.48.16.76-.12 2.36-.96 2.68-1.9.34-.92.34-1.72.24-1.9-.1-.16-.36-.26-.76-.46Z"
            fill="currentColor"
        />
    </svg>
)

export const WhatsAppChatButton = () => {
    const { urls } = usePage().props

    return (
        <aside
            aria-label="HealthBubba WhatsApp consultation"
            className="fixed bottom-5 right-2 z-[60] flex flex-col items-center gap-3 sm:bottom-8 sm:right-8"
        >
            <div
                id="whatsapp-chat-tooltip"
                role="tooltip"
                className="relative whitespace-nowrap rounded-lg bg-[#00b881] px-3 py-2 text-xs font-medium text-white shadow-[0_4px_16px_rgba(0,184,129,0.2)]"
            >
                Speak to a doctor
                <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-[#00b881]"
                />
            </div>
            <div className="relative">
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-6 top-3 h-10 w-5 text-[#00b881]"
                    fill="none"
                    viewBox="0 0 20 40"
                >
                    <path
                        d="M12 7 6 2M9 20H2M12 33l-6 5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="4"
                    />
                </svg>
                <a
                    href={urls.whatsapp}
                    aria-label="Speak to a doctor on WhatsApp"
                    aria-describedby="whatsapp-chat-tooltip"
                    className="flex size-14 items-center justify-center rounded-full bg-[#00cf68] text-white shadow-[0_10px_30px_rgba(0,207,104,0.35)] transition hover:-translate-y-0.5 hover:bg-[#00bd5f] hover:shadow-[0_12px_35px_rgba(0,207,104,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00cf68]/30 focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
                >
                    <WhatsAppIcon className="size-8" />
                </a>
            </div>
        </aside>
    )
}
