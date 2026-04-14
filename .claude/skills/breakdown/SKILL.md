---
name: breakdown
description: 当领域刚开始、材料还很散，或有新文档需要先吸收进现有文档体系时使用。
argument-hint: <domain>
---

# /breakdown

1. 先阅读 `project/overview.md`、`project/ui-brand.md`、`project/domains/<domain>/design.md`、`project/domains/<domain>/research.md` 和 `product-design-kit/design/design-init.md`。
2. 以 `design-init.md` 为唯一阶段规范，判断当前领域是否仍处于设计初始化或材料吸收阶段。
3. 本阶段只围绕以下对象做判断与同步：
   - 检查 `design.md` 的初始化完成状态，并标记受影响章节；`design.md` 由使用者自行维护
   - 如果新增内容属于项目级默认设计规范，更新 `project/ui-brand.md`
   - 在需要追踪来源、前期规划、会议增量、交付参考或待确认问题时更新 `research.md`
   - 如有变化，同步 `project/overview.md` 的领域清单、当前阶段或共享信息
4. 如果领域目录不存在，交回总控先完成骨架初始化后再继续。
5. 如果初始化仍未完成，或当前目标就是整理新增的交付参考，停在本阶段并明确缺口与阻塞项。
6. 如果初始化已经完成，且新增材料只影响交付 / 测试、不阻塞设计或实现，返回“可进入下一阶段”的判断，由总控决定是否顺延 `design` 或 `build`。
