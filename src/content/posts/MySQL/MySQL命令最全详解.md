---
title: MySQL 命令最全详解
published: 2026-07-20
description: "从登录到优化，一份涵盖 MySQL 核心命令的实战速查手册。包含数据库操作、表管理、CRUD、索引与执行计划等高频命令详解。"
image: "/images/mysql.webp"
slug: /mysql-commands
tags: ["MySQL", "数据库", "SQL", "运维"]
category: MySQL
draft: false
descriptionSource: ai
---

# 🗄️ MySQL 命令最全详解

> 💡 **本文目标**：系统梳理 MySQL 最核心的命令，覆盖从登录连接到性能优化的完整链路。
>
> 无论你是开发还是运维，这份速查手册都能帮助你在日常工作中快速定位所需命令。

---

## 📑 目录

| 序号 | 命令 | 描述 | 使用频率 |
|:---:|:---|:---|:---:|
| 1 | [`mysql`](#1-mysql登录数据库) | 登录数据库 | ⭐⭐⭐ |
| 2 | [`SHOW DATABASES`](#2-show-databases) | 查看所有数据库 | ⭐⭐⭐ |
| 3 | [`CREATE DATABASE`](#3-create-database) | 创建数据库 | ⭐⭐ |
| 4 | [`USE`](#4-use) | 切换数据库 | ⭐⭐⭐ |
| 5 | [`SHOW TABLES`](#5-show-tables) | 查看所有表 | ⭐⭐⭐ |
| 6 | [`CREATE TABLE`](#6-create-table) | 创建数据表 | ⭐⭐ |
| 7 | [`INSERT`](#7-insert) | 插入数据 | ⭐⭐⭐ |
| 8 | [`SELECT`](#8-select) | 查询数据 | ⭐⭐⭐ |
| 9 | [`UPDATE`](#9-update) | 修改数据 | ⭐⭐⭐ |
| 10 | [`DELETE`](#10-delete) | 删除数据 | ⭐⭐ |
| 11 | [`ALTER TABLE`](#11-alter-table) | 修改表结构 | ⭐⭐ |
| 12 | [`DROP`](#12-drop) | 删除数据库对象 | ⭐ |
| 13 | [`EXPLAIN`](#13-explain) | SQL 执行计划 | ⭐⭐⭐ |

---

## 1. mysql（登录数据库）

进入 MySQL 的入口命令。

### 本地登录

```bash
mysql -u root -p
```

输入密码即可登录。

### 远程登录

```bash
mysql -h 192.168.10.100 -P 3306 -u root -p
```

### 参数说明

| 参数 | 说明 |
|:---:|:---|
| `-h` | 主机 IP |
| `-P` | 端口 |
| `-u` | 用户名 |
| `-p` | 密码 |

> ⚠️ **注意**：`-p` 与密码之间**没有空格**，如果直接在命令行输入密码会有安全风险，建议只写 `-p` 然后回车输入。

---

## 2. SHOW DATABASES

查看所有数据库。

```sql
SHOW DATABASES;
```

**输出示例：**

```
mysql
information_schema
performance_schema
sys
order_db
```

> 🔍 线上排查数据库时经常使用，快速确认目标数据库是否存在。

---

## 3. CREATE DATABASE

创建数据库。

### 基本创建

```sql
CREATE DATABASE order_db;
```

### 指定字符集

```sql
CREATE DATABASE order_db
CHARACTER SET utf8mb4;
```

> ✅ **最佳实践**：推荐统一使用 `utf8mb4`，支持完整的 Unicode 字符（包括 Emoji），避免乱码问题。

---

## 4. USE

切换数据库。

```sql
USE order_db;
```

查看当前所在数据库：

```sql
SELECT DATABASE();
```

> 📌 开发过程中几乎每天都会使用。

---

## 5. SHOW TABLES

查看数据库中的所有表。

```sql
SHOW TABLES;
```

**输出示例：**

```
user
order
product
```

### 查看表结构

```sql
DESC user;
```

### 查看建表语句

```sql
SHOW CREATE TABLE user;
```

> 🔍 线上迁移数据库时经常需要查看完整的建表语句。

---

## 6. CREATE TABLE

创建数据表。

```sql
CREATE TABLE user (
    id          BIGINT PRIMARY KEY AUTO_INCREMENT,
    username    VARCHAR(50),
    age         INT,
    create_time DATETIME
);
```

### 查看建表语句

```sql
SHOW CREATE TABLE user;
```

> 📌 线上迁移数据库时经常需要。

---

## 7. INSERT

插入数据。

### 单条插入

```sql
INSERT INTO user (username, age)
VALUES ('Tom', 20);
```

### 批量插入

```sql
INSERT INTO user (username, age)
VALUES
    ('Tom', 20),
    ('Jack', 22),
    ('Lucy', 18);
```

> ⚡ **性能提示**：批量插入性能远高于循环单条插入，大批量数据导入时务必使用批量方式。

---

## 8. SELECT

MySQL 最核心命令。

### 查询全部

```sql
SELECT * FROM user;
```

### 条件查询

```sql
SELECT *
FROM user
WHERE age > 20;
```

### 排序

```sql
SELECT *
FROM user
ORDER BY age DESC;
```

### 分页

```sql
SELECT *
FROM user
LIMIT 0, 10;
```

### 聚合统计

```sql
SELECT COUNT(*)
FROM user;
```

> 📊 `SELECT` 是线上出现频率最高的命令，掌握各种查询语法是 MySQL 的基本功。

---

## 9. UPDATE

修改数据。

### 单条更新

```sql
UPDATE user
SET age = 25
WHERE id = 1;
```

### 批量更新

```sql
UPDATE user
SET age = age + 1
WHERE age < 18;
```

### ⚠️ 危险操作

```sql
UPDATE user
SET age = 25;
```

> 🚨 **没有 `WHERE` 条件会修改整张表！这是线上事故高发区。**
>
> **安全建议**：
> - 更新前先用 `SELECT` 查出受影响的数据
> - 确认 `WHERE` 条件无误后再执行 `UPDATE`
> - 生产环境建议加 `LIMIT` 限制影响行数

---

## 10. DELETE

删除数据。

### 删除指定记录

```sql
DELETE FROM user
WHERE id = 1;
```

### 删除全部

```sql
DELETE FROM user;
```

### 危险操作

```sql
DELETE FROM user
WHERE 1 = 1;
```

> 🚨 **生产环境必须谨慎执行！**
>
> - `DELETE` 删除的数据可以通过事务回滚（如果未提交）
> - 如果要清空整张表，`TRUNCATE TABLE` 更快（但不可回滚）
> - 删除前务必确认 `WHERE` 条件

---

## 11. ALTER TABLE

修改表结构。线上版本迭代最常见命令之一。

### 新增字段

```sql
ALTER TABLE user
ADD email VARCHAR(100);
```

### 修改字段

```sql
ALTER TABLE user
MODIFY email VARCHAR(200);
```

### 删除字段

```sql
ALTER TABLE user
DROP COLUMN email;
```

### 添加索引

```sql
ALTER TABLE user
ADD INDEX idx_username (username);
```

> ⚠️ **线上注意**：`ALTER TABLE` 在大表上可能锁表，生产环境建议在低峰期执行或使用 `pt-online-schema-change` 等工具。

---

## 12. DROP

删除数据库对象。

### 删除表

```sql
DROP TABLE user;
```

### 删除数据库

```sql
DROP DATABASE order_db;
```

> 🚨 **执行前建议先确认：**
> ```sql
> SHOW TABLES;
> ```
> 确认后再操作，**`DROP` 不可回滚**。

---

## 13. EXPLAIN

SQL 优化最重要命令。

### 查看执行计划

```sql
EXPLAIN
SELECT *
FROM user
WHERE username = 'Tom';
```

### 典型结果

| 字段 | 含义 |
|:---|:---|
| `type` | 访问类型 |
| `key` | 使用的索引 |
| `rows` | 扫描行数 |
| `Extra` | 额外信息 |

### 重点关注

#### `type` — 访问类型

| type 值 | 性能 | 说明 |
|:---|:---:|:---|
| `system` | 最好 | 表只有一行 |
| `const` | 极好 | 主键 / 唯一索引等值查询 |
| `eq_ref` | 极好 | 关联查询使用主键或唯一索引 |
| `ref` | 好 | 非唯一索引等值查询 |
| `range` | 较好 | 索引范围扫描 |
| `index` | 一般 | 扫描整个索引树 |
| **`ALL`** | **最差** | **全表扫描，性能最差** |

> 🚨 `type = ALL` 表示全表扫描，是优化的首要目标。

#### `rows` — 扫描行数

扫描数据量越大越慢，应通过索引将 `rows` 降到最低。

#### `Extra` — 额外信息

| Extra 值 | 说明 |
|:---|:---|
| `Using index` | ✅ 覆盖索引，无需回表 |
| **`Using filesort`** | ⚠️ 额外排序，需优化 |
| **`Using temporary`** | ⚠️ 使用临时表，需优化 |
| `Using where` | 使用 WHERE 过滤 |

> 🎯 `Using filesort` 和 `Using temporary` 是优化的重点对象。

---

## 📝 总结

| 场景 | 推荐命令 |
|:---|:---|
| 日常查询 | `SELECT` / `WHERE` / `ORDER BY` / `LIMIT` |
| 数据变更 | `INSERT` / `UPDATE` / `DELETE` |
| 表结构管理 | `CREATE TABLE` / `ALTER TABLE` / `DROP` |
| 性能排查 | `EXPLAIN` |
| 安全操作 | 先 `SELECT` 再 `UPDATE` / `DELETE` |

> 💡 **核心原则**：写 SQL 前，先想清楚你要操作哪些数据；执行前，先确认条件是否正确。
