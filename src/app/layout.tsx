import "./globals.css";

import { Figtree } from "next/font/google";
// import localFont from "next/font/local";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// const yekanbakh = localFont({
//   src: [
//       {
//           path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Thin.woff2",
//           weight: "100",
//           style: "normal",
//       },
//       {
//           path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff2",
//           weight: "300",
//           style: "normal",
//       },
//       {
//           path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff2",
//           weight: "400",
//           style: "normal",
//       },
//       {
//           path: "../../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff2",
//           weight: "600",
//           style: "normal",
//       },
//       {
//           path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff2",
//           weight: "700",
//           style: "normal",
//       },
//       {
//           path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Black.woff2",
//           weight: "900",
//           style: "normal",
//       },
//   ],
//   variable: "--font-yekanbakh",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      dir="rtl"
      className={`${figtree.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] bg-primary dark:bg-base-100 dark:text-base-content">
        <header className="flex items-center justify-center text-3xl h-20">
          دوره معماری ری اکت
        </header>
        <div className="flex-1 flex  justify-center items-center">
          {children}
        </div>
        <footer className="flex items-center justify-center text-3xl h-20">
          FOOTER
        </footer>
      </body>
    </html>
  );
}
