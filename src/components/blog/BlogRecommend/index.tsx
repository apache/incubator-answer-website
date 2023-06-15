import React, { memo } from 'react';
import { Row, Col } from 'react-bootstrap';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { generateCategoryPath } from '@site/src/utils';

import styles from './index.module.css';

interface Props {
  data: any[];
}

const Index = ({ data = [] }: Props) => {
  if (!data.length || data.length < 2) return null;

  return (
    <Row className="py-5">
      <Col sm={12} lg={6} className='mb-4 mb-md-0'>
        <div>
          <Link to={data[0].permalink} className="mb-3 d-block">
            <img
              className="rounded"
              src={require(`@site/static/img/blog/${data[0].image.replace('@4x', '@2x')}`).default} alt=""
            />
          </Link>
          <div className='mb-2'>
            <Link
              to={generateCategoryPath(data[0].category)}>
                <Translate id={data[0].category}>
                  {data[0].category}
                </Translate>
            </Link>
          </div>
          <h2 className="mb-0 text-truncate-2">
            <Link to={data[0].permalink} className="text-body">
              {data[0].title}
            </Link>
          </h2>
        </div>
      </Col>

      <Col sm={12} lg={6}>
        {data.map((item, index) => {
          if (index === 0) return null;
            return (
              <div
                className={clsx('d-flex align-items-center w-100', index === 4 ? '' : 'mb-4')}
                key={item.permalink}>
                <Link to={item.permalink} className={clsx('me-3', styles.imgWrap)}>
                  <img
                    className="rounded"
                    src={require(`@site/static/img/blog/${item.image.replace('@4x', '@2x')}`).default} alt=""
                  />
                </Link>
                <div>
                  <Link
                    className="mb-2 d-block"
                    to={generateCategoryPath(item.category)}>
                      <Translate id={item.category}>
                        {item.category}
                      </Translate>
                  </Link>
                  <h5 className="mb-0 text-truncate-2">
                    <Link to={item.permalink} className="text-body">
                      {item.title}
                    </Link>
                  </h5>
                </div>
              </div>
            )
        })}
      </Col>
    </Row>
  )
}

export default memo(Index);
