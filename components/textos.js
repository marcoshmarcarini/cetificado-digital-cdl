import Image from 'next/image'

function Textos (){
    return (
        <>
            <div className="paragrafo-1">
            <Image src="/images/certificado-digital.jpeg" width={200} height={200} className="img-certificado-m"/>
                <p className="txt-1">
                    Um Certificado Digital é a identidade eletrônica de uma 
                    pessoa ou uma empresa. É um documento inviolável, aceito 
                    legalmente. Mas você sabe para que serve um Certificado 
                    Digital?
                </p>
                <Image src="/images/certificado-digital.jpeg" width={200} height={200} className="img-certificado"/>
            </div>
            <div className="paragrafo-2">
                <Image src="/images/impress-digital.jpeg" width={200} height={200} className="img-identidade"/>
                <p className="txt-2">
                    Ele funciona como uma identificação autêntica e virtual, 
                    própria para assinatura de documentos. Ele dá o mesmo 
                    valor jurídico de uma assinatura feita à mão e nem é 
                    preciso reconhecer firma em cartório.
                </p>
            </div>
            <div className="paragrafo-3">
                <p className="txt-3">
                    Um certificado assim é protegido por criptografia, ou seja, 
                    com o que há de mais moderno em segurança digital, tornando 
                    sua assinatura inalterável. Com ele, você pode:
                </p>
            </div>
            <div className="paragrafo-lista">
                <div className="lista">
                    {/*
                        <Image src="/images/icons/docs.png" width={25} height={25} className="img-icone"/>
                    */}
                    <ion-icon name="document" id="img-icone"></ion-icon>
                    <p className="txt-icone">Assinar documentos digitais;</p>
                </div>
                <div className="lista">
                    {/*
                        <Image src="/images/icons/seguro.png" width={25} height={25} className="img-icone"/>
                    */}
                    <ion-icon name="lock" id="img-icone"></ion-icon>
                    <p className="txt-icone" >Acessar sistemas com dados restritos;</p>
                </div>
                <div className="lista">
                    {/*
                        <Image src="/images/icons/work.png" width={25} height={25} className="img-icone"/>
                    */}
                    <ion-icon name="laptop" id="img-icone"></ion-icon>
                    <p className="txt-icone">Trabalhar em sistemas virtuais;</p>
                </div>
                <div className="lista">
                    {/*
                        <Image src="/images/icons/task.png" width={25} height={25} className="img-icone"/>
                    */}
                    <ion-icon name="checkbox" id="img-icone"></ion-icon>
                    <p className="txt-icone">Executar um maior número de tarefas sem precisar se deslocar.</p>
                </div>
            </div>
            <div className="paragrafo-4">
                <p className="txt-4">
                    Rápido, prático, extremamente seguro e sem burocracia.
                </p>
            </div>
            <div className="area-btn-wpp">
                <a href="https://wa.me/5528992985763?text=Olá!+Desejo+fazer+meu+certificado." className="botao-whats">
                    Ligar agora
                </a>
            </div>
        </>
    )
}

export default Textos