"use client";

import GoToTicketPageButton from "@/app/components/button/GoToTicketPageButton";
import TermsAndConditions from "@/app/components/section/TermsAndConditions";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ClaimTicketPage() {
  const MySwal = withReactContent(Swal);
  const [formState, setFormState] = useState({
    orderId: "",
  });
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState({});
  const [isAgreementChecked, setIsAgreementChecked] = useState(false); // New state to track the radio button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setIsAgreementChecked(e.target.checked); // Update state when radio button is clicked
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setErrors({});

    let newErrors = {};
    if (!formState.orderId) newErrors.orderId = "Order ID is required";
    if (!isAgreementChecked)
      newErrors.agreement = "Anda harus menyetujui Syarat dan Ketentuan"; // Check if radio button is clicked

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setPending(false);

      // Show error alert if the form is incomplete
      MySwal.fire({
        icon: "error",
        title: "Form tidak lengkap",
        text: "Harap lengkapi semua field yang diperlukan",
      });
      return;
    }

    const requestData = {
      orderId: formState.orderId,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/api/tickets/${formState.orderId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        MySwal.fire({
          icon: "success",
          title: "ID Pesanan ditemukan",
          text: "Tiket masuk sudah dikirim ke email anda.",
        });
      } else {
        const errorData = await response.json();
        MySwal.fire({
          icon: "error",
          title: "Gagal Submit",
          text:
            errorData.message || "Terjadi kesalahan saat memproses data Anda",
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Network Error",
        text: "Tidak dapat terhubung ke server. Coba lagi nanti.",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="mt-20 mb-10 flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <img src="/icon/tiket.gif" alt="Tiket" className="h-20 w-20" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">
            Klaim Tiket
          </h1>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Silahkan masukan{" "}
              <span className="font-bold text-black">ID Pesanan</span> berikut
              agar QR-code bisa dikirimkan ke email anda.
            </p>
          </div>

          {/* Form Order Id */}
          <form onSubmit={handleSubmit}>
            <table className="table border-none justify-between ">
              <tbody>
                <tr>
                  <td>
                    <label
                      htmlFor="orderId"
                      className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm leading-6 text-black font-bold"
                    >
                      ID Pesanan
                    </label>
                  </td>
                  <td>
                    <p className="text-black font-bold">:</p>
                  </td>
                  <td>
                    <input
                      id="orderId"
                      name="orderId"
                      type="text"
                      required
                      value={formState.orderId}
                      onChange={handleChange}
                      className={`block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 
                        ${
                          errors.orderId ? "ring-red-500" : "ring-gray-300"
                        } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {errors.orderId && (
                      <p className="text-red-600 mt-2">{errors.orderId}</p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* section TermsAndCondition */}
            <TermsAndConditions />

            {/* Radio-button Agreement TnC */}
            <div className="flex items-center gap-x-3">
              <input
                id="accept-agreement"
                name="accept-agreement"
                type="radio"
                className="h-4 w-4 border-gray-900 text-indigo-600 focus:ring-indigo-600"
                onChange={handleRadioChange} // Handle radio change
              />
              <label
                htmlFor="accept-agreement"
                className="block text-sm/6 font-semibold italic text-gray-900"
              >
                Saya Setuju dengan Syarat dan Ketentuan
              </label>
            </div>
            {errors.ticket_count && (
              <p className="text-red-600 mt-2">{errors.ticket_count}</p>
            )}

            {/* Button Submit */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={pending} // Disable button if radio button is not checked
                className={`flex w-full justify-center rounded-md bg-emerald-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm 
                                    ${
                                      pending
                                        ? "opacity-50 cursor-not-allowed"
                                        : "Kirim"
                                    } hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {pending ? "Processing..." : "Klaim Tiket"}
              </button>
            </div>
          </form>
        </div>

        {/* Link go to tiket online page */}
        <GoToTicketPageButton />
      </div>
    </div>
  );
}
