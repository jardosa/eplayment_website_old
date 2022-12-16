import { useState } from 'react';
import validateMobileNumberByRegex from 'utils/validateMobileNumberByRegex';

const useMobileNumber = () => {
  const [mobileNumber, setMobileNumber] = useState();
  const [mobileNumberValid, setMobileNumberValid] = useState(false);

  const handleMobileNumberInput = (e) => {
    setMobileNumber(e.target.value);
    if (validateMobileNumberByRegex(e.target.value)) {
      setMobileNumberValid(true);
    } else {
      setMobileNumberValid(false);
    }
  };

  return [mobileNumber, mobileNumberValid, handleMobileNumberInput];
};

export default useMobileNumber;
