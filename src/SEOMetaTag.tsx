import { Helmet } from "react-helmet-async";

interface SEOMetaTagProps {
  title: string;
  description: string;
  keywords: string;
  imgsrc: string;
  url: string;
}
const SEOMetaTag = (props: SEOMetaTagProps) => {
  return (
    <Helmet>
      <title>{props.title}</title>

      <meta
        name="description"
        content={props.description}
        data-react-helmet="true"
      />
      <meta name="keywords" content={props.keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.imgsrc} />
      <meta property="og:url" content={props.url} />

      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.imgsrc} />

      <link rel="canonical" href={props.url} />
    </Helmet>
  );
};
export default SEOMetaTag;
