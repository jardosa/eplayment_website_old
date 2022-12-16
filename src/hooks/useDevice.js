const { default: possibleDevices } = require('constants/possibleDevices');
const { useState, useEffect } = require('react');

const useGetDevice = () => {
  const [appLink, setAppLink] = useState(
    'https://play.google.com/store/apps/details?id=com.eplayment.ewallet&ah=MAHPFwBEwEZ97vbdNdxdehoYpNE',
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      const capturedDevice = possibleDevices.find(({ regex }) => regex.test(navigator.userAgent));
      if (capturedDevice) {
        setAppLink(capturedDevice.link);
      }
    }
  }, []);

  return appLink;
};

export default useGetDevice;
