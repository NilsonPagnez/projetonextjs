import { useEffect } from "react"
import Link from "../src/components/Link"

export default function faq(){
    useEffect(()=>{
        const FAQ_API_URL ='https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
        fetch(FAQ_API_URL)
        .then((response)=> response.json())
        .then((response) => console.log(response))
    }, [])
    return(
        <>
            <h1>
                faq
            </h1>
            <Link href='/'>
                Homepage
            </Link>
        </>

    )
}