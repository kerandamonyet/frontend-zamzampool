'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path ? 'text-[#026EE8] font-semibold' : 'text-[#026EE8]';
    };

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-1">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white">
                                <img src="./logo.svg" alt="Logo" className="h-13 w-auto" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-7 items-center gap-3">
                        <Link href="/" className={isActive('/')}>
                            Beranda
                        </Link>
                        <Link href="/fasilitas" className={isActive('/fasilitas')}>
                            Fasilitas & Layanan
                        </Link>
                        <Link href="/tentang-kami" className={isActive('/tentang-kami')}>
                            Tentang Kami
                        </Link>
                        <Link href="/tiket-online" className={`bg-cover hover:bg-[#69aefd] bg-[#026EE8] p-1 px-5 border-none rounded-md text-white font-semibold shadow-xl ${pathname === '/tiket-online' ? 'bg-[#026EE8]' : ''}`}>
                            Tiket Online
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#026EE8] focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-5 pt-2 pb-3 space-y-3 sm:px-3">
                        <Link href="/" className={`block ${isActive('/')}`}>
                            Beranda
                        </Link>
                        <Link href="/fasilitas" className={`block ${isActive('/fasilitas')}`}>
                            Fasilitas & Layanan
                        </Link>
                        <Link href="/tentang-kami" className={`block ${isActive('/tentang-kami')}`}>
                            Tentang Kami
                        </Link>
                        <Link href="/tiket-online" className={`block bg-[#026EE8] hover:bg-[#69aefd] text-white text-center p-2 rounded-md font-bold ${pathname === '/tiket-online' ? 'bg-[#1a85ff]' : ''}`}>
                            Tiket Online
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
