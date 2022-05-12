import Image from 'next/image'

function Footer (){
    return (
        <>
            <div className="rodape">
                <Image src="/images/logo-footer.svg" alt="CDL Cachoeiro" width={70} height={70} />
            </div>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </>
    )
}

export default Footer