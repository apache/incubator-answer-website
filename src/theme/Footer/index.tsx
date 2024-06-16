import React, { FC } from 'react';

const ApacheSvg = require('@site/static/img/apache/incubator.svg').default;

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container py-3">
        <div className="d-flex justify-content-between flex-wrap text-center">
          <div>
            <div className='mb-3'>
              <a href="https://incubator.apache.org/" target="_blank">
                <ApacheSvg role="img" />
              </a>
            </div>

            <div className="fs-14">
              <div>
                <span>Apache Answer is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</span>
              </div>

              <div className="my-3">
                <span>Copyright © 2023 - {year} The Apache Software Foundation, Licensed under the Apache License, Version 2.0.</span>
                <br />
                <span>Apache, the names of Apache projects, and the feather logo are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.</span>
              </div>

              <span>
                Feature icons by {' '}
                <a href="https://www.flaticon.com" className="link-secondary" target="_blank">
                  Freepik
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
