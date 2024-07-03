import { Anton, DM_Sans, Inter, Poppins } from "next/font/google";

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const dm_sans_init = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm_sans",
});

export const inter = inter_init.className;

export const dm_sans = dm_sans_init.className;
