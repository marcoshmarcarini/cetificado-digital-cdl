
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GTM_ID } from '../lib/gtm'
import { FB_PIXEL_ID } from '../lib/fpixel'


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script
            dangerouslySetInnerHTML={{
              __html:
                `(function(w,l){` +
                `w[l] = w[l] || [];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});` +
                `})(window,'dataLayer');`,
            }}
          />
          <noscript>
            <img height="1" width="1" className="img-script" src={`"https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"`}/>
          </noscript>
        </Head>
        
        <body>
          <noscript>
                <iframe src={`"https://www.googletagmanager.com/ns.html?id=${GTM_ID}"`}
                height="0" width="0" style="display:none;visibility:hidden">
                </iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

