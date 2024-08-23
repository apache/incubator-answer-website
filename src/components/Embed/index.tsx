import { FC } from 'react';
import { Card } from 'react-bootstrap';
import Link from '@docusaurus/Link';

interface IProps {
  path: string;
  title: string;
  description: string;
  cover: string;
}

const Index:FC<IProps> = ({path, title, description, cover }) => {
  return (
    <Link to={path} className="mb-3 d-block">
      <Card>
        <Card.Body className='p-0 d-flex align-items-center w-100'>
          <div className='p-3' style={{ flex: 1, maxWidth: 'calc(100% - 170px)' }}>
            <h5>{title}</h5>
            <div className='text-truncate-3 text-secondary'>{description}</div>
          </div>
          <div
            style={{
              width: '170px',
              height: '170px',
              backgroundImage: `url(${require(`@site/static/img/blog/${cover}`).default})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
            }}
              className='d-block flex-shrink-0'/>
        </Card.Body>
      </Card>
    </Link>
  )
}


export default Index;
