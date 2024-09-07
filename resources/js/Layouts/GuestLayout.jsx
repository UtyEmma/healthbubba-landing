import { Header } from './Partials/Header';
import { Footer } from './Partials/Footer';
import { createContext, useState } from 'react';
import DownloadModal from './Partials/DownloadModal';
import { ScrollToTop } from './Partials/ScrollToTop';
import CartContext from '@/Context/CartContext';
import { Toaster } from 'react-hot-toast';

export const DownloadContext = createContext({
    status: false,
    open: () => {},
    close: () => {}
})

export default function ({ children, hideGap = false, ...props }) {

    const [download, setDownload] = useState(false)

    return (

        <CartContext>
            <DownloadContext.Provider value={{
                status: download,
                open: () => setDownload(true),
                close: () => setDownload(false)
            }}>
                <div className={`min-h-screen relative pt-28 ${props.className ?? ''}`}>

                    <main className={hideGap ? '' : 'md:py-10 py-5'}>
                        <Header />
                        
                        {children}
                    </main>

                    <Footer />


                    <ScrollToTop />
                    <DownloadModal />

                    <Toaster
                        position='top-right'
                        class='flex w-auto'
                    />
                </div>
            </DownloadContext.Provider>
        </CartContext>
    );
}
