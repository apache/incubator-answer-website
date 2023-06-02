import React, { memo } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

interface Props {
  data: any[];
}

const Index = ({ data = [] }: Props) => {
  if (!data.length) return null;

  return (
    <div className='row padding-vert--xl'>
      <div className='col col-b col--6'>
        <div>
          <Link to={data[0].permalink} className={clsx('margin-bottom--md', styles.block)}>
            <img
              src={require(`@site/static/img/blog/${data[0].image}`).default} alt=""
            />
          </Link>
          <div className={styles.tagWrap}>
            {data[0].tags.map((tag, index) => {
              return (
                <Link
                  className={clsx('margin-bottom--sm', index === data[0].tags.length ? '' : 'margin-right--md', styles.block)}
                  to={tag.permalink}
                  key={tag.permalink}>
                    {tag.label}
                </Link>
              )
            })}

          </div>
          <h2 className={clsx('margin-bottom--none text-truncate-2', styles.h2)}>
            <Link to={data[0].permalink} className={styles.black}>
              {data[0].title}
            </Link>
          </h2>
        </div>
      </div>

      <div className='col col-b col--6'>
        {data.map((item, index) => {
          if (index === 0) return null;
            return (
              <div
                className={clsx(index === 4 ? '' : 'mb-4', styles.flex)}
                key={item.permalink}>
                <Link to={item.permalink} className={clsx('margin-right--md', styles.imgWrap)}>
                  <img
                    src={require(`@site/static/img/blog/${item.image}`).default} alt=""
                  />
                </Link>
                <div>
                  <div className={styles.tagWrap}>
                    {item.tags.map((tag, tagIndex) => {
                      return (
                        <Link
                          className={clsx('margin-bottom--sm', tagIndex === item.tags.length ? '' : 'margin-right--md', styles.block)}
                          to={tag.permalink}
                          key={tag.label}>
                            {tag.label}
                        </Link>
                      )
                    })}
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
