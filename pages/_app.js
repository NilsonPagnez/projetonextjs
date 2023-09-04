import GlobalStyle from "../src/components/Theme/GlobalStyle";

export default function MyApp({ Component, PageProps }) {
    return (
        <>
            <GlobalStyle/>
            <Component {...PageProps} />
        </>

    )
}