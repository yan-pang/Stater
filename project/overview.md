# 项目总览

> 默认保存为 `project/overview.md`。

## 项目概况

- 项目名称：VIP Starter
- 项目定位：文档驱动的前端原型长期模板
- 技术栈：React + Vite + Ant Design + 本地 Mock
- 数据策略：本地 Mock
- 当前阶段：模板整理

## 项目目标

- 保留一套长期稳定的规范库
- 通过默认直接对话的 `guide-agent` 推进领域级流水线
- 用最小示例页演示当前 starter 的通用页面骨架

## 领域清单

| 领域 | 当前阶段 | G0 | G1 | G2 | 设计文档 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| 暂无 | - | - | - | - | - | 直接描述需求或说“继续 `<domain>`”即可开始 |

## 共享概念

| 概念 | 说明 | 是否跨领域 |
| --- | --- | --- |
| 领域 | 项目推进的主单位，对应 `project/domains/<domain>/` | 是 |
| 模块 | 领域下的页面或功能单元，统一在 `design.md` 中组织 | 是 |

## 跨领域约定

- 主存放方式：按领域组织文档
- 项目级设计规范：`project/ui-brand.md`
- 领域文档必有项：`design.md`、`research.md`
- 技术设计文档区：`project/domains/<domain>/tech/`
- 设计初始化规范：`product-design-kit/design/design-init.md`
- 详细设计规范：`product-design-kit/design/product-design.md`
- 按需文档：`tech/`、`delivery/`
- 规范来源：`product-design-kit/`

## 公共能力

- 现有页面骨架：`NavigationLayout`、`TablePageLayout`
- 现有通用组件：`SearchBar`、`DataTable`、`Pagination`、`DialogWrapper`
- 现有示例页面：`/catalog`
- 待补公共能力：-

## 当前优先级

| 优先级 | 领域 / 模块 | 原因 |
| --- | --- | --- |
| P0 | 模板文档与协作流程 | 验证单一事实来源收口后的稳定性 |

## 当前下一步

- 完善 `project/ui-brand.md`，并用一个真实领域试跑 `breakdown -> design -> build`，确认入口、规范引用和状态回写保持一致。