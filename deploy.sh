#!/bin/bash

# 设置变量
DEPLOY_PATH="/var/www/ZYi1024"
SOURCE_PATH=".output/public"

# 输出时间
echo "开始部署: $(date)"

# 确保目标目录存在
if [ ! -d "$DEPLOY_PATH" ]; then
    echo "创建部署目录: $DEPLOY_PATH"
    sudo mkdir -p "$DEPLOY_PATH"
fi

# 清理旧文件
echo "清理旧文件..."
sudo rm -rf "$DEPLOY_PATH"/*

# 复制新文件
echo "复制新文件到部署目录..."
sudo cp -r "$SOURCE_PATH"/* "$DEPLOY_PATH"/

# 设置权限
echo "设置文件权限..."
sudo chown -R www-data:www-data "$DEPLOY_PATH"
sudo chmod -R 755 "$DEPLOY_PATH"

echo "部署完成: $(date)"

# 检查 nginx 配置
echo "检查 Nginx 配置..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "重启 Nginx..."
    sudo systemctl restart nginx
    echo "部署成功！"
else
    echo "Nginx 配置检查失败，请检查配置文件"
    exit 1
fi 