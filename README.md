# 网页二维码 Chrome Extension

一个优雅的 Chrome 扩展，可以为任何网页生成带有网站图标的二维码。

![Extension Screenshot](screenshots/demo.png)

## 功能特点

- 🔄 实时生成当前网页的二维码
- 🖼️ 在二维码中央优雅地显示网站图标
- 📱 扫码即可在移动设备上打开网页
- 🎨 精美的苹果风格界面设计
- 🚀 快速且轻量级

## 安装方法

### 从 Chrome 网上应用店安装

1. [访问 Chrome 网上应用店页面](#) (即将上线)
2. 点击"添加到 Chrome"

### 手动安装（开发版）

1. 下载或克隆此仓库
2. 打开 Chrome 浏览器，访问 `chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择项目目录

## 使用方法

1. 在任意网页点击扩展图标
2. 扩展会自动生成包含当前网页链接的二维码
3. 使用手机扫描二维码即可访问该网页

## 技术细节

- 使用 Manifest V3
- 使用 QRCode.js 生成二维码
- 最小权限要求 (仅 activeTab)
- 苹果风格设计系统 

## 项目结构
webpage-qrcode/
├── icons/ # 扩展图标
├── lib/ # 第三方库
├── popup/ # 弹出窗口相关文件
├── manifest.json # 扩展配置文件
├── LICENSE # 开源许可证
└── README.md # 项目说明

## 技术栈

- Chrome Extension Manifest V3
- HTML5 & CSS3
- JavaScript ES6+
- QRCode.js

## 开发说明

本扩展使用了以下第三方库：
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - 用于生成二维码

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 开源许可

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 作者

KellysLab - [GitHub](https://github.com/KellysLab)

## 致谢

- [QRCode.js](https://github.com/davidshimjs/qrcodejs)
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)