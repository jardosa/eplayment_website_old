import { readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';

import getAllPaths, { faqsDirectory } from 'utils/getAllPaths';
import SingleFaq from '../../website/SingleFaq/SingleFaq';

// eslint-disable-next-line react/prop-types
const SingleFaqPage = ({ faq, title, path: breadCrumb, root, parent, slug }) => (
  <SingleFaq faq={faq} title={title} path={breadCrumb} root={root} parent={parent} slug={slug} />
);

export async function getStaticPaths() {
  return {
    paths: [...getAllPaths()],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.resolve(faqsDirectory, `${params.slug[0]}/${params.slug[1]}.md`);
  const fileContents = readFileSync(fullPath, 'utf-8');

  return {
    props: {
      slug: params.slug[1],
      root: matter(fileContents).data.rootPath,
      parent: matter(fileContents).data.parent,
      path: matter(fileContents).data.path,
      title: matter(fileContents).data.title,
      faq: matter(fileContents).content,
    },
  };
}

export default SingleFaqPage;
