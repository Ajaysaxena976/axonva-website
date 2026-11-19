
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, path, image = "/logo.webp" }) => {
  const baseUrl = "https://www.axonvaventures.in";
  const canonicalUrl = `${baseUrl}${path}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Axonva Ventures" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default SEO;
