import Image from 'next/image';

export default function Fasilitas() {
  return (
    <div className="bg-white min-h-screen pt-5 pb-10">
      <header className="text-center py-10">
      <p className="text-[14px] font-medium text-[#026EE8]">
          FASILITAS & LAYANAN ZAM-ZAM POOL
        </p>
        <h1 className="text-3xl font-bold text-blue-600 text-[32px] pb-3">
          Kolam Renang Nyaman untuk <br />Liburan Keluarga
        </h1>
        <p className="text-black mt-4 px-4 mx-auto pb-4">
          Di Zam-Zam Pool, kami berkomitmen untuk memberikan pengalaman berenang yang menyegarkan dan <br /> nyaman bagi seluruh pengunjung. Dengan fasilitas lengkap dan layanan berkualitas, kami menyediakan <br />lingkungan yang aman dan ramah keluarga, cocok untuk segala usia.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 gap-y-10 gap lg:px-16 pb-12 max-w-[95%] mx-auto">
        {/* Kafe & Are Makan */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/kafe-area-makan.png"
            alt="Kafe & Area Makan"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Kafe & Are Makan</h2>
            <p className="text-black mt-2">
              Nikmati hidangan lezat dan minuman segar di kafe kami, dengan menu pilihan untuk memanjakan selera Anda.
            </p>
          </div>
        </div>

        {/* Kolam Renang Utama */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/kolam-renang-utama.png"
            alt="Kolam Renang Utama"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Kolam Renang Utama</h2>
            <p className="text-gray-600 mt-2">
              Kolam renang luas dan bersih yang cocok untuk anak-anak hingga dewasa, dengan area dangkal dan dalam yang aman.
            </p>
          </div>
        </div>

        {/* Area Relaksasi */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/area-relaksasi.png"
            alt="Area Relaksasi"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Area Relaksasi dan Tempat Duduk Umum</h2>
            <p className="text-gray-600 mt-2">
              Tempat duduk di sekitar kolam renang untuk pengunjung beristirahat dan bersantai.
            </p>
          </div>
        </div>

        {/* Ruang Mandi & Shower */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/ruang-mandi-shower.png"
            alt="Ruang Mandi & Shower"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Ruang Mandi & Shower</h2>
            <p className="text-gray-600 mt-2">
              Tempat duduk di sekitar kolam renang untuk pengunjung beristirahat dan bersantai.
            </p>
          </div>
        </div>

        {/* Area Parkir */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/area-parkir.png"
            alt="Area Parkir"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Area Parkir</h2>
            <p className="text-gray-600 mt-2">
              Parkir kendaraan dengan aman dan memiliki area parkir yang luas, bisa digunakan untuk bus, mobil, dan motor.
            </p>
          </div>
        </div>

        {/* Ruang Ganti */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/ruang-ganti.png"
            alt="Ruang Ganti"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Ruang Ganti</h2>
            <p className="text-gray-600 mt-2">
              Ruang ganti nyaman dengan shower, loker, dan ruang bersih untuk privasi maksimal.
            </p>
          </div>
        </div>

        {/* Gazebo */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/gazebo.png"
            alt="Gazebo"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Gazebo</h2>
            <p className="text-gray-600 mt-2">
              Gazebo nyaman di tepi kolam untuk tempat bersantai bersama keluarga, dengan layanan ekstra bagi pemegang Tiket Premium.
            </p>
          </div>
        </div>

        {/* Loket Tiket */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/loket-tiket.png"
            alt="Loket Tiket & Cashless Payment"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Loket Tiket & Cashless Payment</h2>
            <p className="text-gray-600 mt-2">
              Tiket Counter cepat dan ramah, menyediakan tiket reguler dan premium dengan opsi pembayaran digital. Pesan online untuk lebih praktis.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
