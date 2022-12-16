/* eslint-disable react/prop-types */
import OutsideClickListener from 'components/OutsideClickListener';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const FAQ = ({ params }) => {
  const [inputSelected, setinputSelected] = useState(false);
  const [searchInput, setSearchInput] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const transactions = params.filter(({ category }) => category === 'Transactions');
  const account = params.filter(({ category }) => category === 'Account');
  const security = params.filter(({ category }) => category === 'Security');
  const general = params.filter(({ category }) => category === 'General');

  useEffect(() => {
    if (searchInput !== '') {
      setSearchResults(params.filter(({ title }) => title.match(new RegExp(searchInput, 'i'))));
    } else {
      setSearchResults([]);
    }
  }, [searchInput, params]);

  const clearSearch = () => setSearchInput('');

  return (
    <div className="break-out bg-home-4-white grid place-items-center">
      <div className="absolute w-full h-full top-0 left-0 opacity-50 bg-white" />
      <div className="relative max-w-[1440px] min-h-[900px]  mx-auto">
        <div className="mx-auto gap-y-5 flex flex-col items-start justify-start md:w-[720px] xl:w-[1050px]">
          <div className="my-5 md:my-16 w-full text-custom-floppy-disk">
            <p className="text-custom-medium-slate-blue text-[24px] my-5 md:text-[40px] m-0 md:leading-normal md:text-left text-center font-bold">
              How can we help?
            </p>
            <p className="text-sm my-3 sm:text-lg md:text-2xl md:text-left text-center">
              Our agents are on standby to assist you.
            </p>
            <OutsideClickListener onClick={() => setSearchResults([])}>
              <div
                style={{ boxShadow: '0px 4px 22px rgba(117, 98, 224, 0.13)' }}
                className="h-[41px] md:h-[73px] p-1 mx-auto w-[95%] relative md:w-[inherit] shadow-md border-opacity-50 rounded-2xl flex "
              >
                {!inputSelected && (
                  <img className="px-2 py-2 w-10 h-10 self-center" src="/search.png" alt="search" />
                )}

                <IoIosClose
                  onClick={clearSearch}
                  className={[
                    'absolute right-1 w-[41px] h-[41px] self-center justify-self-end transition ease-in duration-100',
                    searchInput ? 'opacity-100' : 'opacity-0',
                    'fill-current hover:text-custom-danger cursor-pointer transition ease-in',
                  ].join(' ')}
                />

                <input
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                  onBlur={() => {
                    setinputSelected(false);
                    document
                      .querySelector('input')
                      .setAttribute('placeholder', 'Start your search');
                  }}
                  onFocus={() => {
                    setinputSelected(true);
                    document.querySelector('input').setAttribute('placeholder', '');
                  }}
                  className="pl-4  outline-none faq-search h-full text-sm md:text-[26px] w-full"
                  placeholder="Start your search"
                />
                {searchResults.length > 0 && (
                  <div
                    style={{ boxShadow: '0px 4px 22px rgba(117, 98, 224, 0.13)' }}
                    className="absolute top-full mt-2 bg-white px-5 font-medium md:font-bold text-sm md:text-[26px] rounded-2xl shadow-md left-0 w-full overflow-y-scroll max-h-[300px]"
                  >
                    {searchResults.map(({ title, slug }) => (
                      <div className="my-5 hover:text-custom-taurus-forest-fern transition ease-in cursor-pointer">
                        <Link href={slug}>{title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </OutsideClickListener>
          </div>
          <div className=" text-custom-floppy-disk mx-auto w-[inherit] space-y-10 mb-10">
            <p className="text-custom-medium-slate-blue text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] font-bold md:text-left text-center">
              Frequently Asked Questions
            </p>
            <div
              style={{ boxShadow: '0px 4px 22px rgba(117, 98, 224, 0.13)' }}
              className="w-[inherit]  text-sm md:text-base p-5 gap-4 grid grid-cols-1 rounded-[31px] md:grid-cols-2 bg-white shadow-md border-opacity-5"
            >
              <div className="pl-0 my-5 md:col-span-2 font-bold text-[20px] md:text-[28px]">
                Transactions
              </div>
              {transactions.map((rec) => (
                <Link key={rec.slug} href={rec.slug}>
                  <a
                    className=" hover:text-custom-taurus-forest-fern transition ease-in"
                    href={rec.slug}
                  >
                    {rec.title}
                  </a>
                </Link>
              ))}
            </div>
            <div
              style={{ boxShadow: '0px 4px 22px rgba(117, 98, 224, 0.13)' }}
              className="w-[inherit]  text-sm md:text-base p-5 gap-4 grid grid-cols-1 rounded-[31px] md:grid-cols-2 bg-white shadow-md border-opacity-5"
            >
              <div className="pl-0 my-5 md:col-span-2 font-bold text-[20px] md:text-[28px]">
                Account
              </div>
              {account.map((rec) => (
                <Link key={rec.slug} href={rec.slug}>
                  <a
                    className=" hover:text-custom-taurus-forest-fern transition ease-in"
                    href={rec.slug}
                  >
                    {rec.title}
                  </a>
                </Link>
              ))}
            </div>
            <div
              style={{ boxShadow: '0px 4px 22px rgba(117, 98, 224, 0.13)' }}
              className="w-[inherit]  text-sm md:text-base p-5 gap-4 grid grid-cols-1 rounded-[31px] md:grid-cols-2 bg-white shadow-md border-opacity-5"
            >
              <div className="pl-0 my-5 md:col-span-2 font-bold text-[20px] md:text-[28px]">
                Security
              </div>
              {security.map((rec) => (
                <Link key={rec.slug} href={rec.slug}>
                  <a
                    className=" hover:text-custom-taurus-forest-fern transition ease-in"
                    href={rec.slug}
                  >
                    {rec.title}
                  </a>
                </Link>
              ))}
            </div>
            <div
              style={{ boxShadow: '0px 4px 22px rgba(117, 98, 224, 0.13)' }}
              className="w-[inherit]  text-sm md:text-base p-5 gap-4 grid grid-cols-1 rounded-[31px] md:grid-cols-2 bg-white shadow-md border-opacity-5"
            >
              <div className="pl-0 my-5 md:col-span-2 font-bold text-[20px] md:text-[28px]">
                General
              </div>
              {general.map((rec) => (
                <Link key={rec.slug} href={rec.slug}>
                  <a
                    className=" hover:text-custom-taurus-forest-fern transition ease-in"
                    href={rec.slug}
                  >
                    {rec.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
