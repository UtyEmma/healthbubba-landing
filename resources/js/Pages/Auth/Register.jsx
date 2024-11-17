import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Button from '@/Components/Button';
import { PlayIcon } from '@heroicons/react/24/solid';
import Toast from '@/Components/Toast';
import AuthLayout from '@/Layouts/AuthLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
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
        post(route('register'), {
            onSuccess(){
                // router.visit()
            }
        });
    };

    return (
        <AuthLayout>
            <Head title='Register' />
            <form onSubmit={submit} className="md:p-10 p-5 shadow-xl border rounded-2xl space-y-5">
                <div className="text-center">
                    <h2 className={'font-semibold text-xl md:text-2xl'}>Create an Account</h2>
                    <p className={'text-muted text-sm md:text-base'}>Book appointment, Order Lab Test and Manage Prescription</p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className='space-y-1'>
                        <label className={'font-medium'}>First Name</label>
                        <input value={data.firstname} onChange={(e) => setData('firstname', e.target.value)} className={'form-control'} placeholder='First Name' />
                    </div>
                    
                    <div className='space-y-1'>
                        <label className={'font-medium'}>Last Name</label>
                        <input value={data.lastname} onChange={(e) => setData('lastname', e.target.value)} className={'form-control'} placeholder='Last Name' />
                    </div>

                </div>

                <div className='space-y-1'>
                    <label className={'font-medium'}>Email Address</label>
                    <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className={'form-control'} placeholder='Email Address' />
                </div>

                <div className='space-y-1'>
                    <label className={'font-medium'}>Password</label>
                    <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} className={'form-control'} placeholder='Password' />
                </div>

                {/* <div className='space-y-1'>
                    <label className={'font-medium'}>Confirm Password</label>
                    <input type="password" className={'form-control'} placeholder='Confirm Password' />
                </div> */}

                <div>
                    <Button className={'btn w-full btn-primary'}>Get Started <PlayIcon className={'text-white text-opacity-70 w-6 h-6'} /></Button>
                </div>

                <div className="text-center">
                    <p className='text-sm text-muted'>Already have an account? <Link className='text-primary' href={route('login')}>Login</Link></p>
                </div>
            </form>
        </AuthLayout>
    );
}
