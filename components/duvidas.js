function Duvidas(){
    return(
        <>
            <div className="container mt-5 mb-5" id="duvidas">
                <h2 className="text-center">DÚVIDAS FREQUENTES</h2>
                <div className="accordion-area">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    O que é certificado digital?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    O Certificado Digital <strong>é a identidade eletrônica de pessoas ou empresas, é como uma carteira de identificação virtual.</strong>Ele é uma alternativa mais sustentável, moderna e segura aos documentos em papel.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingdois">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedois" aria-expanded="true" aria-controls="collapsedois">
                                    Pra que serve o certificado digital?
                                </button>
                            </h2>
                            <div id="collapsedois" className="accordion-collapse collapse" aria-labelledby="headingdois" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                O Certificado Digital <strong>tem a mesma autenticidade e validade jurídica da assinatura em papel, assinada de próprio punho.</strong> Em suma, as utilizações são bem amplas, como <strong>assinar digitalmente contratos e ter acesso a serviços públicos por portais,</strong> como o da Receita Federal ou do INSS.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingtres">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetres" aria-expanded="true" aria-controls="collapsetres">
                                    Quais os tipos de certificado? 
                                </button>
                            </h2>
                            <div id="collapsetres" className="accordion-collapse collapse" aria-labelledby="headingtres" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Temos diversos tipos de Certificado Digital para atender as suas necessidades. As principais categorias são: e-CPF,</strong> a Identidade Digital destinada a pessoas físicas; e-CNPJ, a identidade de pessoas jurídicas e atrelado ao CNPJ; NF-e, o certificado digital para quem precisa emitir notas fiscais eletrônicas, é o reconhecimento da empresa diante dos órgãos públicos.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingquatro">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsequatro" aria-expanded="true" aria-controls="collapsequatro">
                                    Qual a validade do certificado digital? 
                                </button>
                            </h2>
                            <div id="collapsequatro" className="accordion-collapse collapse" aria-labelledby="headingquatro" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Diferentemente dos documentos físicos como RG e CPF, que não possuem prazo de validade, <strong>os Certificados Digitais têm um prazo de validade, que varia de 12 a 36 meses.</strong> O A1 (software) tem validade de 12 meses e o A3 (mídia física) pode ser de 12, 24 ou 36 meses.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingcinco">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecinco" aria-expanded="true" aria-controls="collapsecinco">
                                    Quem precisa do certificado digital? 
                                </button>
                            </h2>
                            <div id="collapsecinco" className="accordion-collapse collapse" aria-labelledby="headingcinco" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Todas as pessoas podem se beneficiar do Certificado Digital no dia a dia</strong>, seja na assinatura digital de documentos – evitando a necessidade de deslocamento até cartórios e gastos adicionais, <strong>ou até mesmo uma empresa que precisa emitir Nota Fiscal Eletrônica – caso em que a utilização da certificação é obrigatória.</strong>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Duvidas

