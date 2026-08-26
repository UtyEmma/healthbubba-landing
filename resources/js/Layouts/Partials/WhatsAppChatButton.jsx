import Button from '@/Components/Button'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { usePage } from '@inertiajs/react'
import { useContext, useEffect, useRef } from 'react'
import { DownloadContext } from '../GuestLayout'

const WhatsAppIcon = ({ className = '' }) => (
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
    const widgetRef = useRef(null)

    const {urls} = usePage().props

    const {whatsapp, setWhatsApp} = useContext(DownloadContext)

    useEffect(() => {
        if(window.sessionStorage.getItem('VISITOR_TYPE')) {
            setWhatsApp(true)
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setWhatsApp(false)
            }
        }

        const handlePointerDown = (event) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target)) {
                setWhatsApp(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('pointerdown', handlePointerDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('pointerdown', handlePointerDown)
        }
    }, [])

    return (
        <aside
            ref={widgetRef}
            aria-label="HealthBubba Whatsapp consultation"
            className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8"
        >
            {whatsapp && (
                <div
                    id="whatsapp-registration-popover"
                    role="dialog"
                    aria-labelledby="whatsapp-registration-title"
                    className="relative rounded-2xl border border-gray-100 bg-white p-3 pr-2 shadow-[0_12px_35px_rgba(0,0,0,0.16)]"
                >
                    <span
                        aria-hidden="true"
                        className="absolute -bottom-2 right-6 size-4 rotate-45 border-b border-r border-gray-100 bg-white"
                    />
                    <button
                        type="button"
                        aria-label="Close registration help"
                        onClick={() => setWhatsApp(false)}
                        className="absolute right-3 top-3 rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        <XMarkIcon className="size-5" />
                    </button>

                    <div className="pr-8 mb-4">
                        <h2 id="whatsapp-registration-title" className="text-base font-bold leading-tight text-gray-900">
                            Need medical help?
                        </h2>
                        <p className="mt-1 text-sm leading-5 text-muted">
                            Speak to a doctor on WhatsApp.
                        </p>
                    </div>

                    <a href={urls.whatsapp} target='__blank' className='pt-2'>
                        <Button className='btn-primary py-2 w-full '>
                            Get Started
                        </Button>
                    </a>
                </div>
            )}

            <button
                type="button"
                aria-label={whatsapp ? 'Close registration help' : 'Open registration help'}
                aria-expanded={whatsapp}
                aria-controls="whatsapp-registration-popover"
                onClick={() => setWhatsApp((open) => !open)}
                className="flex size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.38)] transition hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-[0_12px_30px_rgba(37,211,102,0.48)] focus-visible:ring-4 focus-visible:ring-[#25D366]/30 focus-visible:ring-offset-2 active:translate-y-0"
            >
                <WhatsAppIcon className="size-9" />
            </button>
        </aside>
    )
}
