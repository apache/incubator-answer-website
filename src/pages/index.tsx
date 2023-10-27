import React from 'react';
import Layout from '@theme/Layout';
import HomePageHeader from '@site/src/components/HomePageHeader';
import HomepageMain from '@site/src/components/HomepageMain';
import Head from '@docusaurus/Head';


export default function Home(): JSX.Element {
  return (
    <Layout
      description="A Q&A platform software for teams at any scales. Whether it’s a community forum, help center, or knowledge management platform, you can always count on Answer.">
      <Head>
        <title>Apache Answer | Free Open-source Q&A Platform</title>
      </Head>
      <main className='headerBg'>
        <HomePageHeader />
        <HomepageMain />
      </main>
    </Layout>
  );
}
