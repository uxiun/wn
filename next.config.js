/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // `MDXProvider`を使う場合はコメントを外すこと
        // providerImportSource: "@mdx-js/react",
    },
})

const config = withMDX(nextConfig)

module.exports = config