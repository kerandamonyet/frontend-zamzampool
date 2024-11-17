"use client";

import GoToTicketPageButton from "@/app/components/button/GoToTicketPageButton";
import Link from "next/link";

export default function FailedPaymentPage() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <img src="/icon/failed.gif" alt="Gagal" className="h-28 w-28" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">
            Pembayaran Gagal
          </h1>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
          <div className="text-center mb-8">
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

        {/* Link go to tiket online page */}
        <GoToTicketPageButton />
      </div>
    </div>
  );
}
