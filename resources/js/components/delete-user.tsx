import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { TextField } from '@/components/ui/text-field';
import { Label } from '@/components/ui/field';
import { Modal } from '@/components/ui/modal';

import HeadingSmall from '@/components/heading-small';
import { Form } from './ui';

export default function DeleteUser() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const { data, setData, delete: destroy, processing, reset, errors, clearErrors } = useForm<Required<{ password: string }>>({ password: '' });

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        clearErrors();
        reset();
    };

    return (
        <div className="space-y-6">
            <HeadingSmall title="Delete account" description="Delete your account and all of its resources" />
            <div className="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
                <div className="relative space-y-0.5 text-red-600 dark:text-red-100">
                    <p className="font-medium">Warning</p>
                    <p className="text-sm">Please proceed with caution, this cannot be undone.</p>
                </div>

                <Modal>
                    <Button intent="danger">Delete account</Button>
                    <Modal.Content isBlurred>
                        <Modal.Header>
                            <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
                            <Modal.Description>
                                Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password
                                to confirm you would like to permanently delete your account.
                            </Modal.Description>
                        </Modal.Header>
                        <Form onSubmit={deleteUser}>
                            <Modal.Body>
                                <div className="grid gap-2">
                                    <Label htmlFor="password" className="sr-only">
                                        Password
                                    </Label>

                                    <TextField
                                        id="password"
                                        type="password"
                                        isRequired
                                        isRevealable
                                        value={data.password}
                                        onChange={(value) => setData('password', value)}
                                        isDisabled={processing}
                                        placeholder="Password"
                                        errorMessage={errors.password}
                                        aria-label="Password"
                                    />
                                </div>
                            </Modal.Body>
                            <Modal.Footer className="justify-end">
                                <Modal.Close>Cancel</Modal.Close>
                                <Button intent="danger" type="submit">Delete Account</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        </div>
    );
}
