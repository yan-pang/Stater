---
name: review
description: 用于评审领域文档、代码实现或模板本身的结构质量。
argument-hint: [scope]
---

# /review

1. 优先输出评审发现，而不是摘要。
2. 检查是否存在术语不一致、失效引用、阶段缺口、规则缺口、实现偏差、交付覆盖不足，以及“需要进入交付物的参考点仍停留在 `research.md` 或 `tech/`”的问题。
3. 项目级评审时，优先检查 `project/overview.md`、`project/ui-brand.md` 是否与领域文档、代码入口和共享能力一致。
4. 文档评审时，优先检查：
   - `design.md` 是否仍保留“先设计初始化、再补功能详细描述”的主线
   - `design.md` 是否错误地重复维护了 `project/ui-brand.md` 中已经稳定的项目级设计规范
   - 是否把原始材料直接大段塞进了 `design.md`
   - `research.md` 是否膨胀成第二份设计文档或第二份完整交付文档
   - `tech/` 是否承担了本应进入 `delivery/*` 的正式交付职责，或反过来错误挤进 `design.md`
   - 需要对外交付的参考点是否已经从 `research.md` 和 `tech/` 提炼进 `delivery/*`
   - 新增材料出现后，是否错误地把仅交付参考的问题当成 `design` / `build` 阻塞，或反过来漏掉了该走 `breakdown` 的整理
5. 代码评审时，指出具体文件和具体行为，并尽量关联到 `design.md` 或 `project/ui-brand.md`。
6. 模板评审时，确认 `README.md`、`.claude/agents/guide-agent.md`、`project/ui-brand.md`、`project/overview.md`、`product-design-kit/design/design-init.md`、`product-design-kit/design/product-design.md`、`product-design-kit/design/external-prd.md`、`product-design-kit/design/test-strategy.md`、`product-design-kit/design/test-cases.md` 和 `.claude/skills/` 是否仍然只指向同一套事实来源。
7. 如果没有发现，明确写出“未发现问题”，并补充残余风险或尚未验证项。
