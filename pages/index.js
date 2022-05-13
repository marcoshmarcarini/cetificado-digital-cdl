//import Head from 'next/head'
import BannerSite from '../components/banner'
import Cabecalho from '../components/cabecalho'
import Cta from '../components/cta'
import ConhecaSite from '../components/cta-site'
import Duvidas from '../components/duvidas'
import Ecnpj from '../components/ecnpj'
import Ecpf from '../components/ecpf'
import Footer from '../components/footer'
import MainMenu from '../components/menu'
import Vantagens from '../components/vantagens'
import Videos from '../components/videos'

function PaginaInicial(){
    return (
        <>
            <Cabecalho/>
                <MainMenu/>
                    <BannerSite/>
                    <Videos/>
                    <Ecnpj/>
                    <Ecpf/>
                    <Vantagens/>
                    <Duvidas/>
                    <div className='cta-espaco'>
                        <Cta/>
                        <ConhecaSite/>
                    </div>
                    
            <Footer/> 
        </>
    )
}

export default PaginaInicial