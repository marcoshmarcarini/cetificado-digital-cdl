import Image from 'next/image'





function BannerSite(){

    return(
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5 banner" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="/images/banner/Banner-1.png" className="d-block w-100" alt="..." width={1920} height={533} priority quality={100}/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/banner/Banner-2.png" className="d-block w-100" alt="..." width={1920} height={533} priority quality={100}/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/banner/Banner-3.png" className="d-block w-100" alt="..." width={1920} height={533} priority quality={100}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default BannerSite