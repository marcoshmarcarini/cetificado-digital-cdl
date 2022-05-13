import Image from "next/image"

function Ecnpj(){
    return(
        <>
            <div className="container ecnpj-area">
                <h1 className="ecnpj-title" id="ecnpj">E-CNPJ</h1>
                    <div className="ecnpj">
                        <div className="ecnpj-txt">
                            <p>
                                O e-CNPJ é a identidade Digital destinada a pessoas jurídicas e atrelado ao CNPJ, 
                                que te identifica no meio eletrônico e permite realizar diversos serviços. Com ele 
                                é possível assinar documentos digitalmente, transmitir dados e atender aos compromissos 
                                fiscais que toda empresa tem com o Governo, garantindo a integridade e segurança das informações. 
                                Além disso, também tem acesso à sites como da Receita Federal do Brasil (RFB), eSocial e Conectividade Social.
                            </p>
                            <p>
                                <b>O e-CNPJ te proporciona agilidade, facilidade, elimina burocracia, custos e a necessidade de se deslocar para validar documentos.</b>
                            </p>
                        </div>
                        <div className="ecnpj-card">
                            <Image src="/images/cards/e-cnpj.png" width={480} height={280}/>
                        </div>
                    </div>    
            </div>
        </>
    )
}

export default Ecnpj