import React, { useEffect } from 'react';
import { Spinner, Container, Row, Col, Card } from 'react-bootstrap';
import Translate, { translate } from '@docusaurus/Translate';
import HubspotForm from 'react-hubspot-form';
import Layout from '@theme/Layout';
import Icon from '@site/src/components/Icon';

import HeaderSlogan from '../components/HeaderSlogan';

const supportList = [
  {
    key: 'email',
    url: 'mailto:dev@answer.apache.org',
    icon: <Icon name="envelope-fill" size="48px" className="text-primary" />,
    info: <Translate id="contact.email" values={{
            br: <br />,
          }}>
            {'Email us at {br} dev@answer.apache.org'}
          </Translate>,
  },
  {
    key: 'community',
    url: 'https://meta.answer.dev',
    icon: <Icon name="chat-square-text-fill" size="48px" className="text-primary" />,
    info: <Translate id="contact.community" values={{
              br: <br />,
            }}>
              {'Ask the {br} Answer Community'}
            </Translate>,
  },
  {
    key: 'twitter',
    url: 'https://twitter.com/answerdev',
    icon: <Icon name="twitter" size="48px" className="text-primary" />,
    info: <Translate id="contact.twitter" values={{
              br: <br />,
            }}>
              {'Tweet or Message {br} @AnswerDev on Twitter'}
            </Translate>,
  }
]

export default function Home(): JSX.Element {
  useEffect(() => {
    // 动态加载 js
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Layout title={translate({ message: 'Contact Us' })}
      description="Got a question? We're always here for you.">
      <HeaderSlogan type="contact" />
      <Container className='pb-5'>
        <h3 className="mt-5 mb-3">
          <Translate id="contact.getSupport">
            Get Support
          </Translate>
        </h3>
        <Row className='pb-5 mb-5'>
          {supportList.map(item => {
            return (
              <Col sm={12} md={6} lg={3} key={item.key} className='mb-4 mb-md-4'>
                <Card as="a" href={item.url} target='_blank'>
                  <Card.Body>
                    {item.icon}
                    <div className='fs-20 text-body mt-3'>
                      {item.info}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}

        </Row>

        <h3 className='mb-3'>
          <Translate id="contact.above.title">None of the Above?</Translate>
        </h3>
        <div className='mb-3'>
          <Translate id="contact.above.description"> If you don't find what you're looking for, please use the form below to submit your request. We'll try and get back to you as soon as possible.</Translate>
         </div>
         <Row>
          <Col md={12} lg={7} xl={5}>
            <HubspotForm
              portalId="23567456"
              formId="784f94e6-9bfd-4f5e-aeba-5ba40563de8c"
              loading={<div className='text-center'>
                <Spinner animation="border" role="status" variant="secondary">
                  <span className="visually-hidden">
                    <Translate id="loading">
                      Loading...
                    </Translate>
                  </span>
                </Spinner>
              </div> }
            />
          </Col>
         </Row>
      </Container>
    </Layout>
  );
}
