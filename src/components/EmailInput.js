import useEmail from 'hooks/useEmail';
import { useRef, useState } from 'react';
import Fade from 'react-reveal';

import addEmailToNewsLetter from 'utils/addToNewsLetter';
import Button from './redesign/Button';
import Snackbar from './Snackbar';

const EmailInput = () => {
  const [email, emailValid, handleEmailInput, clearEmail] = useEmail();
  const [loading, setLoading] = useState(false);
  const snackbarRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      await addEmailToNewsLetter(email);
      snackbarRef.current?.openSnackBar('Email successfully added.');
    } catch (error) {
      snackbarRef.current?.openSnackBar(error.message, true, 3000);
    } finally {
      clearEmail();
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[970px] w-full">
      <div className="py-3 pl-3 md:py-7 my-12 md:pl-5">
        <form
          style={{
            boxShadow: '0px 0px 16px 0px #7562E017',
          }}
          className=" flex w-full   rounded-2xl  justify-between items-center"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleEmailInput}
            className={[
              'focus:outline-none',
              'font-semibold',
              'text-custom-floppy-disk',
              'text-sm md:text-[28px]',
              'mx-5',
              'leading-none',
              'w-full',
            ].join(' ')}
            type="email"
            placeholder="Enter email address"
          />
          <Button
            className="lg:text-[32px] duration-100 my-1 mx-3 !px-2 md:!px-5 xs:text-sm md:text-xl lg:px-5 font-bold h-[35px] md:h-[77px] w-[100px] rounded-[7px]  md:w-[200px]  lg:w-[229px] leading-none"
            type="submit"
            title="SUBSCRIBE"
            disabled={loading || !emailValid}
          />
        </form>
        <div className="w-full my-5 text-center">
          <Fade when={email?.length > 0 && !emailValid}>
            <span className="text-sm sm:text-base md:text-xl text-red-500">
              Please provide valid email address
            </span>
          </Fade>
        </div>
      </div>
      <Snackbar ref={snackbarRef} />
    </div>
  );
};

export default EmailInput;
