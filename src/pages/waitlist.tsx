import React, { useEffect } from 'react';
import HubspotForm from 'react-hubspot-form';
import Layout from '@theme/Layout';
import Footer from '@site/src/components/Footer';

export default function Home(): JSX.Element {
  useEffect(() => {
    // 动态加载js
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Layout title='Waitlist' description="An open-source knowledge-based community software. You can use it quickly to build Q&A community for your products, customers, teams, and more.">
      <div className="container mt-5">
        <div className="row justify-center">
          <div className="col col--10" style={{ marginBottom: '3.5rem' }}>
            <h1>Answer Cloud is coming soon!</h1>
            <p>
            We are working hard to build Answer Cloud, the SaaS version of Answer.
            </p>
            <p className="margin-bottom--lg padding-bottom--md">
            Fill out the form now to stay on top of the latest product updates, development inspirations, and user research prompt. In accordance with our privacy policy, we will keep your information secure at all times.
            </p>
            <HubspotForm
              portalId="23567456"
              formId="c5961d1c-d7ee-42e6-ab2f-bdaa3d3f2fc8"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
