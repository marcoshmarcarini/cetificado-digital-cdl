import Image from 'next/image'

function Footer (){
    return (
        <div className="rodape">
            <Image 
            src="/public/images/logo-footer.jpg" 
            alt="CDL Cachoeiro"
            width={20}
            height={20}
            />
        </div>
    )
}

export default Footer