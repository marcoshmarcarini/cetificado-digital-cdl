import Image from "next/image"

function Ecpf(){
    return(
        <>
            <div className="container ecnpj-area">
                <h1 className="enpj-title" id="ecpf">E-CPF</h1>
                    <div className="ecnpj">
                        <div className="ecpf-card">
                            <Image src="/images/cards/e-cpf.png" width={480} height={280} />
                        </div>
                        <div className="ecnpj-txt">
                            <p>
                                O Certificado Digital e-CPF é a Identidade Digital destinada a pessoas físicas, 
                                é o seu CPF em versão digital, que te identifica no meio eletrônico e permite 
                                realizar diversos serviços. Com ele, você assina documentos digitalmente com 
                                validade jurídica e em poucos passos; também tem acesso à sites como da Receita 
                                Federal do Brasil (RFB), eSocial e Conectividade Social.
                            </p>
                            <p>
                                <b>O e-CPF te proporciona agilidade, facilidade, elimina burocracia, custos e a necessidade de se deslocar para validar documentos.</b>
                            </p>
                        </div>
                    </div>    
            </div>
        </>
    )
}

export default Ecpf