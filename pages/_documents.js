import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Script
        strategy="lazyOnLoad"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GA_TRACKING_ID}');`,      
        }}
        />
        <Head />
        <body>
        {/*Tag do Facebook*/}
        <Script
        strategy="lazyOnLoad"
        dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '491643972326849');
                    fbq('track', 'PageView');`,
        }}


        />
          <Main />
          <NextScript />
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW29PBT"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
            </noscript>
            <noscript>
                <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=491643972326849&ev=PageView&noscript=1"/>
            </noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument

