import Image from 'next/image'
import Footer from './footer'
import Textos from './textos'

function Conteudo (){
    return(
        <div>
            <div className="conteudo">
                    <p className="txt-conteudo">Certificado Digital</p>
                    <Textos/>
                                <div className="imagem-post1">
                                    <div className="conteudo-imagem">
                                            <div className="imagem">
                                                <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                                    <Image src="/images/post-1.png" alt="Post 1" width={200} height={200} className="imgs"/>
                                                </a>
                                            </div>
                                            <div className="imagem">
                                                <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                                    <Image src="/images/post-2.png" alt="Post 1" width={200} height={200} className="imgs"/>
                                                </a>
                                            </div>
                                            <div className="imagem">
                                                <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                                    <Image src="/images/post-3.png" alt="Post 1" width={200} height={200} className="imgs"/>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="imagem-post2">
                                    <div className="conteudo-imagem">
                                        <div className="imagem">
                                            <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                                <Image src="/images/post-4.png" alt="Post 1" width={200} height={200} className="imgs"/>
                                            </a>
                                        </div>
                                        <div className="imagem">
                                            <a href="https://www.instagram.com/p/CTkaBO9reJc/" className="link-img">
                                                <Image src="/images/post-5.png" alt="Post 1" width={200} height={200} className="imgs"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/_n7sOxSJxlY" />
                    </div>
                    <div className="txt-contato">
                        <p>Faça já o seu certificado.<br/> Entre em contato pelos números abaixo.</p>
                    </div>
                    <div className="contato">
                        <div className="telefones">
                            <div className="contato1">
                                <a href="tel:+552835261600" className="tel-fixo">Obter Oferta!</a>
                            </div>
                            <div className="contato2">
                                <a href="https://wa.me/5528992985763?text=Olá!+Desejo+fazer+meu+certificado." className="tel-whats">WhatsApp</a>
                            </div>
                        </div>
                    </div>
                    <div className="txt-site">
                        <p>Conheça também o nosso site e obtenha mais informações.</p>
                    </div>
                    <div className="contato2">
                                <a href="http://cdlcachoeiro.com.br/" className="tel-site">CDL Cachoeiro</a>
                    </div>
                </div> 
        </div>
    )
}

export default Conteudo