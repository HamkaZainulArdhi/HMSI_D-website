import { Playfair_Display, Poppins } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  variable: "--playfair-font",  // Variabel untuk digunakan di CSS
  subsets: ["latin"],           // Subset latin untuk karakter umum
  display: "fallback",          // Menggunakan fallback font saat loading
  weight: ["400", "500", "600", "700", "800", "900"],  // Bobot font yang diinginkan
});

export const poppins = Poppins({
  variable: "--poppins-font",  // Variabel untuk digunakan di CSS
  subsets: ["latin"],          // Subset latin
  display: "fallback",         // Menggunakan fallback font saat loading
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],  // Bobot font yang diinginkan
});
