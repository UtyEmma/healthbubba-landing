import { Link } from '@inertiajs/react';
import { Header } from './Partials/Header';
import { Footer } from './Partials/Footer';
import DownloadQR from '@/Components/QRCodes/DownloadQR';
import Button from '@/Components/Button';
import Disclose from '@/Components/Display/Disclose';
import { createContext, useState } from 'react';
import DownloadModal from './Partials/DownloadModal';

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

                <main class='py-10'>
                    {children}
                </main>

                <Footer />

                <DownloadModal />
            </div>
        </DownloadContext.Provider>
    );
}
