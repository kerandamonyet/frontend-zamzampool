import Link from "next/link";
import React from "react";

function GoToTicketPageButton() {
  return (
    <div className="flex justify-center mt-4">
      <Link
        href="/tiket-online"
        className="alive alive-back inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
        prefetch={false}
      >
        Kembali ke halaman pemesanan
      </Link>
    </div>
  );
}

export default GoToTicketPageButton;
