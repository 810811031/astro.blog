# Blog

由 `md` 文件转成 `html` 文件  

## 项目的启与打包

```js
// 下载依赖
npm i 

// 启动
npm run dev

// 打包
npm run build
```

打包后为 `html` 文件位于 `dist` 文件夹内。

******

## 项目事要

* 在 `src/pages` 中添加 `*.md` 文件则会自动生成路由与界面,无需其他配置。`md`文件的顺序由 `src/config/index.js` 中配置而成。 
* `astro.config.mjs` 文件中的 `base` 是项目的基本地址。如写入 `/dist` 则实际打包地址为 `/dist/test.html`;
* `src/config/index.js` 为项目配置目前内容较少 详见注释。