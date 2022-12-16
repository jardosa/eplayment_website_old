import { css, cx } from '@emotion/css';
import { Element } from 'react-scroll';
import RoadmapDesktop from './RoadmapDesktop';
import RoadmapMobile from './RoadmapMobile';

export default function Roadmap() {
  const timeline = [
    {
      year: '2019',
      title: 'Content Production',
      description:
        'Eplayment started at the grassroots, creating gaming and esports content. We experienced firsthand the obstacles in creative freedom and creator monetization.',
    },
    {
      year: '2020',
      title: 'Payment Gateway',
      description:
        'With a newfound drive to solve the structural problem, we entered the world of fintech, one step at a time. This led to the development of a payment gateway for businesses in gaming and entertainment.',
    },
    {
      year: '2021 Quarter 3',
      title: 'Eplayment Wallet (Phase 1)',
      description:
        'After months of development, we released a beta of our flagship product – the Eplayment Wallet. This version can be used for fund transfers and digital purchases of game and entertainment credits.',
    },
    {
      year: '2021 Quarter 4',
      title: 'Banking (Phase 2)',
      description: 'Bank transfers, a Visa card, ATM withdrawal, and POS purchases.',
    },
    {
      year: '2022 Quarter 2',
      title: 'Creators (Phase 3)',
      description: 'Financial and software tools designed for the creator lifestyle.',
    },
    {
      year: '2022 Quarter 2',
      title: 'Crypto (Phase 4)',
      description: 'Buy, sell, store, and gift crypto and NFTs.',
    },
  ];

  const isEven = (num) => {
    return num % 2 === 0;
  };

  const roadmap = () => {
    return (
      <div className="grid grid-cols-2">
        {timeline.map(({ description, title, year }, index, array) => {
          const order = isEven(index + 1) ? 'order-1' : 'order-2';

          return (
            <div className={cx('text-right h-[195px] justify-self-end flex gap-10 mr-[-17px]')}>
              <div className={cx('space-y-3', isEven(index) ? 'order-1' : 'order-2')}>
                <p
                  className={cx(
                    css`
                      font-size: clamp(24px, 5vw, 40px);
                      line-height: clamp(34px, 5vw, 50px);
                    `,
                    'text-custom-medium-slate-blue font-bold',
                  )}
                >
                  {year}
                </p>
                <p
                  className={cx(
                    css`
                      font-size: clamp(18px, 5vw, 32px);
                      line-height: clamp(25px, 5vw, 39px);
                    `,
                    'text-custom-taurus-forest-fern font-bold ',
                  )}
                >
                  {title}
                </p>
                <div className="text-custom-floppy-disk text-base">{description}</div>
              </div>
              <div className={cx('flex-shrink-0 w-[34px]', isEven(index) ? 'order-2' : 'order-1')}>
                <div className="w-[34px] h-[34px]  bg-custom-medium-slate-blue rounded-full" />
                <div className=" mx-auto mt-[-10px] w-[12px] h-full bg-custom-medium-slate-blue" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Element
      id="roadmap"
      name="roadmap"
      className="w-full p-[30px] pt-10 mt-10 lg:p-[65px] bg-custom-wash-me flex flex-col space-y-[30px] justify-center items-center"
    >
      <div
        className={cx(
          css`
            font-size: clamp(37px, 5vw, 80px);
            line-height: clamp(44px, 5vw, 86px);
          `,
          'font-bold text-custom-floppy-disk',
        )}
      >
        ROADMAP
      </div>

      <RoadmapMobile />
      <RoadmapDesktop />
    </Element>
  );
}
