module.exports = {
  title: "Emery's Blog",
  description: "Front end project and tips sharing",
  themeConfig: {
    siteTitle: "Emery", //左上角的
    logo: "/image/Emery.png", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    nav: [
      //右上角的导航栏
      {
        text: "前端基础", //导航标签的名字
        items: [
          //这种格式是有下拉菜单的版本
          { text: "基础", link: "/articles/basic/index" }, //text代表每一项的名字，link是连接的位置
          { text: "JS", link: "/articles/JS/index" },
          { text: "React", link: "/articles/react/index" },
          { text: "小程序", link: "/articles/mini/index" },
          { text: "Electron", link: "/articles/electron/index" },
          { text: "Web3D", link: "/articles/web3d/index" },
          { text: "其他", link: "/articles/other/vitepress/index" },
        ],
      },
      { text: "算法", link: "/leetcode/LEET_CODE题解/47. 全排列 II" }, //这种是没有下拉菜单的版本
      { text: "项目", link: "/intent/" },
    ],
    sidebar: {
      "/articles/basic": [
        {
          text: "基础", //标签名字
          collapsible: true, //是不是可以动态展开
          collapsed: true, //默认是不是展开
          items: [
            //孩子
            {
              text: "index", //标签名字
              link: "/articles/basic/index", //链接
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }], //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
  },
}
