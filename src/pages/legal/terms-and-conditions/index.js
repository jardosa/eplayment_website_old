import TermsAndConditionsComponent from 'components/TermsAndConditionsComponent';
import PropTypes from 'prop-types';
import TermsAndConditions from '../../../website/TermsAndConditions';

export async function getServerSideProps(ctx) {
  const mobile = ctx.query?.mobile ?? '0';

  return {
    props: {
      mobile,
    },
  };
}

const TermsAndConditionsPage = ({ mobile }) => {
  if (mobile === '1') {
    return <TermsAndConditionsComponent />;
  }
  return <TermsAndConditions />;
};

TermsAndConditionsPage.propTypes = {
  mobile: PropTypes.string,
};

TermsAndConditionsPage.defaultProps = {
  mobile: '0',
};

export default TermsAndConditionsPage;
