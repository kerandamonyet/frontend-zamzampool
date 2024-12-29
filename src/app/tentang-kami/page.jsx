import Image from 'next/image';

export default function TentangKami() {
  return (
    <div>
    <div className="flex flex-col lg:flex-row justify-between items-center bg-white lg:p-4 lg:px-20 lg:pb-32 lg:pt-20 md:py-12">
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src="./tentang.png"
          alt="Assets"
          className="w-full max-w-md lg:max-w-full"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 text-center lg:text-left pl-20">
        <p className="text-[14px] font-medium text-[#026EE8]">
          TENTANG KAMI ZAM-ZAM POOL KUNINGAN
        </p>
        <p className="text-[24px] lg:text-[32px] font-bold leading-8 lg:leading-10 text-[#026EE8] mt-2">
          Kolam Renang Nyaman untuk <br className="hidden lg:block" /> Liburan Keluarga
        </p>
        <p className="text-[14px] font-medium text-[#000000] mt-5">
          Zam-Zam Pool adalah destinasi wisata kolam renang yang populer di Kabupaten <br className="hidden lg:block" />
          Kuningan, Jawa Barat. Dibuka pada tahun 2019, tempat ini menawarkan berbagai <br className="hidden lg:block" />
          fasilitas rekreasi air yang cocok untuk keluarga. <br className="hidden lg:block" />
          <br></br>
          Lokasi: Terletak di Jalan Veteran Blok Pakuwon, Desa Manislor, Kecamatan <br className="hidden lg:block" />
          Jalaksana, Zam-Zam Pool mudah diakses dari pusat kota kuningan. Jaraknya <br className="hidden lg:block" />
          sekitar 11 km dengan waktu tempuh sekitar 20 menit.
        </p>
      </div>
    </div>
    <p className="text-[24px] lg:text-[32px] font-bold leading-8 lg:leading-10 text-[#026EE8] bg-white text-center pb-10">
          Review Customer Zam-Zam Pool
    </p>
    <script src="https://static.elfsight.com/platform/platform.js" async></script>
    <div className="elfsight-app-ace7b653-c356-49b3-b7aa-8ac833dccc40 bg-white pb-20" data-elfsight-app-lazy></div>
    </div>
    );
}