// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Scroll from 'react-scroll';
import GamingContent from './GamingContent';
import Fintech from './Fintech';
import Landing from './Landing';
import Wallet from './Wallet';
import CreateConnectConvert from './CreateConnectConvert';
import Gaming from './Gaming';
import EplaymentBank from './EplaymentBank';
import OurPartners from './OurPartners';

const Home = () => {
  const router = useRouter();
  const { scroller } = Scroll;
  useEffect(() => {
    if (router?.query?.section) {
      scroller.scrollTo(router.query.section, {
        smooth: true,
        offset: -200,
      });
    }
  }, [router, scroller]);

  return (
    <div className="w-full flex flex-wrap">
      <Landing />
      {/* WALLET */}
      <Wallet />
      {/* CREATE CONNECT CONVERT */}
      <CreateConnectConvert />
      {/* GAMING CONTENT IS OUR ALPHA & OMEGA */}
      <GamingContent />
      {/* ELEVATE YOUR GAME */}
      <Gaming />
      {/* GET BANKED WITH EPLAYMENT */}
      <EplaymentBank />
      {/* FINTECH IS FUN */}
      <Fintech />
      {/* OUR PARTNERS */}
      <OurPartners />
    </div>
  );
};

Home.propTypes = {};

export default Home;
