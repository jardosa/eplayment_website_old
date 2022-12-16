import { CheckCircleOutlined } from '@ant-design/icons';
import Container from 'components/redesign/Container';
import ScreenMessageLayout from 'components/ScreenMessageLayout';
import { useRouter } from 'next/router';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Status = () => {
  const router = useRouter();

  const successNode = (
    <div className="w-max mx-auto px-5 flex flex-col justify-center items-center relative h-full">
      <MdOutlineCheckCircleOutline className=" my-5 w-full h-full max-w-[48px] sm:max-w-[68px] max-h-[48px] sm:max-h-[68px] fill-current text-custom-taurus-forest-fern" />

      <div className="text-xl sm:text-[28px] sm:leading-[38px] font-bold text-custom-taurus-forest-fern">
        Completed
      </div>
      <div className="text-custom-floppy-disk text-sm sm:text-base">
        Your transaction has been completed
      </div>
    </div>
  );

  const failedNode = (
    <div className="w-max mx-auto px-5 flex flex-col justify-center items-center relative h-full">
      <MdOutlineCheckCircleOutline className=" my-5 w-full h-full max-w-[48px] sm:max-w-[68px] max-h-[48px] sm:max-h-[68px] fill-current text-custom-danger" />

      <div className="text-xl sm:text-[28px] sm:leading-[38px] font-bold text-custom-danger">
        Failed
      </div>
      <div className="text-custom-floppy-disk text-sm sm:text-base">Transaction Failed</div>
    </div>
  );

  return (
    <ScreenMessageLayout>
      <div className="min-h-[480px]  w-full grid place-items-center">
        <div className="relative">
          <img
            className="mx-auto mb-[-13px] z-20 relative"
            src={`${
              router.query.status === 'completed'
                ? '/redesign/status-messages/success.png'
                : '/redesign/status-messages/failed.png'
            }`}
            alt=""
          />
          <Container>{router.query.status === 'completed' ? successNode : failedNode}</Container>
        </div>
      </div>
    </ScreenMessageLayout>
  );
};

export default Status;
