import { css, cx } from '@emotion/css';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import IOS from 'assets/icons/appstore-icons/ios.svg';
import IOSFooter from 'assets/icons/appstore-icons/ios2.svg';
import Android from 'assets/icons/appstore-icons/android.svg';
import AndroidFooter from 'assets/icons/appstore-icons/android2.svg';

const appLink = (os, location) => {
  if (os === 'ios') {
    return {
      href: 'https://apps.apple.com/ph/app/eplayment/id1557834804',
      imgSrc:
        location !== 'footer' ? (
          <IOS className="transform group-hover:scale-110 transition" />
        ) : (
          <IOSFooter className="transform group-hover:scale-110 transition" />
        ),
    };
  }

  return {
    href: 'https://play.google.com/store/apps/details?id=com.eplayment.ewallet',
    imgSrc:
      location !== 'footer' ? (
        <Android className="transform group-hover:scale-110 transition" />
      ) : (
        <AndroidFooter className="transform group-hover:scale-110 transition" />
      ),
  };
};

const AppButton = forwardRef(({ os, location }, ref) => {
  const { href, imgSrc } = appLink(os, location);
  return (
    <motion.a target="_blank" className="group" ref={ref} whileTap={{ scale: 0.9 }} href={href}>
      <div
        className={cx(
          css`
            width: clamp(130px, 42vw, 192px);
          `,
        )}
      >
        {imgSrc}
      </div>
    </motion.a>
  );
});

AppButton.displayName = 'appButton';

AppButton.propTypes = {
  os: PropTypes.oneOf(['ios', 'android']).isRequired,
  location: PropTypes.string,
};

AppButton.defaultProps = {
  location: '',
};

export default AppButton;
