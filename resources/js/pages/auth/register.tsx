import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { TextField } from '@/components/ui/text-field';
import { Label } from '@/components/ui/field';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <TextField
                            id="name"
                            type="text"
                            isRequired
                            autoFocus
                            autoComplete="name"
                            value={data.name}
                            onChange={(value) => setData('name', value)}
                            isDisabled={processing}
                            placeholder="Full name"
                            errorMessage={errors.name}
                            aria-label="Full name"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <TextField
                            id="email"
                            type="email"
                            isRequired
                            autoComplete="email"
                            value={data.email}
                            onChange={(value) => setData('email', value)}
                            isDisabled={processing}
                            placeholder="email@example.com"
                            errorMessage={errors.email}
                            aria-label="Email address"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <TextField
                            id="password"
                            type="password"
                            isRequired
                            isRevealable
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(value) => setData('password', value)}
                            isDisabled={processing}
                            placeholder="Password"
                            errorMessage={errors.password}
                            aria-label="Password"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirm password</Label>
                        <TextField
                            id="password_confirmation"
                            type="password"
                            isRequired
                            isRevealable
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(value) => setData('password_confirmation', value)}
                            isDisabled={processing}
                            placeholder="Confirm password"
                            errorMessage={errors.password_confirmation}
                            aria-label="Password Confirmation"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="mt-2 w-full"
                        isDisabled={processing}
                    >
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Already have an account?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
