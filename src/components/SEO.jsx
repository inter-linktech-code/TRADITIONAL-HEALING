import { Helmet } from "react-helmet-async";

const SITE_NAME = "Ancestral Wisdom";
const SITE_URL = "https://your-domain.com";

function SEO({
  title,
  description,
  keywords,
  canonical,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Traditional Healing & Spiritual Guidance`;

  const defaultDescription =
    "Discover traditional spiritual consultation and guidance relating to love, relationships, prosperity, spiritual wellbeing and ancestral wisdom.";

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description || defaultDescription}
      />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      <meta name="robots" content="index, follow" />

      <meta name="author" content={SITE_NAME} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="theme-color" content="#0b0d0b" />

      <link
        rel="canonical"
        href={canonical || SITE_URL}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical || SITE_URL} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
    </Helmet>
  );
}

export default SEO;