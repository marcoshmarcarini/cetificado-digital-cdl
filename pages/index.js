//import Head from 'next/head'
import Cabecalho from './cabecalho'
import Conteudo from './conteudo'
import Footer from './footer'
import Script from 'next/script'


function PaginaInicial(){
    return (
            <div>
                <Cabecalho/>
                <Conteudo/>
                <Footer/>
                <Script src="../public/custom.js" strategy="afterInteractive"/> 
            </div>
        )
}

export default PaginaInicial