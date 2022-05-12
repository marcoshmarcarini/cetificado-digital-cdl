import Image from "next/image"

function Vantagens(){
    return(
        <>
            <div className="vantagens">
                <div className="container">
                    <h2 className="vantagens-title-principal">5 BENEFÍCIOS DO CERTIFICADO DIGITAL</h2>
                </div>
                    <div className="vantagens-conteudo mt-5 container">
                        <div className="vantagens-item">
                            <div className="vantagens-icon-area">
                                <Image src="/images/icons/icon-1.svg" width={70} height={70} className="vantagens-icon" fill="#034C8C"/>  
                            </div>
                            <div className="vantagens-txt-area">
                                <h5 className="vantagens-title">Mais Segurança</h5>
                                <p className="vantagens-txt">
                                    Assine documentos digitalmente com validade jurídica de forma segura.
                                </p>
                            </div>
                        </div>
                        
                        <div className="vantagens-item">
                            <div className="vantagens-icon-area">
                                <Image src="/images/icons/icon-2.svg" width={70} height={70} className="vantagens-icon"/>  
                            </div>
                            <div className="vantagens-txt-area">
                                <h5 className="vantagens-title">Redução de Custos</h5>
                                <p className="vantagens-txt">
                                    Diga adeus às despesas com impressão de documentos e reconhecimento de firma.
                                </p>
                            </div>
                        </div>

                        <div className="vantagens-item">
                            <div className="vantagens-icon-area">
                                <Image src="/images/icons/icon-3.svg" width={70} height={70} className="vantagens-icon" />  
                            </div>
                            <div className="vantagens-txt-area">
                                <h5 className="vantagens-title">Menos Burocracia</h5>
                                <p className="vantagens-txt">
                                    Diversos tipos de serviço podem ser utilizados de forma 100% online.
                                </p>
                            </div>
                        </div>

                        <div className="vantagens-item">
                            <div className="vantagens-icon-area">
                                <Image src="/images/icons/icon-4.svg" width={70} height={70} className="vantagens-icon"/>  
                            </div>
                            <div className="vantagens-txt-area">
                                <h5 className="vantagens-title">Mobilidade</h5>
                                <p className="vantagens-txt">
                                    Onde quer que você esteja, assine documentos digitalmente em minutos.
                                </p>
                            </div>
                        </div>

                        <div className="vantagens-item">
                            <div className="vantagens-icon-area">
                                <Image src="/images/icons/icon-5.svg" width={70} height={70} className="vantagens-icon"/>  
                            </div>
                            <div className="vantagens-txt-area">
                                <h5 className="vantagens-title">Obrigatoriedade</h5>
                                <p className="vantagens-txt">
                                    Garanta a emissão de nota fiscal eletrônica para a sua empresa e evite multas.
                                </p>
                            </div>
                        </div>
                    
                    
                    
                </div>
            </div>
        </>
    )
}

export default Vantagens