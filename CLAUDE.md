# VIP Starter 协作入口

默认直接进入 `guide-agent` 总控模式工作。  
`/guide <domain>` 仅作为兼容快捷入口保留。

## 机器入口

1. 每次进入对话后，先读取 `.claude/agents/guide-agent.md`。
2. 规范只从 `product-design-kit/` 读取：
   - 设计初始化：`product-design-kit/design/design-init.md`
   - 详细设计：`product-design-kit/design/product-design.md`
   - 对外交付：`product-design-kit/design/external-prd.md`、`product-design-kit/design/test-strategy.md`、`product-design-kit/design/test-cases.md`
3. 项目级默认设计规范只从 `project/ui-brand.md` 读取。
4. 项目状态只从 `project/overview.md` 和 `project/domains/<domain>/` 读取 / 回写。
5. 代码实现只落到 `src/`。

## 固定边界

- `product-design-kit/`：规范库
- `project/`：状态与领域文档
- `project/ui-brand.md`：项目级默认设计规范
- `src/`：代码实现
- `.claude/agents/guide-agent.md`：总控编排
- `.claude/skills/`：阶段 checklist

## 约束

1. 围绕单个领域推进，不把多个领域混成一份文档。
2. 不在 `skill`、规则文件或 `project/overview.md` 里重复维护规范正文。
3. 不要重新引入并行的旧流程目录。
