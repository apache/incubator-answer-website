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
    <Layout description="An open-source knowledge based community software. You can use it to quickly build your Q&A community for product technical support, user Q&A, fans communication, and more.">
      <div className="container mt-5">
        <div className="row justify-center">
          <div className="col col--10" style={{ marginBottom: '3.5rem' }}>
            <h1>Buy</h1>
            <p>
              Hey, we're glad to hear we've built an open source project worthy
              of your support. Unfortunately, you can't... yet.
            </p>
            <p className="margin-bottom--lg padding-bottom--md">
              Our immediate plan is to build a Q&A platform that works for a
              variety of different communities. So....
            </p>
            <HubspotForm
              portalId="23567456"
              formId="7c9bbb04-488a-4292-9f63-c87ccdb65f54"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
