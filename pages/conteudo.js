import Image from 'next/image'
import Footer from './footer'

function Conteudo (){
    return(
        <div>
            <div className="conteudo">
                    <p className="txt-conteudo">Certificado Digital</p>
                    <div className="imagem-post">
                        <div className="conteudo-imagem">
                                <div className="imagem">
                                    <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                        <Image src="/images/post-1.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                    </a>
                                </div>
                                <div className="imagem">
                                    <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                        <Image src="/images/post-2.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                    </a>
                                </div>
                                <div className="imagem">
                                    <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                        <Image src="/images/post-3.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                    </a>
                                </div>
                                <div className="imagem">
                                    <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                        <Image src="/images/post-4.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                    </a>
                                </div>
                                <div className="imagem">
                                    <a href="https://www.instagram.com/cdlcachoeiro/" className="link-img">
                                        <Image src="/images/post-5.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div className="video">
                        <iframe width="1024" height="768" src="https://www.youtube.com/embed/_n7sOxSJxlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video-yt"/>
                    </div>
                    <div className="txt-contato">
                        <p>Faça já o seu certificado.<br/> Entre em contato pelos números abaixo.</p>
                    </div>
                    <div className="contato">
                        <div className="telefones">
                            <div className="contato1">
                                <a href="tel:+552835261600" className="tel-fixo">Ligue agora</a>
                            </div>
                            <div className="contato2">
                                <a href="https://wa.me/5528992985763?text=Olá!+Desejo+fazer+meu+certificado." className="tel-whats">WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    )
}

export default Conteudo