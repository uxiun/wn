/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    //以下追加
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
}
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
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