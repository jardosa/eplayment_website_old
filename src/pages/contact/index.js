import dynamic from 'next/dynamic';

const DynamicContact = dynamic(() => import('website/Contact'));

const ContactPage = () => <DynamicContact />;

export default ContactPage;
