import Image from "next/image"

function MainMenu(){
    return(
        <>
            <div className="main-menu fixed-top mb-5">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand logo-selo" href="/" >
                            <Image src="/images/logo_selo.png" width={45} height={45}/>
                        </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#ecnpj">E-CNPJ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ecpf">E-CPF</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#duvidas">Dúvida Frequentes</a>
                                </li>
                                
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.instagram.com/cdlcachoeiro/">
                                        <img src="https://img.icons8.com/ios/25/ffffff/instagram-new--v1.png"/>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/cdl.cachoeiro">
                                        <img src="https://img.icons8.com/ios/25/ffffff/facebook--v1.png"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MainMenu