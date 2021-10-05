//import Head from 'next/head'
import Cabecalho from '../components/cabecalho'
import Conteudo from '../components/conteudo'
import Footer from '../components/footer'


function PaginaInicial(){
    return (
            <div>
                <Cabecalho/>
                <Conteudo/>
                <Footer/> 
            </div>
        )
}

export default PaginaInicial