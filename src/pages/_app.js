/* eslint-disable react/prop-types */
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingPacman from 'components/LoadingPacman';
import GlobalState from 'context/GlobalState';

const DynamicLayout = dynamic(() => import('components/Layout'), {
  loading: () => <LoadingPacman />,
});

function MyApp({ Component, pageProps }) {
  const { events, push } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    events.on('routeChangeStart', () => {
      setLoading(true);
    });
    events.on('routeChangeComplete', () => {
      setLoading(false);
    });
  }, [events]);

  if (loading) {
    return <LoadingPacman />;
  }

  return (
    <GlobalState>
      <DynamicLayout>
        <Component {...pageProps} />
      </DynamicLayout>
    </GlobalState>
  );
}

export default MyApp;
