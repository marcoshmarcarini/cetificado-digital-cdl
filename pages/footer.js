import Image from 'next/image'

function Footer (){
    return (
        <div className="rodape">
            <Image 
            src="/images/logo-footer.svg" 
            alt="CDL Cachoeiro"
            width={50}
            height={50}
            />
        </div>
    )
}

export default Footer