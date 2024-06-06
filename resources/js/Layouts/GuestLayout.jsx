import { Link } from '@inertiajs/react';
import { Header } from './Partials/Header';
import { Footer } from './Partials/Footer';

export default function ({ children, ...props }) {
    return (
        <div className={`min-h-screen ${props.className ?? ''}`}>
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
}
