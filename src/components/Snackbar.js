import { CloseOutlined } from '@ant-design/icons';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';

const Snackbar = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [duration, setDuration] = useState(3000);

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  useEffect(() => {
    if (display) {
      setTimeout(() => {
        setDisplay(false);
      }, duration);
    }
  }, [display, duration]);

  useImperativeHandle(ref, () => {
    return {
      openSnackBar: (msg, err = false, openDuration = 3000) => {
        setMessage(msg);
        setError(err);
        setDuration(openDuration);
        return open();
      },
      closeSnackBar: () => close(),
    };
  });
  const clipPath = 'polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%)';

  if (display) {
    return ReactDOM.createPortal(
      <>
        <div
          style={{
            clipPath,
          }}
          className={[
            'w-[300px]',
            'duration-300',
            'rounded-tr-sm rounded-br-sm',
            'h-20',
            'text-base',
            'z-50 font-gotham-book font-medium',
            error ? 'bg-red-400' : 'bg-custom-solid-green',
            'fixed top-3/4 right-12',
            'flex items-center justify-center text-center',
            'p-[2px] ',

            display ? 'visible slide-left' : 'invisible opacity-0',
          ].join(' ')}
        >
          <div
            style={{
              clipPath,
            }}
            className="flex top justify-center relative items-center m-[1px] w-full h-full bg-custom-throat"
          >
            <button type="button" onClick={() => close()}>
              <CloseOutlined className="w-2 h-2 stroke-current hover:text-custom-dark-orchid text-white absolute top-3 right-3" />
            </button>
            <p className="my-auto mx-5 text-sm whitespace-pre-wrap text-white ">
              {message || 'SNACKBAR'}
            </p>
          </div>
        </div>
      </>,
      document.getElementById('snackbar'),
    );
  }
  return null;
});

export default Snackbar;
