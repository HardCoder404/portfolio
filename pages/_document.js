import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta */}
        <title>Prince Raj | Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Official portfolio of Prince Raj, a Software Engineer specializing in full-stack development, cloud deployment, and modern web technologies."
        />
        <meta name="author" content="Prince Raj" />
        <meta
          name="keywords"
          content="Prince Raj, Software Engineer, Full Stack Developer, MERN, Next.js, Cloud, Portfolio"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prince Raj | Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Prince Raj's projects, skills, and experience in full-stack software engineering."
        />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://princeraj-one.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Prince Raj | Software Engineer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore Prince Raj's projects, skills, and experience in full-stack software engineering."
        />
        <meta name="twitter:image" content="/preview.png" />

        {/* Schema Markup for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prince Raj",
              jobTitle: "Software Engineer",
              url: "https://princeraj-one.vercel.app/",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
              ],
            }),
          }}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
