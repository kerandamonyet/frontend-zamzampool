"use client";

import React from "react";

function Footer() {
  const handleDirectionClick = () => {
    const gmapsURL = "https://maps.app.goo.gl/GTATW3gBTwVX4TXu7";
    window.open(gmapsURL, "_blank");
  };
  return (
    <>
      <footer className="footer footer-center bg-base-100 text-base-content p-10">
        <div className="card bg-neutral text-neutral-content w-97">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Lokasi</h2>
            <p>
              Jl. Veteran BLOK PAKUWON DESA, Manislor, Kec. Jalaksana, <br />
              Kabupaten Kuningan, Jawa Barat 45554, Indonesia
            </p>
            <div className="card-actions justify-end mt-5">
              <button
                className="alive alive-maps btn border-none bg-yellow-300 text-white font-bold hover:bg-yellow-200"
                onClick={handleDirectionClick}
              >
                Petunjuk Arah
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center bg-gray-500 text-base-content p-4">
        <aside>
          <p className="text-neutral-content">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Zamzampool
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
