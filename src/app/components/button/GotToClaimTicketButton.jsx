import Link from "next/link";
import React from "react";
import "../../styles/style.css"

function GotToClaimTicketButton() {
  return (
    <div>
      <Link
        href="/tiket-online/klaim-tiket"
        className="alive alive-klaim flex w-full justify-center rounded-md bg-success px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Klaim Tiket
      </Link>
    </div>
  );
}

export default GotToClaimTicketButton;
