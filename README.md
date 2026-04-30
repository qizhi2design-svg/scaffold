# scaffold

用于沉淀产品资料、讨论过程和交付产物的项目骨架。

这个仓库的目标不是承载业务代码，而是提供一套稳定、清晰、可复用的目录结构，方便在项目早期快速开始整理上下文、方案、PRD、原型和问题记录。

## 目录结构

```text
scaffold/
├── context/
│   ├── 01_产品架构/
│   ├── 02_功能模块/
│   ├── 03_上线功能/
│   ├── 04_运营材料/
│   └── 05_会议纪要/
├── draft/
│   ├── 临时目录/
│   └── 方案探索/
└── workspace/
    ├── bugs/
    ├── discussions/
    ├── prds/
    └── prototypes/
```

## 使用建议

### `context/`

用于沉淀相对稳定、可长期复用的项目背景信息，例如：

- 产品架构说明
- 功能模块拆分
- 已上线能力清单
- 运营材料
- 会议纪要

### `draft/`

用于临时性内容和探索过程，例如：

- 未定稿方案
- 临时草稿
- 过程性思考记录

适合定期整理，成熟后再迁移到 `context/` 或 `workspace/`。

### `workspace/`

用于当前正在推进的工作内容，例如：

- `prds/`：需求文档
- `prototypes/`：原型和交互方案
- `discussions/`：讨论记录、决策说明
- `bugs/`：问题记录与排查过程

其中 `workspace/prototypes/` 默认附带三套示例：

- `example/`：通用网页原型
- `mobile-demo/`：移动端原型
- `admin-demo/`：PC 后台原型

你可以直接在这些目录里继续修改，也可以作为新原型的参考骨架。

## 约定

- 目录通过 `.gitkeep` 保持空目录结构
- 正式内容优先使用 Markdown
- 建议文件名直接表达主题，减少“新建文档”“临时笔记”这类低信息量命名
- 阶段性草稿在确认后尽量归档到更稳定的位置

## 初始化后建议

可以直接将此目录作为独立仓库使用：

```bash
cd scaffold
git init
git checkout -b main
git add .
git commit -m "chore: initialize scaffold"
```

如果已经配置远程仓库：

```bash
git remote add origin git@github.com:qizhi2design-svg/scaffold.git
git push -u origin main
```
