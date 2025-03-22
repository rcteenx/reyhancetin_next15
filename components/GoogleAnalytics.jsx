import Script from "next/script";

const NEXT_PUBLIC_MEASUREMENT_ID = "G-RJ7GDNGP7Y";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_MEASUREMENT_ID}`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RJ7GDNGP7Y', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
