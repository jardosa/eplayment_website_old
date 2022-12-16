import PrivacyNoticeComponent from 'components/PrivacyNoticeComponent';
import PropTypes from 'prop-types';

import PrivacyNotice from '../../../website/PrivacyNotice';

export async function getServerSideProps(ctx) {
  const mobile = ctx.query?.mobile ?? '0';

  return {
    props: {
      mobile,
    },
  };
}

const PrivacyNoticePage = ({ mobile }) => {
  if (mobile === '1') {
    return <PrivacyNoticeComponent />;
  }
  return <PrivacyNotice />;
};

PrivacyNoticePage.propTypes = {
  mobile: PropTypes.string,
};

PrivacyNoticePage.defaultProps = {
  mobile: '0',
};

export default PrivacyNoticePage;
