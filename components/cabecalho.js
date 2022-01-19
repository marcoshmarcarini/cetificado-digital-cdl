import Head from 'next/head'
import Script from 'next/script'

function Cabecalho (){
    return(
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>CDL Cachoeiro</title>
                <Script async src="../lib/gtagnova.js"></Script>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-823462958"></Script>
                <Script async src="../lib/taggoogle.js" ></Script>
                <Script async src="../lib/tagface.js"></Script>
                <noscript>
                    <img height="1" width="1" className="img-script" src="https://www.facebook.com/tr?id=491643972326849&ev=PageView&noscript=1"/>
                </noscript>
            </Head>
        </>
    )
}

export default Cabecalho