// @filename: global.d.ts
declare module '*.jpeg' {
  const imgUrl: string
  export default imgUrl
}

// @filename: global.d.ts
declare module '*.png' {
  const pngimgUrl: string
  export default pngimgUrl
}

declare module '*.module.css' {
  const css: { [key: string]: string }
  export default css
}
