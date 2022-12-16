import { MenuOutlined } from '@ant-design/icons';
import { css, cx } from '@emotion/css';
import mobileMenuLinks from 'constants/mobileMenuLinks';
import useWindowSize from 'hooks/useWindowSize';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import NavbarLogo from 'assets/icons/logos/navbar-logo.svg';
import Context from 'context/Context';
import OutsideClickListener from './OutsideClickListener';

const NavItem = ({ title, href, sublinks, shallow, as, activeLink }) => {
  const router = useRouter();
  return (
    <div className=" text-sm lg:text-base flex items-center h-full group font-bold">
      <Link as={as} href={href} shallow={shallow}>
        <a
          className={[
            (activeLink === title.toLowerCase() || (activeLink === '/' && title === 'HOME')) &&
              'text-custom-taurus-forest-fern',
            'group-hover:text-custom-taurus-forest-fern text-custom-floppy-disk duration-200',
          ].join(' ')}
        >
          {title}
        </a>
      </Link>
      {sublinks.length > 0 && (
        <div className="absolute z-50 top-[80px] -ml-14 hidden group-hover:block p-5 pr-9 bg-white space-y-6 shadow-md">
          {/* eslint-disable-next-line no-shadow */}
          {sublinks.map(({ title, href }) => (
            <Link key={title} href={href}>
              <div>
                <a
                  className={[
                    router.asPath.replace('-', ' ').split('/')[2] === title.toLowerCase() &&
                      'text-custom-taurus-forest-fern',
                    'hover:text-custom-taurus-forest-fern duration-200',
                  ].join(' ')}
                  href={href}
                >
                  {title}
                </a>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const NavGroup = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    if (router.query?.section) {
      return setActiveLink(router.query.section);
    }

    if (router.asPath === '/') {
      return setActiveLink('/');
    }
    return setActiveLink(router.asPath.split('/')[1]);
  }, [router.asPath, router.query.section]);

  const servicesSublinks = [
    { title: 'EPLAYMENT', href: '/services/eplayment' },
    { title: 'PAYMENT GATEWAY', href: '/services/payment-gateway' },
    { title: 'ENTERTAINMENT', href: '/services/entertainment' },
  ];
  return (
    <div className="md:space-x-[18px] lg:space-x-[32px] md:flex hidden h-full items-center relative ">
      <NavItem activeLink={activeLink} href="/" title="HOME" />
      <NavItem
        activeLink={activeLink}
        href="/?section=wallet"
        title="WALLET"
        // shallow
      />
      <NavItem
        activeLink={activeLink}
        href="/?section=gaming"
        title="GAMING"
        // shallow
      />
      <NavItem
        activeLink={activeLink}
        as="/services"
        href="/services/eplayment"
        title="SERVICES"
        sublinks={[...servicesSublinks]}
      />
      <NavItem activeLink={activeLink} href="/about" title="ABOUT" />
      <NavItem activeLink={activeLink} href="/contact" title="CONTACT" />
    </div>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  as: PropTypes.string,
  sublinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ),
  shallow: PropTypes.bool,
  activeLink: PropTypes.string,
};

NavItem.defaultProps = {
  as: '',
  sublinks: [],
  href: '',
  shallow: false,
  activeLink: '/',
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const { width } = useWindowSize();
  const context = useContext(Context);

  const { removeNavShadow } = context.state;

  useEffect(() => {
    if (width >= 720) {
      hide();
    }
  }, [width]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 },
  };

  return (
    <>
      <nav
        className={cx(
          router.query?.mobile && 'hidden',
          'h-[86px] z-50 w-full sticky top-0 bg-white flex justify-center md:justify-between items-center  sm:px-[40px] xl:px-[80px]',
          !removeNavShadow ? 'shadow-md' : 'shadow-none',
          'duration-200',
        )}
      >
        <div className="hover:text-custom-taurus-forest-fern duration-200 text-custom-medium-slate-blue my-3 sm:block absolute top-[20px] left-[24px] md:hidden ">
          <OutsideClickListener onClick={hide}>
            <MenuOutlined onClick={toggle} style={{ fontSize: '24px' }} />
          </OutsideClickListener>
        </div>
        <Link href="/">
          <a
            href="/"
            className={cx(css`
              width: clamp(166px, 20vw, 235px);
            `)}
          >
            <NavbarLogo />
          </a>
        </Link>
        <NavGroup />
      </nav>
      <motion.ul
        animate={isOpen ? 'open' : 'closed'}
        transition={{ ease: 'linear' }}
        variants={variants}
        className={cx(
          isOpen ? 'block' : 'hidden',
          'bg-white fixed top-[86px] z-30 flex flex-col space-y-5 py-5 px-6 shadow-sm border-eplayment-black border border-opacity-5 mx-0',
        )}
      >
        {mobileMenuLinks.map(({ name, link }) => (
          <Link href={link} key={name}>
            <a
              className="hover:text-custom-taurus-forest-fern duration-200 text-custom-floppy-disk text-base font-bold"
              href={link}
            >
              <li
                className={[link === router.asPath && 'text-custom-taurus-forest-fern'].join(' ')}
              >
                {name}
              </li>
            </a>
          </Link>
        ))}
      </motion.ul>
    </>
  );
};

export default NavBar;
