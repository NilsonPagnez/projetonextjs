import Head from "next/head"
import { useEffect, useState } from "react"
import Link from "../src/components/Link"


export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const getFaq = await fetch(FAQ_API_URL)
        .then((response) => { return response.json() })
        .then((response) => { return response })

    return {
        props: {
            getFaq,
        }
    }
}

export default function faq({ getFaq }) {
    console.log(getFaq)
    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            <h1>
                faq
            </h1>
            <Link href='/'>
                Homepage
            </Link>
            <ul>
                {getFaq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>

    )
}