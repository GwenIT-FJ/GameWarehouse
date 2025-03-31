@echo off
echo ===== GitHub 上传助手 =====
echo 注意：请确保已安装Git并有GitHub账户

echo.
echo 1. 正在初始化Git仓库...
git init

echo.
echo 2. 请设置您的Git用户信息（如果已设置可忽略此错误）
set /p username="输入您的GitHub用户名: "
set /p email="输入您的GitHub邮箱: "
git config --global user.name "%username%"
git config --global user.email "%email%"

echo.
echo 3. 添加文件到Git...
git add .

echo.
echo 4. 提交更改...
git commit -m "Initial commit - Game Warehouse website"

echo.
echo 5. 请输入您的GitHub仓库信息
set /p gh_username="输入您的GitHub用户名: "
set /p repo_name="输入您创建的仓库名称(如game-warehouse): "

echo.
echo 6. 添加远程仓库并上传...
git remote add origin https://github.com/%gh_username%/%repo_name%.git

echo.
echo 7. 正在推送到GitHub...
echo 注意：如果要求输入密码，请使用您的GitHub个人访问令牌
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo 尝试推送到master分支...
    git push -u origin master
)

echo.
if %errorlevel% equ 0 (
    echo 恭喜！文件已成功上传到GitHub
    echo 仓库地址：https://github.com/%gh_username%/%repo_name%
    echo.
    echo 如果您想通过GitHub Pages托管此网站，请访问:
    echo https://github.com/%gh_username%/%repo_name%/settings
    echo 然后在GitHub Pages部分选择main或master分支作为来源。
) else (
    echo 上传过程中遇到问题。请参考github-upload.md文件获取帮助。
)

echo.
echo 按任意键结束...
pause > nul 