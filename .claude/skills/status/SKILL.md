---
name: status
description: 用于总结当前项目或某个领域的状态，并推荐下一步最具体的动作。
argument-hint: [optional-scope]
---

# /status

1. 先阅读 `project/overview.md` 和 `project/ui-brand.md`。
2. 如果给了具体领域，再优先阅读 `project/domains/<domain>/design.md`、`research.md`；如果存在 `tech/`，继续阅读其中相关技术设计文档，再按需阅读其他已有文档。
3. 按“材料吸收、技术设计、设计初始化、功能详细描述、项目品牌规范、实现、交付”七个维度总结当前进度。
4. 优先按领域汇总，并特别标出：
   - 是否有新增材料尚未判断影响范围
   - `research.md` 是否还有待提炼的交付参考或待确认问题
   - `tech/` 是否已有需要进入交付物的关键约束、接口、依赖或异常路径
   - 如果现在又收到一份新材料，下一步应该先进入哪个阶段
   - `design.md` 的前 3 段是否已完成
   - `功能详细描述` 是否已补齐并具备进入实现的条件
   - `project/ui-brand.md` 是否已建立，并被领域设计默认继承
   - `delivery/` 是否已经吸收 `research.md` 和 `tech/` 中需要对外交付的参考点
   - G0 / G1 / G2 当前状态
5. 最后给出一个最有价值、最具体的下一步动作。
