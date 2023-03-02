import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { NavBar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white
    min-h-screen"
    >
      <NavBar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/e6c7b68c60.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
