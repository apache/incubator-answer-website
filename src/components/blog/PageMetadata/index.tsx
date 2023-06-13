import React from 'react';
import Head from '@docusaurus/Head';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


type PageMetadataProps = {
  readonly title?: string;
  readonly description?: string;
  readonly keywords?: readonly string[] | string;
  readonly image?: string;
  readonly children?: React.ReactNode;
  readonly ogType?: 'website' | 'article';
};

// export function useTitleFormatter(title?: string | undefined): string {
//   const {siteConfig} = useDocusaurusContext();
//   const {title: siteTitle, titleDelimiter} = siteConfig;
//   return title?.trim().length
//     ? `${title.trim()} ${titleDelimiter} ${siteTitle}`
//     : siteTitle;
// }

export default function PageMetadata({
  title,
  ogType = 'website',
  description,
  keywords,
  image,
  children,
}: PageMetadataProps): JSX.Element {
  // const pageTitle = useTitleFormatter(title);
  const {withBaseUrl} = useBaseUrlUtils();
  const pageImage = image ? withBaseUrl(image, {absolute: true}) : undefined;

  return (
    <Head>
      {title && <title>{title} | Answer</title>}
      <meta property="og:site_name" content='Answer'/>
      <meta property="og:type" content={ogType} />
      {title && <meta property="og:title" content={`${title} | Answer`} />}

      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}

      {keywords && (
        <meta
          name="keywords"
          content={
            // https://github.com/microsoft/TypeScript/issues/17002
            (Array.isArray(keywords) ? keywords.join(',') : keywords) as string
          }
        />
      )}

      {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta name="twitter:image" content={pageImage} />}

      {/* <link rel="stylesheet" href={require('@site/src/css/bootstrap.min.css').default} /> */}

      {children}
    </Head>
  );
}
