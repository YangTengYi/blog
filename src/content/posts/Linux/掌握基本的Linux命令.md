---
title: 掌握基本的 Linux 命令
published: 2026-05-20
pinned: true
description: "精心筛选出的那 20% 的核心 Linux 命令，决定你 80% 工作效率的关键。遵循帕累托法则，把有限的学习时间投入到最高频、最实用的命令上。"
image: "\images\linux\linux.jpg"
slug: /linux-basic-commands
tags: ["Linux", "命令行", "效率工具"]
category: Linux
draft: false
descriptionSource: ai
---

# 🐧 掌握基本的 Linux 命令

> 💡 **核心理念**：精心筛选出的那 **20%** 的核心 Linux 命令，决定你 **80%** 工作效率的关键。
>
> 遵循 **帕累托法则（二八定律）**，把有限的学习时间投入到最高频、最实用的命令上。

---

## 📑 目录

| 序号 | 章节 | 描述 | 难度 |
|:---:|:---|:---|:---:|
| 1 | [🚀 绝对核心](#-绝对核心) | 生存底线，每天必用 | ⭐ |
| 2 | [⚡ 高频利器](#-高频利器---效率倍增器) | 效率倍增器，进阶必备 | ⭐⭐ |
| 3 | [🛠️ 瑞士军刀](#-瑞士军刀---多功能工具) | 多功能工具，按需掌握 | ⭐⭐ |
| 4 | [☢️ 危险操作](#-危险操作) | 权限管理，谨慎使用 | ⭐⭐⭐ |
| 5 | [📝 总结与建议](#-总结与建议) | 学习策略与路线图 | — |
| 6 | [📖 命令速查手册](#-命令速查手册按场景分类) | 实战场景代码示例 | — |

---

## 🚀 绝对核心

> 🎯 **生存底线**：以下命令构成 Linux 操作的基础，每天高频使用，必须形成肌肉记忆。

| 命令 | 全称 | 功能 | 常用示例 |
|:---|:---|:---|:---|
| `cd` | **C**hange **D**irectory | 切换目录 | `cd ~` · `cd ..` · `cd -` · `cd /path/to/dir` |
| `ls` | **L**i**s**t | 列出目录内容 | `ls -l` (详情) · `ls -a` (隐藏文件) · `ls -lh` (人性化大小) |
| `pwd` | **P**rint **W**orking **D**irectory | 显示当前绝对路径 | `pwd` |
| `cp` | **C**o**p**y | 复制文件/目录 | `cp file1 file2` · `cp -r dir1 dir2` (递归) |
| `mv` | **M**o**v**e | 移动 / 重命名 | `mv oldname newname` · `mv file dir/` |
| `rm` | **R**e**m**ove | ⚠️ 删除文件/目录 | `rm file` · `rm -r dir` · `rm -i` (新手推荐) |
| `mkdir` | **M**a**k**e **Dir**ectory | 创建目录 | `mkdir new_dir` · `mkdir -p parent/child` |
| `cat` | **Cat**c**o**n**cat**enate | 查看/合并小文件 | `cat file.txt` |
| `less` | — | 分页查看大文件 | `less huge_log.log` (空格翻页, q退出) |
| `sudo` | **S**uper**U**ser **DO** | 管理员权限执行 | `sudo apt update` · `sudo nano /etc/file` |

---

## ⚡ 高频利器 - 效率倍增器

> 🔥 **进阶必备**：掌握这些命令，你的效率将获得质的飞跃。

| 命令 | 全称 | 功能 | 常用示例 |
|:---|:---|:---|:---|
| `grep` | **G**lobal **R**egular **E**xpression **P**rint | 文本搜索 | `grep "error" logfile` · `ps aux \| grep nginx` |
| `\|` | **P**ipe | 管道：连接命令输出与输入 | `command1 \| command2` |
| `man` | **Man**ual | 查看命令手册 | `man ls` · `man grep` |
| `nano` / `vim` | — | 文本编辑器 | `nano filename.txt` (推荐新手) |
| `echo` | — | 打印文本/变量 | `echo "Hello"` · `echo $PATH` |
| `ps` | **P**rocess **S**tatus | 查看进程 | `ps aux` (显示所有进程详情) |
| `kill` | — | 终止进程 | `kill PID` (温和) · `kill -9 PID` (强制) |

> 💡 **小贴士**：管道符 `|` 虽然不是独立命令，但绝对属于这 20%！它是 Linux 哲学的精髓——**组合小工具完成复杂任务**。

---

## 🛠️ 瑞士军刀 - 多功能工具

> 🔧 **按需掌握**：功能强大，使用场景广泛，遇到问题时它们是救星。

| 命令 | 功能 | 常用示例 |
|:---|:---|:---|
| `find` | 文件搜索（功能强大） | `find / -name "filename"` · `find . -type f -mtime -7` |
| `tar` | 打包 / 解压压缩包 | `tar -czvf archive.tar.gz files/` (创建) · `tar -xzvf archive.tar.gz` (解压) |
| `curl` / `wget` | 网络下载 / API 交互 | `curl -O https://example.com/file.zip` · `wget https://example.com/file.zip` |

> 📌 **建议**：`curl` 和 `wget` 掌握一个即可，`curl` 功能更广，推荐优先学习。

---

## ☢️ 危险操作

> ⚠️ **警告**：以下命令可能造成数据丢失或系统故障，操作前务必三思！

| 命令 | 全称 | 功能 | 风险等级 |
|:---|:---|:---|:---:|
| `chmod` | **Ch**ange **Mod**e | 修改文件/目录权限 | 🔴 高 |
| `chown` | **Ch**ange **Own**er | 修改文件所有者/组 | 🔴 高 |
| 通配符 `*` `?` `[]` | — | 批量匹配文件 | 🟡 中 |

**权限数字对照表（chmod）：**

| 数字 | 权限 | 字符 | 说明 |
|:---:|:---|:---:|:---|
| `7` | 读 + 写 + 执行 | `rwx` | 所有者常用 |
| `5` | 读 + 执行 | `r-x` | 目录/脚本常用 |
| `4` | 只读 | `r--` | 保护文件 |
| `0` | 无权限 | `---` | 完全禁止 |

> 🚨 **绝对禁忌**：`sudo rm -rf /` 会删除整个系统！永远不要执行！

---

## 📝 总结与建议

### 🏆 Top 10 核心命令

> 以下命令是 **生存底线**，请死磕到形成肌肉记忆：

```
cd  →  ls  →  pwd  →  cp  →  mv  →  rm  →  mkdir  →  cat/less  →  grep  →  sudo
                                          ↓
                              管道 |  +  man  =  无敌组合
```

### 📚 学习策略（6 步走）

| 步骤 | 策略 | 说明 |
|:---:|:---|:---|
| 1️⃣ | **先死磕 Top 10** | 每天用，形成肌肉记忆 |
| 2️⃣ | **善用 `man` 和 `--help`** | 遇到不会的命令，第一时间查手册 |
| 3️⃣ | **掌握管道 `\|` 和通配符 `*`** | 组合命令、批量操作的神器 |
| 4️⃣ | **谨慎使用 `rm` 和 `sudo`** | 操作前确认路径，新手用 `rm -i` |
| 5️⃣ | **选一个编辑器学好** | `nano` (简单) 或 `vim` (强大) |
| 6️⃣ | **实践！实践！实践！** | 在虚拟机 / 云服务器 / Docker 中练习 |

### 🎯 进阶路线图

```
✅ 当前阶段：掌握 20% 核心命令
       ↓
🔷 网络管理：ip / ping / ss / netstat
       ↓
🔷 系统监控：top / htop / df / du / free
       ↓
🔷 包管理器：apt (Debian) / yum (RHEL) / dnf / pacman
       ↓
🔷 Shell 脚本：bash 编程 / 自动化任务
       ↓
🔷 高级工具：awk / sed / xargs / tee / sort / uniq
```

> 💪 把这 20% 的核心命令练到炉火纯青，你在 Linux 命令行世界的工作效率就能轻松超越 80% 的用户！

---

## 📖 命令速查手册（按场景分类）

### 1️⃣ 文件导航与查看

> 📂 每天使用频率最高的操作

```bash
# 查看当前目录内容 (带文件大小和权限)
ls -lh
# -l: 详细信息 | -h: 人类可读大小

# 进入 Downloads 目录
cd ~/Downloads

# 显示当前路径
pwd  # 输出: /home/user/Downloads

# 查看文件内容 (适合小文件)
cat config.txt

# 分页查看日志 (空格翻页, q 退出)
less /var/log/syslog
```

---

### 2️⃣ 文件操作

> 📁 核心生存技能

```bash
# 复制文件并重命名
cp original.txt backup.txt

# 递归复制文件夹 (包含子目录)
cp -r project/ project_backup/

# 移动文件到目录
mv document.pdf ~/Documents/

# 重命名文件
mv oldname.txt newname.txt

# 创建目录树 (一次性创建多级目录)
mkdir -p project/{src,doc,test}

# 创建空文件
touch newfile.txt

# 删除文件 (谨慎！)
rm temporary.tmp

# 递归删除目录 (更谨慎！)
rm -r obsolete_code/  # -r: 递归删除
```

> 💡 **技巧**：`mkdir -p project/{src,doc,test}` 利用花括号展开，一次创建完整目录树。

---

### 3️⃣ 文本处理

> 🔍 数据处理利器

```bash
# 在文件中搜索 "error" (显示行号)
grep -n "error" server.log

# 递归搜索目录中的 Python 文件
grep -r "import numpy" ~/code/  # -r: 递归搜索

# 组合使用：查找进程 (管道符 | 是关键！)
ps aux | grep "nginx"

# 统计文件行数
wc -l data.csv  # 输出: 253 data.csv
```

---

### 4️⃣ 系统管理

> ⚙️ 需要 sudo 权限的操作

```bash
# 更新软件包列表 (Ubuntu/Debian)
sudo apt update

# 安装软件
sudo apt install htop

# 修改文件所有者
sudo chown user:group file.txt

# 添加可执行权限
chmod +x script.sh  # +x: 添加执行权限

# 查看进程树
pstree  # 显示进程关系

# 结束进程 (先用 ps 查 PID)
kill 1234     # 温和终止
kill -9 5678  # 强制终止
```

---

### 5️⃣ 网络操作

> 🌐 故障排查必备

```bash
# 测试网络连通性
ping google.com  # Ctrl+C 停止

# 下载文件
curl -O https://example.com/file.zip

# 查看监听端口
ss -tuln  # -t: TCP -u: UDP -l: 监听 -n: 数字格式
```

---

### 6️⃣ 查找与帮助

> 🔑 解决问题的钥匙

```bash
# 按名称查找文件
find ~/ -name "config*.json"  # 搜索家目录

# 查找最近修改的文件
find . -mtime -1  # 过去 24 小时修改的

# 查看命令手册
man grep  # 空格翻页, q 退出

# 快速帮助
ls --help  # 简洁版帮助
```

---

### 7️⃣ 组合技巧

> 🚀 效率倍增器

```bash
# 搜索并删除临时文件 (谨慎！)
find . -name "*.tmp" -exec rm {} \;

# 统计错误日志出现次数
grep -c "ERROR" app.log

# 实时监控日志更新
tail -f /var/log/app.log  # -f: 跟随模式

# 打包压缩文件夹
tar -czvf backup.tar.gz project/
# c:创建  z:gzip压缩  v:显示进度  f:文件名

# 解压文件
tar -xzvf backup.tar.gz
```

---

## 🎓 附录：常用参数速查

### `ls` 常用参数

| 参数 | 全称 | 功能 |
|:---:|:---|:---|
| `-l` | long | 长格式显示（权限、所有者、大小、时间） |
| `-a` | all | 显示隐藏文件（以 `.` 开头的文件） |
| `-h` | human-readable | 人类可读的文件大小（KB/MB/GB） |
| `-t` | time | 按修改时间排序 |
| `-r` | reverse | 反向排序 |

### `grep` 常用参数

| 参数 | 全称 | 功能 |
|:---:|:---|:---|
| `-n` | line-number | 显示行号 |
| `-r` | recursive | 递归搜索目录 |
| `-i` | ignore-case | 忽略大小写 |
| `-c` | count | 只输出匹配行数 |
| `-v` | invert-match | 反向匹配（显示不匹配的行） |

### `tar` 参数记忆法

> 🧠 **记忆口诀**：**C**reate / e**X**tract / **Z**ip / **V**erbose / **F**ile

| 参数 | 全称 | 功能 |
|:---:|:---|:---|
| `-c` | create | 创建新归档 |
| `-x` | extract | 解压归档 |
| `-z` | gzip | 使用 gzip 压缩 |
| `-v` | verbose | 显示详细过程 |
| `-f` | file | 指定归档文件名 |

---

## 📜 最后的话

> *"Linux 命令行的强大不在于单个命令，而在于它们能够通过管道 `|` 灵活组合，形成强大的处理流水线。"*

**记住**：熟练掌握这 20% 的核心命令，比浅尝辄止地了解 100% 的命令更有价值。

**加油！💪**

---

*📅 整理日期：2026-05-20*
*🏷️ 标签：`Linux` `命令行` `效率工具` `入门指南`*
