import { useRouter } from "next/router"

export default function Oferta({selectedProduct}){
    
    const router = useRouter()
    const parametro = router.query.ofertaid
    
    
    return(
        <>
        <p>{parametro}</p>
        </>
    )
}