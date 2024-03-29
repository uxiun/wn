/** @type {import('next').NextConfig} */
// const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : undefined
// const path = require("path");
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    //以下追加
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    // assetPrefix: urlPrefix,
    basePath: process.env.GITHUB_ACTIONS && "/wn",
    trailingSlash: true,
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

module.exports = withMDX(nextConfig)