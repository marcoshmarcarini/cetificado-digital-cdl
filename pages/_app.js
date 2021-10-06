import '../styles/custom.css'
import * as gtag from '../lib/gtag'
import Script from 'next/script'
import Image from 'next/image'

export default function MyApp({Component, pageProps}){
    return( 
    <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js" />

    <Component {...pageProps}/>

    </>
    )
} 
