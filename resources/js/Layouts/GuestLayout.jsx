import { Link } from '@inertiajs/react';
import { Header } from './Partials/Header';
import { Footer } from './Partials/Footer';
import DownloadQR from '@/Components/QRCodes/DownloadQR';
import Button from '@/Components/Button';
import Disclose from '@/Components/Display/Disclose';
import { createContext, useState } from 'react';
import DownloadModal from './Partials/DownloadModal';
import { CartModal } from './Partials/CartModal';
import { ScrollToTop } from './Partials/ScrollToTop';

export const DownloadContext = createContext({
    status: false,
    open: () => {},
    close: () => {}
})

export default function ({ children, ...props }) {

    const [download, setDownload] = useState(false)

    return (

        <DownloadContext.Provider value={{
            status: download,
            open: () => setDownload(true),
            close: () => setDownload(false)
        }}>
            <div className={`min-h-screen ${props.className ?? ''}`}>
                <Header />

                <main class='md:py-10 py-5'>
                    {children}
                </main>

                <Footer />


                <ScrollToTop />
                <DownloadModal />

                <CartModal />
            </div>
        </DownloadContext.Provider>
    );
}
