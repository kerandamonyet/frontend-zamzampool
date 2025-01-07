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
        {/* Lounge VIP */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/kafe-area-makan.png"
            alt="Kafe & Area Makan"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Lounge VIP</h2>
            <p className="text-black mt-2">
              Area eksklusif yang dilengkapi dengan tempat duduk santai, serta pemandangan kolam renang yang menenangkan.
            </p>
          </div>
        </div>

        {/* Kolam Renang Premium */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/kolam-renang-utama.png"
            alt="Kolam Renang Utama"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Kolam Renang Premium</h2>
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
            <h2 className="text-xl font-bold text-blue-600">Area Relaksasi Air Hangat</h2>
            <p className="text-gray-600 mt-2">
              Kolam renang air hangat yang dapat membantu meredakan stress, mengendurkan otot dan meningkatkan sirkulasi darah.
            </p>
          </div>
        </div>

        {/* Ruang Mandi & Ganti */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/ruang-mandi-shower.png"
            alt="Ruang Mandi & Shower"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Ruang Mandi & Ganti</h2>
            <p className="text-gray-600 mt-2">
              Ruangan yang bersih dan nyaman sebagai prioritas utama serta tertutup untuk privasi maksimal.
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

        {/* Kantin */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src="/kantin.png"
            alt="Kantin"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Kantin</h2>
            <p className="text-gray-600 mt-2">
              Tempat yang nyaman untuk menikmati hidangan ringan dan minuman segar setelah berenang. Menyediakan beraga camilan, makanan berat hingga minuman dingin.
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
            src="/happynos.png"
            alt="Happynos"
            width={400}
            height={200}
            className="rounded-t-lg"
          />h
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-600">Happynos Coffee Shop</h2>
            <p className="text-gray-600 mt-2">
              Menghadirkan pengalaman ngopi yang istimewa dengan kopi premium, tempat ini cocok untuk bersantai setelah berenang.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
