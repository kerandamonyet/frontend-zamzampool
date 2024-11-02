'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
require('dotenv').config();

export default function LoginPage() {
    const jwtSecret = process.env.JWT_SECRET;
    const MySwal = withReactContent(Swal)
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [pending, setPending] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter(); // Initialize useRouter

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);
        setErrors({});

        // Validasi data (email dan password)
        let newErrors = {};
        if (!formState.email) {
            newErrors.email = 'Email is required';
        }
        if (!formState.password) {
            newErrors.password = 'Password is required';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setPending(false);
             // Menampilkan alert error jika ada error dalam form
             MySwal.fire({
                icon: 'error',
                title: 'Form tidak lengkap',
                text: 'Harap lengkapi semua field yang diperlukan',
            });
            return;
        }
        

        const requestData = {
            email: formState.email,
            password: formState.password,
        };

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                localStorage.setItem('jwt token', data.jwtSecret); // Assuming 'token' is the key
                router.push('/admin/dashboard'); // Redirect to /dashboard
            } else {
                const errorData = await response.json();
                setErrors(errorData.errors || { general: 'Login failed' });
                // Menampilkan alert error jika response dari server tidak berhasil
                MySwal.fire({
                    icon: 'error',
                    title: 'Gagal Submit',
                    text: errorData.message || 'Terjadi kesalahan saat memproses data Anda',
                });
            }
        } catch (error) {
            console.error('Error logging in:', error);
            // Menampilkan alert error jika terjadi kesalahan jaringan atau server
            MySwal.fire({
                icon: 'error',
                title: 'Network Error',
                text: 'Tidak dapat terhubung ke server. Coba lagi nanti.',
            });
            setErrors({ general: 'Network error' });
        } finally {
            setPending(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow-md rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={formState.email}
                                onChange={handleChange}
                                className={`block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 
                                            ${errors.email ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
                            />
                            {errors.email && <p className="text-red-600 mt-2">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                autoComplete="current-password"
                                value={formState.password}
                                onChange={handleChange}
                                className={`block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 
                                            ${errors.password ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                            {errors.password && <p className="text-red-600 mt-2">{errors.password}</p>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            disabled={pending}
                        >
                            {pending ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
