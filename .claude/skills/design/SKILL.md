---
name: design
description: 当 design.md 已完成设计初始化，需要继续补 `功能详细描述` 时使用。
argument-hint: <domain>
---

# /design

1. 先阅读 `project/overview.md`、`project/ui-brand.md`、该领域的 `design.md`、`research.md`、`product-design-kit/design/design-init.md` 和 `product-design-kit/design/product-design.md`。
2. 进入本阶段前，先确认 `design-init.md` 的前置条件已经满足；如果初始化内容仍缺，或仍有会直接影响 demo 设计的待确认事项未处理，交回 `breakdown`。
3. 本阶段只围绕 `功能详细描述` 的完整性、设计边界和后续承接关系工作；`research.md` 只作为参考，不形成必须回写 `design.md` 的同步欠账。`design.md` 仍由使用者自行维护。只有在用户明确要求协助修订时，才在保持初始化内容延续的前提下处理。项目级默认设计规范默认继承 `project/ui-brand.md`，`design.md` 只写领域特有的设计和例外说明。
4. 复杂页面、多模块关系和共享规则仍优先直接展开在同一份 `design.md` 中，不再额外拆独立详细设计文档。
5. 如有变化，同步 `project/overview.md` 的当前阶段、G 状态和项目级共享信息。
6. 如果详细设计已经可执行且用户目标是落代码，返回“可进入 build”的判断，由总控决定是否顺延。
