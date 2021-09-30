//import Head from 'next/head'
import Cabecalho from '../components/cabecalho'
import Conteudo from '../components/conteudo'
import Footer from '../components/footer'
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