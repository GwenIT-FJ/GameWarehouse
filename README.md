# Game Warehouse

一个使用 Next.js 和 Tailwind CSS 构建的在线游戏平台。

## 功能特点

- 游戏分类展示
- 最近游玩记录
- 游戏内嵌页面播放
- 响应式设计
- 滑动切换游戏列表

## 技术栈

- Next.js 13
- React 18
- Tailwind CSS
- Material Icons

## 开始使用

1. 克隆项目

```bash
git clone [your-repository-url]
cd game-warehouse
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 http://localhost:3002

## 项目结构

```
game-warehouse/
├── pages/              # 页面文件
├── public/             # 静态资源
│   └── assets/
│       └── images/     # 游戏图片
├── styles/             # 样式文件
├── components/         # React 组件
└── package.json        # 项目配置
```

## 开发说明

- 游戏图片存放在 `public/assets/images/games/` 目录下
- 使用 `next/image` 组件优化图片加载
- 使用 Tailwind CSS 进行样式开发
- 使用 Material Icons 图标库

## 部署

项目可以部署到 Vercel、Netlify 等平台：

```bash
npm run build
npm run start
```

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

MIT 