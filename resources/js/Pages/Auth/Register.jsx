import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@/Components/Button';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 space-y-5 justify-center">
            <Head title='Register' />
            <div>
                <Link href={route('home')}>
                    <img src="/assets/imgs/logos/logo-long.svg" alt="" />
                </Link>
            </div>
            <div className="md:w-4/12">
                <div className="md:p-10 p-5 shadow-xl border rounded-2xl space-y-5">
                    <div className="text-center">
                        <h2 class={'font-semibold text-xl md:text-2xl'}>Create and Account</h2>
                        <p class={'text-muted text-sm md:text-base'}>Book appointment, Order Lab Test and Manage Prescription</p>
                    </div>

                    <div className='space-y-1'>
                        <label class={'font-medium'}>Email Address</label>
                        <input type="text" class={'form-control'} placeholder='Email Address' />
                    </div>

                    <div className='space-y-1'>
                        <label class={'font-medium'}>Password</label>
                        <input type="password" class={'form-control'} placeholder='Email Address' />
                    </div>

                    <div className='space-y-1'>
                        <label class={'font-medium'}>Confirm Password</label>
                        <input type="password" class={'form-control'} placeholder='Password' />
                    </div>

                    <div>
                        <Button class={'btn w-full btn-primary'}>Get Started <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
