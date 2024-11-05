'use client';

import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function TicketOnlinePage() {
    const MySwal = withReactContent(Swal);

    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        phone: '',
        ticket_count: 0, // Initialize ticket count
        entry_date: '',
        ticket_type: ''
    });

    const [value, onChange] = useState(new Date());
    const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
    const [errors, setErrors] = useState({});
    const [pending, setPending] = useState(false);
    const [datepickerInitialized, setDatepickerInitialized] = useState(false);

    const TICKET_PRICES = {
        premium: 30000, // Price for premium ticket
        reguler: 18000  // Price for regular ticket
    };

    useEffect(() => {
        if (formState.ticket_type) {
            calculateTotalPrice(formState.ticket_type, formState.ticket_count);
        }
    }, [formState.ticket_type, formState.ticket_count]);

    const handleChangeTypeTicket = (ticketType) => {
        setFormState((prev) => ({
            ...prev,
            ticket_type: ticketType,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTicketCountChange = (delta) => {
        setFormState((prev) => {
            const newCount = Math.max(1, prev.ticket_count + delta);
            return {
                ...prev,
                ticket_count: newCount,
            };
        });
    };

    const calculateTotalPrice = (ticketType, ticketCount) => {
        if (ticketType in TICKET_PRICES) {
            const price = TICKET_PRICES[ticketType];
            setTotalPrice(price * ticketCount);
        } else {
            setTotalPrice(0);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);
        setErrors({});

        let newErrors = {};
        if (!formState.fullName) newErrors.fullName = 'Full Name is required';
        if (!formState.email) newErrors.email = 'Email is required';
        if (!formState.phone || !/^08\d{8,10}$/.test(formState.phone)) {
            newErrors.phone = 'Phone must be a valid Indonesian number starting with 08';
        }
        if (!formState.ticket_type) newErrors.ticket_type = 'Ticket Type is required';
        if (!value) newErrors.entry_date = 'Entry Date is required';
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

        const formattedDate = value.toISOString().split('T')[0];
        const requestData = {
            name: formState.fullName,
            email: formState.email,
            phone: formState.phone,
            entry_date: formattedDate,
            ticket_type: formState.ticket_type,
            ticket_count: formState.ticket_count,
            gross_amount: totalPrice
        };

        try {
            const response = await fetch(`http://localhost:5000/api/tickets/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            });

            if (response.ok) {
                const data = await response.json();
                // Redirect to Midtrans Snap for payment
                window.snap.pay(data.transaction_token, {
                    onSuccess: (result) => {
                        console.log('Payment success:', result);
                        // Redirect to success page or perform other actions
                        window.location.href = '/tiket-online/pembayaran-berhasil';

                    },
                    onPending: (result) => {
                        console.log('Payment pending:', result);
                        // Handle pending state if needed

                    },
                    onError: (result) => {
                        console.error('Payment error:', result);
                        // Handle error state if needed
                        window.location.href = '/tiket-online/pembayaran-gagal';
                    },
                    onClose: () => {
                        console.log('Payment popup closed');
                        // Handle popup close if needed

                    }
                });
            } else {
                const errorData = await response.json();
                setErrors({ general: 'Checkout failed' });
            
                // Menampilkan alert error jika response dari server tidak berhasil
                MySwal.fire({
                    icon: 'error',
                    title: 'Gagal Submit',
                    text: errorData.message || 'Terjadi kesalahan saat memproses data Anda',
                });
            }
            
        } catch (error) {
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

    // Initialize datepicker in useEffect
    useEffect(() => {
        if (typeof document !== 'undefined' && !datepickerInitialized) {
            // Ensure to call your datepicker initialization here
            // For example: FlowbiteDatepicker.init();
            setDatepickerInitialized(true);
        }
    }, [datepickerInitialized]);

    // Load Midtrans Snap script
    useEffect(() => {
        const snapScript = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const clientKey = process.env.MIDTRANS_CLIENT_KEY;
        const script = document.createElement('script');

        script.src = snapScript;
        script.setAttribute('data-client-key', clientKey);
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-2">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Tiket Online
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow-md rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded'>
                        <h3 className="text-left text-2xl font-bold leading-9 tracking-tight text-white">
                            Detail Tagihan
                        </h3>
                    </div>

                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900">
                            Nama Lengkap
                        </label>
                        <div className="mt-2">
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                value={formState.fullName}
                                placeholder='Budiono Siregar'
                                onChange={handleChange}
                                className={`block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 
                                            ${errors.fullName ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
                            />
                            {errors.fullName && <p className="text-red-600 mt-2">{errors.fullName}</p>}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900">
                            Email Address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder='example@gmail.com'
                                autoComplete="email"
                                value={formState.email}
                                onChange={handleChange}
                                className={`block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 
                                            ${errors.email ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
                            />
                            {errors.email && <p className="text-red-600 mt-2">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900">
                            Nomor Whatsapp
                        </label>
                        <div className="mt-2">
                            <input
                                id="phone"
                                name="phone"
                                type="text" // Changed to 'text' to allow leading zero
                                required
                                placeholder='08xxxxxxxx'
                                value={formState.phone}
                                onChange={handleChange}
                                className={`block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 
                                            ${errors.phone ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
                            />
                            {errors.phone && <p className="text-red-600 mt-2">{errors.phone}</p>}
                        </div>
                    </div>

                    {/* Datepicker */}
                    <div className="relative max-w-sm">
                        <div className=''>
                            <label htmlFor="entry_date" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900">
                                Tanggal Masuk
                            </label>
                        </div>
                        <Calendar
                            className="mt-3 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            onChange={onChange}
                            value={value}
                        />
                    </div>

                    {/* Ticket Type */}
                    <div>
                        <label htmlFor="ticket_type" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900">
                            Jenis Tiket
                        </label>
                        <div className="flex space-x-2 mt-3">
                            <button
                                type="button"
                                className={`flex-1 py-1.5 px-3 rounded-md shadow-sm ${
                                    formState.ticket_type === 'premium' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900 border'
                                }`}
                                onClick={() => handleChangeTypeTicket('premium')}
                            >
                                Premium
                            </button>
                            <button
                                type="button"
                                className={`flex-1 py-1.5 px-3 rounded-md shadow-sm ${
                                    formState.ticket_type === 'reguler' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900 border'
                                }`}
                                onClick={() => handleChangeTypeTicket('reguler')}
                            >
                                Reguler
                            </button>
                        </div>
                        <input type="hidden" name="ticket_type" value={formState.ticket_type} />
                        {errors.ticket_type && <p className="text-red-600 mt-2">{errors.ticket_type}</p>}
                    </div>

                    {/* Ticket Count */}
                    <div>
                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900">
                            Jumlah Tiket
                        </label>
                        <div className="flex items-center space-x-4 mt-2">
                            <button
                                type="button"
                                onClick={() => handleTicketCountChange(-1)}
                                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                            >
                                -
                            </button>
                            <span className="text-lg text-black">{formState.ticket_count}</span>
                            <button
                                type="button"
                                onClick={() => handleTicketCountChange(1)}
                                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                            >
                                +
                            </button>
                        </div>
                        {errors.ticket_count && <p className="text-red-600 mt-2">{errors.ticket_count}</p>}
                    </div>

                    {/* Total Price */}
                    <div className="mt-6 flex">
                        <label className="flex-1 block text-sm font-medium leading-6 text-gray-900">
                            Total Harga
                        </label>
                        <div className=" flex-1">
                            <input
                                type="text"
                                readOnly
                                value={`Rp ${totalPrice.toLocaleString('id-ID')}`}
                                className="block w-full border-none py-1.5 text-success lg:text-lg"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={pending}
                            className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                                        ${pending ? 'opacity-50 cursor-not-allowed' : ''} hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                            {pending ? 'Processing...' : 'Bayar Sekarang'}
                        </button>
                    </div>

                    {/* Display General Errors */}
                    {errors.general && <p className="text-red-600 mt-2">{errors.general}</p>}
                </form>
            </div>            
        </div>
    );
}
