# VIP Starter

`VIP Starter` 是一个中文优先、文档驱动的前端原型长期模板。

## 这个项目怎么用

1. 运行 `npm install`
2. 运行 `npm run dev`
3. 直接告诉 Claude 你要做什么,或说"继续 `<domain>`"
4. 如果要新建领域,运行 `npm run new:domain -- <domain-name>`
5. 如果一开始就确定要产出交付物,再加 `--delivery`

`README.md` 是唯一的人类使用入口。  
AI 的阶段编排、读取顺序和冲突裁决统一由 `.claude/agents/guide-agent.md` 负责,不再依赖其他说明文档。

## 项目固定分层

```text
product-design-kit/   规范库(AI 读,回答"应该怎么做")
project/              项目状态与领域文档(回答"当前做到哪了")
  ui-brand.md         项目级默认设计规范
  overview.md         项目总览与状态
  research/           项目级调研(跨领域、按迭代版本)
  tech/               项目级研发设计(跨领域、按迭代版本)
  delivery/           版本级对外交付产物(v1.x/...,AI 生成不手改)
  domains/<domain>/   业务领域长期资产
src/                  前端代码实现
.claude/              machine-only 总控与阶段 skills
scripts/              本地脚手架
```

## 领域目录怎么放

```text
project/
  domains/
    <domain>/
      design.md                 产品设计(给 AI / demo 实现)
      delivery/                 领域长期交付资产
        prd.md                  领域 PRD(权威源,持续演进)
        test/
          strategy.md
          cases.md
```

业务领域只放产品设计和领域长期资产。跨领域的调研放 `project/research/`,跨领域的研发设计放 `project/tech/`。

## 版本交付怎么走

- 日常:在各领域 `delivery/prd.md` 里持续加 / 改 PRD 条目(用稳定编号 `P-XXX`)
- 发版:触发 `/deliver <version>`,AI 自动从领域 PRD 组装完整 `project/delivery/v1.x/release-prd.md`
- release-prd 是产物,**不要手动编辑**。内容要改 → 回到领域 PRD 改 → 重新 `/deliver`

## 协作方式

- 默认入口是直接对话,不需要自己判断当前该进哪个阶段
- `/guide <domain>` 只保留为兼容快捷入口
- 项目级视觉和品牌基线统一写在 `project/ui-brand.md`
- 当前项目状态统一写在 `project/overview.md`

## 真正需要知道的规范

- 项目级设计规范:`project/ui-brand.md`
- 设计初始化规范:`product-design-kit/design/design-init.md`
- 详细设计规范:`product-design-kit/design/product-design.md`
- 对外交付规范:`product-design-kit/design/external-prd.md`、`product-design-kit/design/test-strategy.md`、`product-design-kit/design/test-cases.md`
- 交付自查清单:`product-design-kit/tools/prd-checklist.md`

## 常用命令

```bash
npm run new:domain -- <domain-name> [--delivery]
npm run check
```

## 当前状态入口

- 项目总览:`project/overview.md`
- 项目级视觉规范:`project/ui-brand.md`

`/catalog` 只保留为通用列表页业务示例,用来演示 starter 当前的页面骨架,不再承担流程说明职责。
