import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'

function PaginaInicial(){
    return (
            <div>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>CDL Cachoeiro</title>
                </Head>
                <div className="conteudo">
                    
                    <p className="txt-conteudo">Certificado Digital</p>
                
                    <div className="imagem-post">
                        <div className="conteudo-imagem">
                                <div className="imagem">
                                    <Image src="/images/post-1.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                </div>
                                <div className="imagem">
                                    <Image src="/images/post-2.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                </div>
                                <div className="imagem">
                                    <Image src="/images/post-3.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                </div>
                                <div className="imagem">
                                    <Image src="/images/post-4.png" alt="Post 1" width={300} height={300} className="imgs"/>
                                </div>
                                <div className="imagem">
                                    <Image src="/images/post-5.png" alt="Post 1" width={300} height={300} className="imgs"/>
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
                    <div className="rodape">
                        <Image src="/images/logo-footer.svg" alt="CDL Cachoeiro" width={50} height={50}/>
                    </div>
                </div> 
                <Script src="../public/custom.js" strategy="afterInteractive"/> 
            </div>
        )
}

export default PaginaInicial