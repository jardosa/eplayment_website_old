import getAllPathsWithTitles from 'utils/getAllPathsWithTitles';
import FAQ from 'website/FAQ';

// eslint-disable-next-line react/prop-types
const FAQPage = ({ params }) => <FAQ params={params} />;

export async function getStaticProps() {
  return {
    props: {
      params: [...getAllPathsWithTitles()],
    },
  };
}

export default FAQPage;
