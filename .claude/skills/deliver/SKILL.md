---
name: deliver
description: 当一个领域或版本已经明确需要对外交付文档时使用。
argument-hint: <domain-or-version>
---

# /deliver

本阶段有两类产物,走两套路径:

## A. 领域级 PRD / 测试用例(长期资产)

1. 先阅读该领域的 `design.md`、`project/ui-brand.md`;如 `project/research/` 或 `project/tech/` 下有相关版本文件,按需阅读。
2. 再阅读 `product-design-kit/design/external-prd.md`、`product-design-kit/design/test-strategy.md`、`product-design-kit/design/test-cases.md` 和 `product-design-kit/tools/prd-checklist.md`。
3. 在 `project/domains/<domain>/delivery/` 下产出或补全:
   - `prd.md`:领域长期 PRD,条目使用稳定编号(建议 `P-XXX` 格式)
   - `test/strategy.md`:领域测试策略
   - `test/cases.md`:领域测试用例,复用 PRD 的条目编号
4. 领域 PRD 是**权威源**;以后修订直接改这里。
5. 对照 `prd-checklist.md` 执行交付前自查,并同步更新 `project/overview.md` 的 G2 状态。

## B. 版本级对外交付(release-prd / test-plan)

1. 确认参数是版本号(如 `v1.1`)而不是领域名。
2. 识别本版相对上版的变更范围(第 2 步自动化协议落地后,由 git diff 自动识别;当前阶段可由用户提供本版涉及的领域和条目清单)。
3. 在 `project/delivery/<version>/` 下产出:
   - `release-prd.md`:按本版涉及范围,从各领域 `delivery/prd.md` **完整摘录**对应条目,组装成自包含对外文档。顶部加一行"本文件由 `/deliver` 生成,请勿手动编辑;改动请回到对应领域 PRD"。
   - `test-plan.md`:本版集成测试范围与回归说明,从各领域 `test/strategy.md` 提炼。
4. release-prd 的内容是**复制**不是链接,对外交付方看到的是完整文档。
5. 生成后,把本版涉及的领域和条目摘要反向确认给用户,让用户核对有无遗漏或误判。
6. 同步更新 `project/overview.md` 的发版记录。

## 公共约束

- 领域 PRD 条目编号必须稳定,以它作为版本 release-prd 的组装锚点。
- 需求 / 规则编号以 `delivery/prd.md` 为准,`test/strategy.md` 和 `test/cases.md` 复用同一套编号;只有确实影响 demo 表现的编号才按需出现在 `design.md`。
- 优先从 `project/research/` 和 `project/tech/` 的交付参考中提炼 PRD 内容,并与 `design.md` 中已实现或计划实现的设计保持一致。
- 不要在版本 `release-prd.md` 里手动追加新内容;新内容应先进领域 PRD,再重新触发 `/deliver`。
