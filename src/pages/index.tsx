import React from 'react';
import Layout from '@theme/Layout';
import HomePageHeader from '@site/src/components/HomePageHeader';
import HomepageMain from '@site/src/components/HomepageMain';
import Footer from '@site/src/components/Footer';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="answer"
      description="Description will go into a meta tag in <head />">

      <main>
        <HomePageHeader />
        <HomepageMain />
      </main>

      <Footer />
    </Layout>
  );
}
