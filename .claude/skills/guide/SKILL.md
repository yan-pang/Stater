---
name: guide
description: 兼容快捷入口。效果等同于直接进入对话并按 guide-agent 方式工作。
argument-hint: <domain>
---

# /guide

1. 这是兼容快捷入口，作用等同于直接开始对话并指定 `<domain>`。
2. 按 `.claude/agents/guide-agent.md` 的规则执行。
3. 如目录不存在，内部运行 `npm run new:domain -- <domain>`；如果明确要对外交付，再加 `--delivery`。
4. 然后由总控继续判断当前阶段并开始工作。
