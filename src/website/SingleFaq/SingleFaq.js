/* eslint-disable react/prop-types */
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';

const MarkDownH2 = ({ children, ...props }) => <div {...props}>{children}</div>;
const MarkDownP = ({ children, ...props }) => <div {...props}>{children}</div>;
const MarkDownOl = ({ children, ...props }) => <div {...props}>{children}</div>;
const MarkDownUl = ({ children, ...props }) => <div {...props}>{children}</div>;
const MarkDowna = ({ children, ...props }) => <a {...props}>{children}</a>;
const MarkDownImg = ({ children, ...props }) => (
  <Image height={42} width={42} {...props}>
    {children}
  </Image>
);

const SingleFaq = ({ faq, title, root, parent, slug }) => {
  const breadCrumbs = (
    <div className="flex flex-wrap tracking-wide  font-gotham-book text-lg flex-row">
      <Link href={`/${root}/`}>
        <a
          className="text-xs lg:text-base font-medium lg:font-bold underline hover:text-custom-taurus-forest-fern duration-200 "
          href={`/${root}/`}
        >
          {root.toUpperCase()}
        </a>
      </Link>
      <span className="text-xs lg:text-base font-medium lg:font-bold">&nbsp;/&nbsp;</span>
      <Link href={`/${root}/`}>
        <a
          className="text-xs lg:text-base font-medium lg:font-bold underline hover:text-custom-taurus-forest-fern duration-200 "
          href={`/${root}/${parent}`}
        >
          {parent.toUpperCase()}
        </a>
      </Link>
      <span className="text-xs lg:text-base font-medium lg:font-bold">&nbsp;/&nbsp;</span>
      <Link href={`/${root}/${parent}/${slug}`}>
        <a
          className="text-xs lg:text-base font-medium lg:font-bold underline hover:text-custom-taurus-forest-fern duration-200 "
          href={`/${root}/${parent}/${slug}`}
        >
          {title.toUpperCase()}
        </a>
      </Link>
    </div>
  );

  return (
    <div className="font-gotham-book">
      <div className="max-w-[1440px] h-auto min-h-[900px]  mx-auto">
        <div
          style={{ boxShadow: '0px 4px 22px rgba(117, 98, 224, 0.13)' }}
          className="bg-white w-[95%] md:w-3/4 p-10 mx-auto tracking-tight md:tracking-wide shadow-md text-custom-floppy-disk h-full"
        >
          {breadCrumbs}
          <Markdown
            options={{
              forceBlock: true,
              overrides: {
                h2: {
                  component: MarkDownH2,
                  props: {
                    className: 'text-lg md:text-2xl font-medium lg:font-bold my-5',
                  },
                },
                p: {
                  component: MarkDownP,
                  props: {
                    className: 'text-sm md:text-base leading-relaxed my-5',
                  },
                },
                ol: {
                  component: MarkDownOl,
                  props: {
                    className: 'text-sm md:text-base leading-relaxed list-decimal my-5 space-y-2 ',
                  },
                },
                ul: {
                  component: MarkDownUl,
                  props: {
                    className: 'text-sm md:text-base leading-relaxed list-disc my-5 space-y-2 ',
                  },
                },
                a: {
                  component: MarkDowna,
                  props: {
                    className: 'hover:text-custom-taurus-forest-fern ',
                  },
                },
                img: {
                  component: MarkDownImg,
                },
              },
            }}
          >
            {faq}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;
