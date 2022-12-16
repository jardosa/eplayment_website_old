import { useState } from 'react';
import validateEmailByRegex from 'utils/validateEmailByRegex';

const useEmail = () => {
  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    if (validateEmailByRegex(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const clearEmail = () => {
    setEmail('');
  };

  return [email, emailValid, handleEmailInput, clearEmail];
};

export default useEmail;
