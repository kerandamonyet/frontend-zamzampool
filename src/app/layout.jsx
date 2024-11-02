'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState for state management
import './globals.css';

export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const handleDirectionClick = () => {
    const gmapsURL = "https://maps.app.goo.gl/GTATW3gBTwVX4TXu7"; // Ganti dengan URL lokasi yang Anda inginkan
    window.open(gmapsURL, '_blank'); // Membuka Google Maps di tab baru
  };

  return (
    <html lang="en">
      <body>
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="bg-white">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Zamzampool</span>
                  <Image 
                    className="h-8 w-auto" 
                    src="/logo-zamzampol.jpeg" 
                    alt="Logo of Zamzampool" 
                    sizes="100vw" 
                    width={100} height={100} 
                  />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button 
                  type="button" 
                  onClick={() => setMobileMenuOpen(true)} // Open mobile menu
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  aria-controls="mobile-menu" // Added for accessibility
                  aria-expanded={mobileMenuOpen} // Indicate menu state
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">Beranda</Link>
                <Link href="/fasilitas" className="text-sm font-semibold leading-6 text-gray-900">Fasilitas</Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">Tentang kami</Link>
                <Link href="/tiket-online" className="text-sm font-semibold leading-6 text-gray-900">Tiket Online</Link>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50" onClick={() => setMobileMenuOpen(false)} /> {/* Clickable backdrop to close menu */}
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">Zamzampool</span>
                      <Image 
                        className="h-8 w-auto" 
                        src="/logo-zamzampol.jpeg" 
                        alt="Logo of Zamzampool" 
                        sizes="100vw" 
                        width={100} height={100} 
                      />                    
                    </Link>
                    <button 
                      type="button" 
                      onClick={() => setMobileMenuOpen(false)} // Close mobile menu
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      aria-label="Close menu" // Added for accessibility
                    >
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Beranda</Link>
                        <Link href="/fasilitas" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Fasilitas</Link>
                        <Link href="/tentang-kami" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Tentang Kami</Link>
                        <Link href="/tiket-online" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Tiket Online</Link>
                      </div>
                      <div className="py-6">
                        <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </header>

        <main>{children}</main>

        <footer className="footer footer-center bg-base-100 text-base-content p-10">
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Lokasi</h2>
                <p>Jl. Veteran BLOK PAKUWON DESA, Manislor, Kec. Jalaksana, Kabupaten Kuningan, Jawa Barat 45554, Indonesia</p>
                <div className="card-actions justify-end">
                  <button 
                    className="btn btn-warning"
                    onClick={handleDirectionClick}>
                      Petunjuk Arah
                    </button>
                </div>
            </div>
          </div>
        </footer>
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p className="text-neutral-content ">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
