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
      {/*-- Facebook Pixel Code -->*/}
    <Script dangerouslySetInnerHTML={{
          __html:
            `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1515461968801578');
            fbq('track', 'PageView');`,
            }} 
    />

    <noscript>
        <Image 
        height={1} 
        width={1} 
        style="display:none"
        src="https://www.facebook.com/tr?id=1515461968801578&ev=PageView&noscript=1"
        />
    </noscript>

    <Component {...pageProps}/>

    </>
    )
} 
