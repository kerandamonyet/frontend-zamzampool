import Image from 'next/legacy/image'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <div className="relative h-screen bg-gradient-to-b from-purple-900 to-gray-900">
            <Image
              src="/background.png"
              alt="Waterpark background"
              layout="fill"
              objectFit="cover"
              className="absolute z-0"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1 className="text-3xl font-bold md:text-5xl">ZAM-ZAM POOL</h1>
              <p className="mt-4 text-base md:text-2xl">Tempat Liburan Seru Bersama Keluarga</p>
              <button className="mt-6 px-6 py-3 bg-[#026EE8] text-white rounded-lg text-lg font-medium hover:bg-[#69aefd] transition duration-300 shadow-2xl">
                Fasilitas & Layanan
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-6 lg:p-10 lg:px-40 lg:py-28 md:py-12">
      <div className="flex flex-col lg:w-1/2 text-center lg:text-left">
        <p className="text-[14px] font-medium text-[#026EE8]">
          SELAMAT DATANG DI ZAM-ZAM POOL
        </p>
        <p className="text-[24px] lg:text-[32px] font-bold leading-8 lg:leading-10 text-[#026EE8] mt-2">
          Kolam Renang Nyaman untuk <br className="hidden lg:block" /> Liburan Keluarga
        </p>
        <p className="text-[14px] font-medium text-[#000000] mt-5">
          Temukan tempat sempurna untuk melepaskan penat dan menikmati <br className="hidden lg:block" />
          waktu bersama keluarga di Zam-Zam Pool. Dengan suasana alami <br className="hidden lg:block" />
          yang asri dan kolam renang berkualitas, kami menghadirkan <br className="hidden lg:block" />
          pengalaman berenang yang menyegarkan dan aman untuk semua <br className="hidden lg:block" />
          usia. Baik anak-anak maupun dewasa, setiap pengunjung akan <br className="hidden lg:block" />
          menemukan keseruan di Zam-Zam Pool.
        </p>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src="./kids.png"
          alt="Anak-anak di kolam renang"
          className="w-full max-w-md lg:max-w-full"
        />
      </div>
    </div>
    <div className="bg-white p-4 sm:p-6 md:p-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#026EE8] text-center mb-4">
        Pilih Tiket
      </h2>
      <p className="text-center text-black mb-8 text-sm sm:text-base md:text-lg font-medium">
        Permudah kunjungan Anda ke Zam-Zam Pool dengan sistem pemesanan tiket online kami! 
        Hanya dengan <br /> beberapa klik, Anda bisa memesan tiket kapan saja dan di mana saja, tanpa perlu antre di loket.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 lg:px-48 py-10">
        {/* Regular Ticket */}
        <div className="flex flex-col items-center mx-auto">
          <div className="shadow-xl rounded-lg border p-6 py-8 w-full max-w-md">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Tiket Reguler</h3>
            <p className="text-black mb-4">
              Nikmati Kesegaran Berenang dengan Tiket Reguler Zam-Zam Pool yang memiliki fasilitas, diantaranya:
            </p>
            <ul className="list-disc list-inside text-black mb-4">
              <li>Akses Kolam Renang Utama</li>
              <li>Akses Area Bermain Anak</li>
              <li>Ruang Ganti Standar</li>
              <li>Fasilitas Shower Standar</li>
            </ul>
          </div>
          <button className="bg-[#026EE8] text-white font-semibold py-2 px-4 rounded-lg mt-4 shadow hover:bg-blue-700 w-full max-w-md">
            Rp. 18.000,-
          </button>
        </div>
        {/* Premium Ticket */}
        <div className="flex flex-col items-center mx-auto">
          <div className="shadow-xl rounded-lg border p-6 py-8 w-full max-w-md pb-">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Tiket Premium</h3>
            <p className="text-black mb-4">
              Pengalaman Berenang Eksklusif dengan Tiket Premium Zam-Zam Pool yang memiliki fasilitas, diantaranya:
            </p>
            <ul className="list-disc list-inside text-black mb-4">
              <li>Akses Kolam Renang Utama</li>
              <li>Akses Ke Lounge VIP untuk Bersantai</li>
              <li>Area Relaksasi Eksklusif</li>
              <li>Wi-Fi Gratis untuk Area Lounge VIP</li>
            </ul>
          </div>
          <button className="bg-[#026EE8] text-white font-semibold py-2 px-4 rounded-lg mt-4 shadow hover:bg-blue-700 w-full max-w-md">
            Rp. 30.000,-
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
