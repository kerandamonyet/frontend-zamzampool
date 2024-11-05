'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios'; // Import axios


export default function BayarPage() {
    const MySwal = withReactContent(Swal)

    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        phone: '',
        ticket_count: 1, // Initialize ticket count
        entry_date: '',
        ticket_type: ''
    });
    
    const [value, onChange] = useState(new Date());
    const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
    const [errors, setErrors] = useState({});
    const [pending, setPending] = useState(false);
    const [datepickerInitialized, setDatepickerInitialized] = useState(false);
    const router = useRouter(); // Initialize useRouter

    const TICKET_PRICES = {
        premium: 30000, // Price for premium ticket
        reguler: 18000  // Price for regular ticket
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
        calculateTotalPrice(value, formState.ticket_count); // Recalculate total price
    };

    const handleTicketCountChange = (delta) => {
        setFormState((prev) => ({
            ...prev,
            ticket_count: Math.max(1, prev.ticket_count + delta)
        }));
        calculateTotalPrice(formState.ticket_type, formState.ticket_count + delta); // Recalculate total price
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
            const response = await axios.post('http://localhost:5000/api/tickets/', requestData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (response.status === 200) {
                const data = response.data;
                window.location.href = data.data.redirect_url;
            } else {
                setErrors({ general: 'Checkout failed' });
    
                // Menampilkan alert error jika response dari server tidak berhasil
                MySwal.fire({
                    icon: 'error',
                    title: 'Gagal Submit',
                    text: response.data.message || 'Terjadi kesalahan saat memproses data Anda',
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

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-2">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Pembayaran
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow-md rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className= 'bg-gradient-to-r from-cyan-500 to-blue-500  p-4 rounded'>
                        <h3 className="text-left text-2xl font-bold leading-9 tracking-tight text-white">
                            Detail Pemesanan
                        </h3>
                        <p className="text-left font-bold leading-9 tracking-tight">
                            Order id : kajkdjksajd
                        </p>
                    </div>

                    <div className='mt-6'>
                        <table className='table-auto'>
                            <tbody>
                                {/* <tr>
                                    <td className='px-4 py-2 text-black font-bold text-end'>
                                        Order ID: 
                                    </td>
                                    <td className='px-4 py-2 text-black font-bold'>
                                        :
                                    </td>
                                    <td className='px-4 py-2 text-black text-start'>
                                        PRE782313213
                                    </td>
                                </tr> */}
                                <tr>
                                    <td className='px-4 py-2 text-black font-bold text-end'>
                                        Nama Pemesan 
                                    </td>
                                    <td className='px-4 py-2 text-black font-bold'>
                                        :
                                    </td>
                                    <td className='px-4 py-2 text-black text-start'>
                                        Jajang
                                    </td>
                                </tr>
                                <tr>
                                    <td className='px-4 py-2 text-black font-bold text-end'>
                                        Email 
                                    </td>
                                    <td className='px-4 py-2 text-black font-bold'>
                                        :
                                    </td>
                                    <td className='px-4 py-2 text-black text-start'>
                                        Jajang@gmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td className='px-4 py-2 text-black font-bold text-end'>
                                        Nomor Whatsapp 
                                    </td>
                                    <td className='px-4 py-2 text-black font-bold'>
                                        :
                                    </td>
                                    <td className='px-4 py-2 text-black text-start'>
                                        Jajang@gmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td className='px-4 py-2 text-black font-bold text-end'>
                                        Tanggal Masuk 
                                    </td>
                                    <td className='px-4 py-2 text-black font-bold'>
                                        :
                                    </td>
                                    <td className='px-4 py-2 text-black text-start'>
                                        01-11-2024
                                    </td>
                                </tr>
                                <tr>
                                    <td className='px-4 py-2 text-black font-bold text-end'>
                                        Jenis Tiket
                                    </td>
                                    <td className='px-4 py-2 text-black font-bold'>
                                        :
                                    </td>
                                    <td className='px-4 py-2 text-black text-start'>
                                        Premium
                                    </td>
                                </tr>
                                <tr>
                                    <td className='px-4 py-2 text-black font-bold text-end'>
                                        Jumlah Tiket
                                    </td>
                                    <td className='px-4 py-2 text-black font-bold'>
                                        :
                                    </td>
                                    <td className='px-4 py-2 text-black text-start'>
                                        1 Pcs
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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