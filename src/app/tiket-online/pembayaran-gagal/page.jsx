'use client';

import Link from "next/link";

export default function FailedPaymentPage() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex flex-col items-center">
              <FailedIcon className="text-red-500 h-16 w-16" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">Pembayaran Gagal</h1>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Silahkan Coba Lagi
                </p>
              </div>
              {/* <div className="flex justify-between">
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Jangan lupa untuk mengecek secara berkala e-email anda pada.
                </p>
              </div> */}
            </div>
            <div className="flex justify-center">
              <Link
                href="/tiket-online"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                prefetch={false}
              >
                Kembali ke halaman pemesanan
              </Link>
            </div>
          </div>
        </div>
      )
    }

    function FailedIcon(props) {
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
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      )
    }
