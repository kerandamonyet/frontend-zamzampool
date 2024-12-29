import React, { useState, useRef, useEffect } from "react";

function TermsAndConditions() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  const downSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  const upSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      iconRef.current.innerHTML = downSVG;
    } else {
      contentRef.current.style.maxHeight = "0";
      iconRef.current.innerHTML = upSVG;
    }
  }, [isOpen, downSVG, upSVG]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-5 text-slate-800"
      >
        <span className="font-bold"><span className="text-red-500">*</span>Syarat dan Ketentuan Tiket</span>
        <span
          ref={iconRef}
          className="text-slate-800 transition-transform duration-300"
          dangerouslySetInnerHTML={{ __html: isOpen ? downSVG : upSVG }}
        />
      </button>
      <div
        ref={contentRef}
        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="text-left text-black text-xs">
          <h2 className="font-bold mb-2">Syarat dan Ketentuan Klaim Tiket</h2>
          <ol className="list-decimal ml-5">
            <li className="font-bold mb-2">
              <h3 className="font-bold">Validasi Tiket:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  Tiket berenang berbasis QR code hanya berlaku pada tanggal dan
                  jam yang tertera di tiket.
                </li>
                <li className="font-normal">
                  Tiket yang telah kadaluarsa tidak dapat digunakan atau diklaim
                  kembali.
                </li>
              </ul>
            </li>
            <li className="font-bold mb-2">
              <h3 className="font-bold">Klaim Tiket:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  Tiket hanya dapat diklaim dengan menunjukkan QR code yang
                  valid pada saat kedatangan di kolam renang.
                </li>
                <li className="font-normal">
                  Setiap QR code hanya dapat digunakan satu kali. Tiket yang
                  sudah digunakan tidak dapat digunakan kembali.
                </li>
                <li className="font-normal">
                  Tiket yang telah digunakan tidak dapat ditukarkan atau
                  dikembalikan.
                </li>
              </ul>
            </li>
            <li className="font-bold mb-2">
              <h3 className="font-bold">Pengiriman Tiket QR Code:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  QR code tiket akan dikirimkan melalui email yang terdaftar
                  setelah klaim tiket tervalidasi.
                </li>
                <li className="font-normal">
                  Pastikan informasi kontak yang diberikan saat pembelian tiket
                  adalah benar dan valid untuk menerima QR code.
                </li>
              </ul>
            </li>
            <li className="font-bold mb-2">
              <h3 className="font-bold">Kehilangan atau Kerusakan:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  Kehilangan atau kerusakan tiket tidak menjadi tanggung jawab
                  pengelola kolam renang.
                </li>
                <li className="font-normal">
                  Tiket yang rusak atau tidak terbaca oleh sistem tidak dapat
                  diklaim. Harap pastikan QR code tetap dalam kondisi baik.
                </li>
              </ul>
            </li>
            <li className="font-bold mb-2">
              <h3 className="font-bold">Pembatalan dan Pengembalian Dana:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  Tiket yang sudah dibeli tidak dapat dibatalkan atau
                  dikembalikan dananya.
                </li>
                <li className="font-normal">
                  Dalam keadaan darurat atau penutupan kolam renang oleh
                  pengelola, pemegang tiket akan diberikan opsi untuk
                  menjadwalkan ulang kunjungan.
                </li>
              </ul>
            </li>
            <li className="font-bold mb-2">
              <h3 className="font-bold">Penyalahgunaan:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  Penyalahgunaan tiket atau QR code dengan cara apapun akan
                  berakibat pada pembatalan tiket tanpa pengembalian dana.
                </li>
                <li className="font-normal">
                  Pemegang tiket yang terbukti melakukan kecurangan akan
                  dikenakan sanksi sesuai dengan peraturan yang berlaku di kolam
                  renang.
                </li>
              </ul>
            </li>
            <li className="font-bold mb-2">
              <h3 className="font-bold">Ketentuan Tambahan:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  Pengelola kolam renang berhak mengubah syarat dan ketentuan
                  ini sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                </li>
                <li className="font-normal">
                  Dengan membeli dan menggunakan tiket, pemegang tiket dianggap
                  telah membaca, memahami, dan menyetujui semua syarat dan
                  ketentuan yang berlaku.
                </li>
              </ul>
            </li>
            <li className="font-bold mb-2">
              <h3 className="font-bold">Keamanan dan Kebersihan:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  Pemegang tiket wajib mematuhi semua peraturan keamanan dan
                  kebersihan yang berlaku di area kolam renang.
                </li>
                <li className="font-normal">
                  Pengelola berhak mengeluarkan pemegang tiket yang melanggar
                  peraturan tanpa pengembalian dana.
                </li>
              </ul>
            </li>
            <li className="font-bold mb-2">
              <h3 className="font-bold">Kontak dan Bantuan:</h3>
              <ul className="list-disc ml-5 mt-1">
                <li className="font-normal">
                  Untuk bantuan lebih lanjut, pemegang tiket dapat menghubungi
                  layanan pelanggan di bawah ini: <br /> No Whatsapp:
                  08123456789 <br /> Email: ticket-center@zamzampool.com.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
