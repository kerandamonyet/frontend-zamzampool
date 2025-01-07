import Link from "next/link";
import React from "react";

function GotToClaimTicketButton() {
  return (
    <div>
      <Link
        href="/tiket-online/klaim-tiket"
        className="py-3 text-[12px] alive alive-klaim flex w-full justify-center rounded-md bg-success text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        KLAIM TIKET
      </Link>
    </div>
  );
}

export default GotToClaimTicketButton;
