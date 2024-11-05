'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function SuccessPaymentPage() {
    const MySwal = withReactContent(Swal);
    const [formState, setFormState] = useState({
        orderId: '',
    });
    const [pending, setPending] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);
        setErrors({});

        let newErrors = {};
        if (!formState.orderId) newErrors.orderId = 'Order ID is required';
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setPending(false);

            // Show error alert if the form is incomplete
            MySwal.fire({
                icon: 'error',
                title: 'Form tidak lengkap',
                text: 'Harap lengkapi semua field yang diperlukan',
            });
            return;
        }

        const requestData = {
            orderId: formState.orderId,
        };

        try {
            const response = await fetch(`http://localhost:5000/api/tickets/${formState.orderId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                const data = await response.json();
                MySwal.fire({
                    icon: 'success',
                    title: 'Order found',
                    text: 'Tiket masuk sudah dikirim ke email anda.',
                });
                
            } else {
                const errorData = await response.json();
                MySwal.fire({
                    icon: 'error',
                    title: 'Gagal Submit',
                    text: errorData.message || 'Terjadi kesalahan saat memproses data Anda',
                });
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Network Error',
                text: 'Tidak dapat terhubung ke server. Coba lagi nanti.',
            });
        } finally {
            setPending(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex flex-col items-center">
                    <CircleCheckIcon className="text-green-500 h-16 w-16" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">Pembayaran Berhasil</h1>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
                    <div className="flex justify-between">
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Terima Kasih atas pembayaran nya, silahkan masukan <span className="font-bold text-black">ID Pesanan</span> berikut agar QR-code bisa dikirimkan ke email anda.
                        </p>
                    </div>

                    {/* Form Order Id */}
                    <form onSubmit={handleSubmit}>
                        <table className="table border-none justify-between ">
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="orderId" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm leading-6 text-black font-bold">
                                            ID Pesanan
                                        </label>
                                    </td>
                                    <td>
                                        <p className="text-black font-bold">:</p>
                                    </td>
                                    <td>
                                        <input
                                            id="orderId"
                                            name="orderId"
                                            type="text"
                                            required
                                            value={formState.orderId}
                                            onChange={handleChange}
                                            className={`block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 
                                                ${errors.orderId ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {errors.orderId && <p className="text-red-600 mt-2">{errors.orderId}</p>}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Button Submit */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={pending}
                                className={`flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                                    ${pending ? 'opacity-50 cursor-not-allowed' : 'Kirim'} hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                            >
                                {pending ? 'Processing...' : 'Kirim'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Link go to tiket online page */}
                <div className="flex justify-center mt-4">
                    <Link
                        href="/tiket-online"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                        prefetch={false}
                    >
                        Kembali ke halaman pemesanan
                    </Link>
                </div>
            </div>
        </div>
    );
}

function CircleCheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
