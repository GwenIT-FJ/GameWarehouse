# GitHub 上传指南

## 前提条件

1. 已安装 Git：如果您还没有安装 Git，请从 [git-scm.com](https://git-scm.com/) 下载并安装。
2. 已有 GitHub 账户：如果您还没有 GitHub 账户，请在 [github.com](https://github.com/) 注册。

## 详细步骤

### 1. 创建新的 GitHub 仓库

1. 登录 GitHub
2. 点击右上角的"+"图标，选择"New repository"
3. 设置仓库名称：`game-warehouse` 或 `monsterwinnerch-online`
4. 添加描述：`HTML5 Game Warehouse website for monsterwinnerch.online`
5. 保持"Public"选项
6. 不要初始化仓库（不勾选"Add a README file"）
7. 点击"Create repository"

### 2. 在您的本地项目文件夹中打开命令行

Windows 用户可以：
- 在文件夹空白处按住 Shift 键并右击，选择"在此处打开 PowerShell 窗口"
- 或者打开命令提示符，然后 `cd` 到您的项目文件夹

### 3. 初始化本地 Git 仓库并上传文件

在命令行中依次执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Initial commit - Game Warehouse website"

# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名，REPO_NAME 为您创建的仓库名称）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送到 GitHub
git push -u origin master
```

如果您使用的是 GitHub 的新默认分支"main"而不是"master"，请用以下命令替换最后一条：

```bash
git push -u origin main
```

### 4. 验证上传

1. 刷新您的 GitHub 仓库页面
2. 您应该能够看到所有上传的文件

## 启用 GitHub Pages (可选)

如果您想直接从 GitHub 托管这个网站：

1. 在您的仓库页面，点击"Settings"
2. 向下滚动到"GitHub Pages"部分
3. 在"Source"下拉菜单中，选择"master branch"或"main branch"
4. 点击"Save"
5. 页面刷新后，您将看到一个链接，表示您的站点已发布

## 需要帮助？

如果在上传过程中遇到任何问题：

1. 确保您已正确安装 Git 并配置了 GitHub 凭据
2. 检查您是否有权限访问 GitHub 仓库
3. 如果遇到"Authentication failed"错误，您可能需要：
   - 使用个人访问令牌进行身份验证
   - 或通过 SSH 而不是 HTTPS 克隆仓库

## 使用个人访问令牌 (如果需要)

如果您遇到身份验证问题，可以设置个人访问令牌：

1. 在 GitHub 上，点击您的头像 -> Settings -> Developer settings -> Personal access tokens
2. 点击"Generate new token"
3. 给令牌一个描述性名称，并勾选"repo"权限
4. 复制生成的令牌
5. 当 Git 要求输入密码时，输入此令牌而不是您的 GitHub 密码

## 配置 Git 用户信息

如果这是您第一次使用 Git，请设置您的用户名和邮箱：

```bash
git config --global user.name "您的名字"
git config --global user.email "您的邮箱"
``` 