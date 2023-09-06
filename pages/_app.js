import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, PageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...PageProps} />
        </>

    )
}