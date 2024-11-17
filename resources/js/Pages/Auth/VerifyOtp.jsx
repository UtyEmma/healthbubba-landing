import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Button from '@/Components/Button';
import AuthLayout from '@/Layouts/AuthLayout';

export default function ({email}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email,
        otp: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('verify-otp.store'));
    };

    return (
        <AuthLayout>
            <Head title='Verify Email Address' />
            <form onSubmit={submit} className="md:p-10 p-5 shadow-xl border rounded-2xl space-y-5">
                <div className="text-center">
                    <h2 class={'font-semibold text-xl md:text-2xl'}>Verify your Email Address</h2>
                    <p class={'text-muted text-sm md:text-base'}>Your account has been created successfully. Please provide the token sent to your <span className='text-primary'>{email}</span> below to verify your account.</p>
                </div>

                <div className='space-y-1'>
                    <input value={data.otp} onChange={(e) => setData('otp', e.target.value)} className='form-control text-center text-xl placeholder:text-base placeholder:tracking-normal font-medium tracking-widest' placeholder='Enter Email Token' />
                </div>
                <div>
                    <Button class={'btn w-full btn-primary'}>Verify Email Address</Button>
                </div>
            </form>
        </AuthLayout>
    );
}
