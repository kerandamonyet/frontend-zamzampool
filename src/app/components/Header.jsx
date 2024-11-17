"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white inset-x-0 top-0 z-50 fixed">
        <div className="bg-white">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Zamzampool</span>
                <Image
                  className="h-8 w-auto"
                  src="/logo-zamzampol.jpeg"
                  alt="Logo of Zamzampool"
                  sizes="100vw"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link
                href="/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Beranda
              </Link>
              <Link
                href="/fasilitas"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Fasilitas & Layanan
              </Link>
              <Link
                href="/tentang-kami"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Tentang Kami
              </Link>
              <Link
                href="/tiket-online"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Tiket Online
              </Link>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div
                className="fixed inset-0 z-50"
                onClick={() => setMobileMenuOpen(false)}
              />
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Zamzampool</span>
                    <Image
                      src="/logo-zamzampol.jpeg"
                      alt="logo zamzampool"
                      sizes="100vw"
                      width={100}
                      height={100}
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    aria-label="Close menu"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Beranda
                      </Link>
                      <Link
                        href="/fasilitas"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Fasilitas & Layanan
                      </Link>
                      <Link
                        href="/tentang-kami"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Tentang Kami
                      </Link>
                      <Link
                        href="/tiket-online"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Tiket Online
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;