---
name: deliver
description: 当一个领域已经明确需要对外交付文档时使用。
argument-hint: <domain>
---

# /deliver

1. 先阅读该领域的 `design.md`、`research.md` 和 `project/ui-brand.md`；如果存在 `project/domains/<domain>/tech/`，再阅读其中相关技术设计文档。
2. 再阅读 `product-design-kit/design/external-prd.md`、`product-design-kit/design/test-strategy.md`、`product-design-kit/design/test-cases.md` 和 `product-design-kit/tools/prd-checklist.md`。
3. 在 `project/domains/<domain>/delivery/` 下产出 `prd.md`、`test-strategy.md` 和 `test-cases.md`。
4. 优先从 `research.md` 和 `tech/` 的交付参考中提炼 PRD 内容，并与 `design.md` 中已实现或计划实现的设计保持一致。
5. 需求 / 规则编号以 `delivery/prd.md` 为准，`test-strategy.md` 和 `test-cases.md` 复用同一套编号；只有确实影响 demo 表现的编号才按需出现在 `design.md`。
6. 对照清单执行交付前自查，并同步更新 `project/overview.md` 的 G2 状态。
