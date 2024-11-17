import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Button from '@/Components/Button';
import { PlayIcon } from '@heroicons/react/24/solid';
import AuthLayout from '@/Layouts/AuthLayout';

export default function () {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const login = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <AuthLayout>
            <Head title='Login' />
            <form onSubmit={login} className="md:p-10 p-5 shadow-xl border rounded-2xl space-y-5">
                <div className="text-center">
                    <h2 class={'font-semibold text-xl md:text-2xl'}>Log into your Account</h2>
                    <p class={'text-muted text-sm md:text-base'}>Book appointment, Order Lab Test and Manage Prescription</p>
                </div>

                <div className='space-y-1'>
                    <label class={'font-medium'}>Email Address</label>
                    <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} class={'form-control'} placeholder='Email Address' />
                </div>

                <div className='space-y-1'>
                    <label class={'font-medium'}>Password</label>
                    <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} class={'form-control'} placeholder='Password' />
                </div>

                <div>
                    <Button class={'btn w-full btn-primary'}>Login</Button>
                </div>

                <div className="text-center">
                    <p className='text-sm text-muted'>Don't have an account? <Link className='text-primary' href={route('register')}>Register</Link></p>
                </div>
            </form>
        </AuthLayout>
    );
}
