/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : undefined
const path = require("path");
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    //以下追加
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

module.exports = {
    ...config,
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
}