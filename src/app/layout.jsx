"use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
import "./globals.css";
import "./styles/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const handleDirectionClick = () => {
  //   const gmapsURL = "https://maps.app.goo.gl/GTATW3gBTwVX4TXu7";
  //   window.open(gmapsURL, "_blank");
  // };

  return (
    <html lang="en">
      <head>
        <title>Zamzampool</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header/>
        <main className="m-10">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
