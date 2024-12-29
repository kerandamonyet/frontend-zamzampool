'use client';

import React, { useState, useEffect } from 'react';
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
        ticket_count: 1,
        ticket_type: '',
    });

    const [calendarDate, setCalendarDate] = useState(null); // Start as null to avoid mismatches
    const [totalPrice, setTotalPrice] = useState(0); // Initialize with a safe value
    const [errors, setErrors] = useState({});
    const [isHydrated, setIsHydrated] = useState(false); // Check hydration state

    const TICKET_PRICES = {
        reguler: 15000,
        premium: 30000,
    };

    useEffect(() => {
        // Set hydration state to true when the client has mounted
        setIsHydrated(true);
        setCalendarDate(new Date()); // Safely initialize the calendar date on the client
        calculateTotalPrice(formState.ticket_type, formState.ticket_count); // Initialize total price
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));

        if (name === 'ticket_type') {
            calculateTotalPrice(value, formState.ticket_count);
        }
    };

    const handleTicketCountChange = (delta) => {
        const newCount = Math.max(1, formState.ticket_count + delta);
        setFormState((prev) => ({ ...prev, ticket_count: newCount }));
        calculateTotalPrice(formState.ticket_type, newCount);
    };

    const calculateTotalPrice = (ticketType, ticketCount) => {
        if (ticketType in TICKET_PRICES) {
            setTotalPrice(TICKET_PRICES[ticketType] * ticketCount);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!formState.fullName) newErrors.fullName = 'Nama Lengkap wajib diisi.';
        if (!formState.email) newErrors.email = 'Email wajib diisi.';
        if (!formState.phone) newErrors.phone = 'Nomor WhatsApp wajib diisi.';
        if (!formState.ticket_type) newErrors.ticket_type = 'Pilih jenis tiket.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            MySwal.fire({
                icon: 'error',
                title: 'Form Tidak Lengkap!',
                text: 'Silahkan lengkapi field yang diperlukan',
            });
            return;
        }

        MySwal.fire({
            icon: 'success',
            title: 'Pesanan berhasil',
            text: 'Pesanan tiket Anda telah diproses.',
        });
    };

    if (!isHydrated) {
        // Render nothing until hydration is complete
        return null;
    }

    return (
        <div className="bg-white flex items-center justify-center py-12 pb-24">
            <div className="w-full max-w-7xl bg-white p-8">
                <h2 className="text-[14px] font-medium text-[#026EE8]">
                    PEMESANAN TIKET ONLINE ZAM-ZAM POOL
                </h2>
                <h3 className="text-[32px] font-bold text-[#026EE8] mt-2 leading-8 lg:leading-10">
                    Kolam Renang Nyaman untuk <br />Liburan Keluarga
                </h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <h4 className="text-xl font-bold text-black">Detail Tagihan</h4>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nama Lengkap <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formState.fullName}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 placeholder-opacity-25"
                                placeholder="Masukkan Nama Lengkap"
                            />
                            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pb-12">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Alamat E-Mail <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 placeholder-opacity-25"
                                placeholder="Masukkan E-Mail Anda"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* WhatsApp */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                WhatsApp <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 placeholder-opacity-25"
                                placeholder="Masukkan Nomor Whatsapp Anda"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                    </div>

                    <h4 className="text-xl font-bold text-black">Tiket Tersedia</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Calendar */}
                        <div>
                            <label className="block text-sm font-medium text-black">
                                Tanggal Masuk <span className="text-red-500">*</span>
                            </label>
                            <Calendar
                                onChange={setCalendarDate}
                                value={calendarDate}
                                className="mt-2 text-black"
                            />
                        </div>

                        {/* Ticket Type */}
                        <div className="">
                            <label className="block text-sm font-medium text-black">
                                Jenis Tiket <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-4 mt-2 h-12">
                                <button
                                    type="button"
                                    className={`w-full py-2 text-[12px] text-center rounded-md ${
                                        formState.ticket_type === 'reguler'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-700'
                                    }`}
                                    onClick={() => handleChange({ target: { name: 'ticket_type', value: 'reguler' } })}
                                >
                                    Tiket Reguler
                                </button>
                                <button
                                    type="button"
                                    className={`w-full py-2 text-[12px] text-center rounded-md ${
                                        formState.ticket_type === 'premium'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-700'
                                    }`}
                                    onClick={() => handleChange({ target: { name: 'ticket_type', value: 'premium' } })}
                                >
                                    Tiket Premium
                                </button>
                            </div>
                            {errors.ticket_type && <p className="text-red-500 text-sm">{errors.ticket_type}</p>}

                            {/* Total Price */}
                            <div className="flex justify-between items-center mt-6 py-4">
                                <span className="font-semibold text-black text-[14px]">Harga Total:</span>
                                <span className="text-xl font-bold text-green-500">
                                    Rp {totalPrice.toLocaleString('id-ID')}
                                </span>
                            </div>

                            {/* Ticket Count */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex items-center mt-2 pt-5">
                                <button
                                    type="button"
                                    onClick={() => handleTicketCountChange(-1)}
                                    className="px-4 py-2 bg-[#be3535] rounded-md"
                                >
                                    -
                                </button>
                                <span className="text-lg text-black px-4 rounded-xl">{formState.ticket_count}</span>
                                <button
                                    type="button"
                                    onClick={() => handleTicketCountChange(1)}
                                    className="px-4 py-2 bg-[#37b141] rounded-md"
                                >
                                    +
                                </button>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-6 w-full py-3 bg-[#026EE8] text-white font-bold text-[12px] rounded-md hover:bg-blue-700"
                            >
                                CHECKOUT
                            </button>
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
