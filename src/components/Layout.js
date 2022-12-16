// import Fade from 'react-reveal/Fade';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useNavbarHide from 'hooks/useNavbarHide';
import Footer from './Footer';
import NavBar from './NavBar';
import BackTop from './BackTop';

const ROUTES = {
  '': 'Wallet for Gaming',
  'payment-gateway': 'Payment Gateway',
  eplayment: 'Eplayment Wallet',
  entertainment: 'Entertainment',
  about: 'About',
  contact: 'Contact',
  'terms-and-conditions': 'Terms And Conditions',
  'privacy-notice': 'Privacy Notice',
  'help-and-support': 'Help & Support',
  faq: 'FAQs',
  'pitch-your-project': 'Pitch Your Project',
  'rent-our-studio': 'Rent Our Studio',
  'organize-your-event': 'Organize Your Event',
};

const Layout = ({ keywords, description, children }) => {
  const router = useRouter();
  const { asPath } = router;
  const [title, setTitle] = useState('Wallet For Gaming');
  const [ref] = useNavbarHide();

  useEffect(() => {
    const lastPath = asPath.split('/').pop();

    const { section } = router?.query && router.query;

    if (section) {
      return setTitle(section.charAt(0).toUpperCase() + section.slice(1));
    }

    return setTitle(
      ROUTES[lastPath] ??
        lastPath
          .split('-')
          .map((path) => path.charAt(0).toUpperCase() + path.slice(1))
          .join(' '),
    );
  }, [asPath, router.query]);

  return (
    <div className="mx-auto min-h-[900px] w-full max-w-[1920px]">
      <Head>
        <title>{`Eplayment — ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/space.png" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.eplayment.com/" />
        <meta property="og:title" content="Eplayment — Wallet for Gaming" />
        <meta
          property="og:description"
          content="Eplayment brings the world of virtual finance, esports, and entertainment to every Filipino.
"
        />
        <meta property="og:image" content="/eplayment-og-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitter.com/eplayment" />
        <meta property="twitter:title" content="Eplayment — Wallet for Gaming" />
        <meta
          property="twitter:description"
          content="Eplayment brings the world of virtual finance, esports, and entertainment to every Filipino.
"
        />
        <meta property="twitter:image" content="/eplayment-og-image.png" />
      </Head>

      <NavBar />
      <main className=" w-full max-w-[1440px] mx-auto overflow-x-hidden">
        {/* dont delete this. this serves as trigger to hide navbar  */}
        <div ref={ref} className="absolute top-20 w-96" />
        {/* <div className="md:block hidden"> */}
        <BackTop />
        {/* </div> */}
        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

Layout.defaultProps = {
  keywords: 'games, esports, bills, payment',
  description: 'Eplayment is the source for all your gaming needs',
};

export default Layout;
