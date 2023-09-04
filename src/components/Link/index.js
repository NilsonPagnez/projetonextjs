import NextLink from "next/link"

function Link({ href, children, }) {
    return (
        <NextLink href={href}>{children}</NextLink>
    )
}

export default Link