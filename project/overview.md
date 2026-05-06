# 项目总览

> 默认保存为 `project/overview.md`。

## 项目概况

- 项目名称:VIP Starter
- 项目定位:文档驱动的前端原型长期模板
- 技术栈:React + Vite + Ant Design + 本地 Mock
- 数据策略:本地 Mock
- 当前阶段:模板整理

## 项目目标

- 保留一套长期稳定的规范库
- 通过默认直接对话的 `guide-agent` 推进领域级流水线
- 用最小示例页演示当前 starter 的通用页面骨架

## 领域清单

| 领域 | 当前阶段 | G0 | G1 | G2 | 设计文档 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| 暂无 | - | - | - | - | - | 直接描述需求或说"继续 `<domain>`"即可开始 |

## 项目级内容入口

| 内容类型 | 位置 | 组织方式 |
| --- | --- | --- |
| 项目级调研 | `project/research/` | 按版本命名,如 `v1.0-market-scan.md` |
| 项目级研发设计 | `project/tech/` | 按版本命名,如 `v1.0-architecture.md` |
| 版本对外交付 | `project/delivery/v1.x/` | 每版一个子目录,`release-prd.md` 由 AI 生成 |
| 项目级视觉规范 | `project/ui-brand.md` | 长期稳定 |

## 共享概念

| 概念 | 说明 | 是否跨领域 |
| --- | --- | --- |
| 领域 | 项目推进的主单位,对应 `project/domains/<domain>/` | 是 |
| 模块 | 领域下的页面或功能单元,统一在 `design.md` 中组织 | 是 |

## 跨领域约定

- 主存放方式:业务文档按领域组织,跨领域内容按项目级目录组织
- 项目级设计规范:`project/ui-brand.md`
- 业务领域必有项:`design.md`(产品设计)
- 业务领域按需:`delivery/`(领域长期 PRD 和测试用例)
- 项目级调研:`project/research/`,按迭代版本
- 项目级研发设计:`project/tech/`,按迭代版本
- 版本化对外交付:`project/delivery/v1.x/`,AI 从领域 PRD 组装
- 规范来源:`product-design-kit/`

## 公共能力

- 现有页面骨架:`NavigationLayout`、`TablePageLayout`
- 现有通用组件:`SearchBar`、`DataTable`、`Pagination`、`DialogWrapper`
- 现有示例页面:`/catalog`
- 待补公共能力:-

## 当前优先级

| 优先级 | 领域 / 模块 | 原因 |
| --- | --- | --- |
| P0 | 模板文档与协作流程 | 验证单一事实来源收口后的稳定性 |

## 当前下一步

- 完善 `project/ui-brand.md`,并用一个真实领域试跑 `breakdown -> design -> build`,确认入口、规范引用和状态回写保持一致。
