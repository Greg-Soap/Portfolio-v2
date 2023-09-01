import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EGK | Portfolio",
  description:
    "A Portfolio site showcasing the expertise of Emmanuel G Kingsley",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Favicon --> */}
        <link
          rel="shortcut icon"
          href="image/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="image/favicon.ico" type="image/x-icon" />
        {/* <!-- Fonts --> */}
        <link
          rel="preconnect"
          href="../../../../fonts.googleapis.com/index.html"
        />
      </head>
      <body className={`${inter.className} home-minimal dark-mode `}>
        {children}
        <Script src="js/jquery.js"></Script>
        <Script src="js/popper.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/imagesloaded.pkgd.min.js"></Script>
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/swiper-bundle.min.js"></Script>
        <Script src="js/leaflet.js"></Script>
        <Script src="js/jquery.waypoints.min.js"></Script>
        <Script src="js/jquery.counterup.min.js"></Script>
        <Script src="js/aos.js"></Script>
        <Script src="js/jquery.preloadinator.min.js"></Script>
        <Script src="js/vanilla-tilt.min.js"></Script>
        <Script src="js/typer.js"></Script>
        <Script src="js/script.js"></Script>
      </body>
    </html>
  );
}
