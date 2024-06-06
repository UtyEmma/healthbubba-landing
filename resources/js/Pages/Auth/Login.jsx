import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import Button from '@/Components/Button';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <GuestLayout >

            <div className="py-20">
                <div className="w-1/3 mx-auto">
                    <div className="p-5 py-10 shadow border rounded-xl space-y-5">
                        <div className="text-center">
                            <h2 class={'font-semibold text-2xl'}>Create and Account</h2>
                            <p>Book appointment, Order Lab Test and Manage Prescription</p>
                        </div>

                        <div>
                            <label class={'font-medium mb-2'}>Email Address</label>
                            <input type="text" class={'shadow w-full rounded-md border-gray-100'} placeholder='Email Address' />
                        </div>

                        <div>
                            <label class={'font-medium mb-2'}>Password</label>
                            <input type="password" class={'shadow w-full rounded-md border-gray-100'} placeholder='Email Address' />
                        </div>

                        <div>
                            <label class={'font-medium mb-2'}>Confirm Password</label>
                            <input type="password" class={'shadow w-full rounded-md border-gray-100'} placeholder='Email Address' />
                        </div>

                        <div>
                            <Button class={'w-full btn-primary'}>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>

            </GuestLayout>
        </>
    );
}
