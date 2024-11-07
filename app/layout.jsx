import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import GlobalProvider from "@/components/global/GlobalProvider";

export const metadata = {
  title: "TaskZen",
  description: "A platform for managing tasks",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GlobalProvider allChildren={children} />
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              error: "text-red-400",
              success: "text-green-400",
              warning: "text-yellow-400",
              info: "text-blue-400",
            },
          }}
        />
      </body>
    </html>
  );
}
