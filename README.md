# 🎨 Lynne Chen Illustration Portfolio  
Lynne 插画作品集网站  

This is the personal portfolio website of freelance illustrator **Lynne Chen**, showcasing her illustration works, style, and a mock store page.  
这是自由插画师 **Lynne** 的个人作品集网站，用于展示她的插画风格、艺术理念，并包含一个模拟商店页面。

---

## 🧩 Project Overview | 项目简介

**功能模块 Features:**

- 🖼️ **Homepage / 首页** (`index.html`)  
  Displays illustration works with zoom-in modal and detailed descriptions.  
  插画作品展示区，点击图片可放大预览并查看说明。

- 👤 **About & Contact / 关于与联系**  
  Dynamically loads about information within the main page.  
  点击导航中 "ABOUT & CONTACT" 后在本页加载介绍内容。

- 🛍️ **Shop Page / 商店页** (`shop.html`)  
  A mock store interface that allows:
  - Clicking images to preview
  - Adjusting quantities
  - Adding items to a cart
  - Simulated checkout  
  模拟电商购物界面，可点击查看大图、调整数量并加入购物车。

---

## 🛠 Tech Stack | 技术栈

- HTML / CSS / 原生 JavaScript
- Google Fonts: [Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex)
- 图标库: [RemixIcon](https://remixicon.com/)

---

## 📁 Directory Structure | 项目结构
illustration-portfoliio/
├── css/ # 样式文件
│ ├── common.css
│ ├── shop.css
├── image/ # 图片资源
│ ├── 1.jpg ~ 12.jpg
│ └── icon.png
├── js/ # 脚本
│ ├── about.js
│ ├── shop.js
│ └── descriptions.js
├── index.html # 首页
├── shop.html # 商店页面
└── README.md # 本文件

## 📸 Screenshots | 页面截图

### 🏠 Homepage
![Homepage](screenshots/homepage.png)

### 🛍️ Shop Page
![Shop Page](screenshots/shop-page.png)

### 👤 About Section
![About](screenshots/about-section.png)

### 🛒 Cart Popup
![Cart Popup](screenshots/cart-popup.png)

### 🖼️ Image Overlay
![Image Overlay](screenshots/image-overlay.png)

## 🧪 Run Locally | 本地运行

```bash
git clone https://github.com/lynnec88/illustration-portfoliio.git
cd illustration-portfoliio
打开 index.html 或 shop.html 即可在浏览器查看。

推荐使用 VSCode + Live Server 插件预览。

📦 GitHub Pages Deployment | 部署到 GitHub Pages（可选）
确保 index.html 为首页文件。

所有路径均为相对路径（项目已设置）。

打开 GitHub 仓库设置 → Pages → 选择 main 分支作为部署源。

🧑‍🎨 About the Artist | 关于插画师
👩‍🎨 Illustrator & Web Developer: Lynne Chen

🌐 Instagram @lynnechen.art

🎨 Dribbble @lynnechen1

📩 Email: cllin206@gmail.com

📄 License | 版权说明
此项目仅用于作品展示与 UI 模拟，非商业用途。
This project is for portfolio and demonstration purposes only.

© 2024-2025 | Coded by Lynne Chen

