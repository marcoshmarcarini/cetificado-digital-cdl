import Head from 'next/head'
import Script from 'next/script'

function Cabecalho (){
    return(
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>CDL Cachoeiro</title>
                
                <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-823462958"></Script>
                <Script async src="../lib/taggoogle.js" ></Script>
                
            </Head>
        </>
    )
}

export default Cabecalho