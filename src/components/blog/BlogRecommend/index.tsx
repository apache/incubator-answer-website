import React, { memo } from 'react';
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
    <div className={clsx('row', styles.recommendWrap)}>
      <div className='col col--6'>
        <div>
          <Link to={data[0].permalink} className={clsx('margin-bottom--md', styles.block)}>
            <img
              className={styles.rounded}
              src={require(`@site/static/img/blog/${data[0].image}`).default} alt=""
            />
          </Link>
          <div className='margin-bottom--sm'>
            <Link
              to={generateCategoryPath(data[0].category)}>
                <Translate id={data[0].category}>
                  {data[0].category}
                </Translate>
            </Link>
          </div>
          <h2 className={clsx('margin-bottom--none text-truncate-2', styles.h2)}>
            <Link to={data[0].permalink} className={styles.black}>
              {data[0].title}
            </Link>
          </h2>
        </div>
      </div>

      <div className='col col--6'>
        {data.map((item, index) => {
          if (index === 0) return null;
            return (
              <div
                className={clsx(index === 4 ? '' : 'mb-4', styles.flex)}
                key={item.permalink}>
                <Link to={item.permalink} className={clsx('margin-right--md', styles.imgWrap)}>
                  <img
                    className={styles.rounded}
                    src={require(`@site/static/img/blog/${item.image}`).default} alt=""
                  />
                </Link>
                <div>
                  <div className="margin-bottom--sm">
                    <Link
                      to={generateCategoryPath(item.category)}>
                        <Translate id={item.category}>
                          {item.category}
                        </Translate>
                    </Link>
                  </div>
                  <h5 className={clsx('margin-bottom--none text-truncate-2', styles.h5)}>
                    <Link to={item.permalink} className={styles.black}>
                      {item.title}
                    </Link>
                  </h5>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default memo(Index);
