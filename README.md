# VIP Starter

`VIP Starter` 是一个中文优先、文档驱动的前端原型长期模板。

## 这个项目怎么用

1. 运行 `npm install`
2. 运行 `npm run dev`
3. 直接告诉 Claude 你要做什么，或说“继续 `<domain>`”
4. 如果要新建领域，运行 `npm run new:domain -- <domain-name>`
5. 如果一开始就确定要产出交付物，再加 `--delivery`

`README.md` 是唯一的人类使用入口。  
AI 的阶段编排、读取顺序和冲突裁决统一由 `.claude/agents/guide-agent.md` 负责，不再依赖其他说明文档。

## 项目固定分层

```text
product-design-kit/   规范库
project/              项目状态与领域文档
src/                  代码实现
```

- `product-design-kit/`：AI 读取的规范库，回答“应该怎么做”
- `project/`：项目状态与领域文档，回答“当前做到哪了”
- `src/`：前端代码实现
- `.claude/`：machine-only 总控与阶段 skills
- `scripts/`：本地脚手架

## 领域目录怎么放

```text
project/
  domains/
    <domain>/
      design.md
      research.md
      tech/
      delivery/
        prd.md
        test-strategy.md
        test-cases.md
```

- `design.md`：给 AI / demo 实现看的业务与页面设计
- `research.md`：前期规划、会议增量和交付参考工作台
- `tech/`：人写的技术设计文档区，可放多份 `.md`
- `delivery/`：正式交付物输出区

固定边界：

- `design.md` 只保留会影响 AI / demo 实现的稳定设计结论
- `tech/` 不默认同步进 `design.md`
- 只有技术设计会改变页面、交互或 Mock 时，才需要回写 `design.md`
- `delivery/` 默认综合参考 `research.md`、`tech/` 和 `design.md`

## 协作方式

- 默认入口是直接对话，不需要自己判断当前该进哪个阶段
- `/guide <domain>` 只保留为兼容快捷入口
- 项目级视觉和品牌基线统一写在 `project/ui-brand.md`
- 当前项目状态统一写在 `project/overview.md`

## 真正需要知道的规范

- 项目级设计规范：`project/ui-brand.md`
- 设计初始化规范：`product-design-kit/design/design-init.md`
- 详细设计规范：`product-design-kit/design/product-design.md`
- 对外交付规范：`product-design-kit/design/external-prd.md`、`product-design-kit/design/test-strategy.md`、`product-design-kit/design/test-cases.md`
- 交付自查清单：`product-design-kit/tools/prd-checklist.md`

## 常用命令

```bash
npm run new:domain -- <domain-name> [--delivery]
npm run check
```

## 当前状态入口

- 项目总览：`project/overview.md`
- 项目级视觉规范：`project/ui-brand.md`

`/catalog` 只保留为通用列表页业务示例，用来演示 starter 当前的页面骨架，不再承担流程说明职责。
