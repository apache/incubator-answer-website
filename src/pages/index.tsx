import React from 'react';
import Layout from '@theme/Layout';
import HomePageHeader from '@site/src/components/HomePageHeader';
import HomepageMain from '@site/src/components/HomepageMain';
import Footer from '@site/src/components/Footer';


export default function Home(): JSX.Element {
  return (
    <Layout
      description="An open-source knowledge based community software. You can use it to quickly build your Q&A community for product technical support, user Q&A, fans communication, and more.">

      <main className='headerBg'>
        <HomePageHeader />
        <HomepageMain />
      </main>

      <Footer />
    </Layout>
  );
}
