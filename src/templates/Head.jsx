import { Helmet } from 'react-helmet-async';

export default function Head({ title, description, keywords, image, url, canonical, children }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}

      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {title && <meta property="og:type" content="website" />}
      {title && <meta property="og:title" content={title} />}
      {title && <meta property="og:site_name" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}

      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {canonical && <link rel="canonical" href={canonical} />}

      {children}
    </Helmet>
  );
}
