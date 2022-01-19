//import Head from 'next/head'
import Cabecalho from '../components/cabecalho'
import Conteudo from '../components/conteudo'
import Footer from '../components/footer'


function PaginaInicial(){
    return (
            <>
                
                <Cabecalho/>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW29PBT" height="0" width="0" className="iframe-tag"></iframe>
                </noscript>
                <Conteudo/>
                <Footer/> 
            </>
        )
}

export default PaginaInicial