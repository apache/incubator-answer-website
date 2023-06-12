import React from 'react';
import Layout from '@theme/Layout';
import HomePageHeader from '@site/src/components/HomePageHeader';
import HomepageMain from '@site/src/components/HomepageMain';
import Head from '@docusaurus/Head';


export default function Home(): JSX.Element {
  return (
    <Layout
      description="An open-source knowledge-based community software. You can use it quickly to build Q&A community for your products, customers, teams, and more.">
      <Head>
        <title>Answer | Q&A Platforms</title>
      </Head>
      <main className='headerBg'>
        <HomePageHeader />
        <HomepageMain />
      </main>
    </Layout>
  );
}
