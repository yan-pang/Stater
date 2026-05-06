---
name: breakdown
description: 当领域刚开始、材料还很散,或有新文档需要先吸收进现有文档体系时使用。
argument-hint: <domain>
---

# /breakdown

1. 先阅读 `project/overview.md`、`project/ui-brand.md`、`project/domains/<domain>/design.md`(如存在)和 `product-design-kit/design/design-init.md`。
2. 以 `design-init.md` 为唯一阶段规范,判断当前领域是否仍处于设计初始化或材料吸收阶段。
3. 按新材料的影响范围决定落位:
   - 影响**单领域的** demo 设计 -> 直接更新 `project/domains/<domain>/design.md`
   - 属于**跨领域或项目级的**调研 -> 写到 `project/research/<version>-<topic>.md`,参考 `product-design-kit/design/research-doc-template.md`
   - 属于**项目级的**研发技术设计 -> 写到 `project/tech/<version>-<topic>.md`
   - 属于**项目级默认设计规范** -> 更新 `project/ui-brand.md`
   - 需要对外交付 PRD 参考 -> 该条参考点整理进对应领域的 `delivery/prd.md`(如果还没有 delivery 目录,待进入 `deliver` 阶段时创建)
4. 如有变化,同步 `project/overview.md` 的领域清单、当前阶段或项目级内容入口。
5. 如果业务领域目录不存在,交回总控先完成骨架初始化后再继续(新骨架只有 `design.md`,没有 `research.md` 和 `tech/`)。
6. 如果初始化仍未完成,或当前目标就是整理新增的交付参考,停在本阶段并明确缺口与阻塞项。
7. 如果初始化已经完成,且新增材料只影响交付 / 测试、不阻塞设计或实现,返回"可进入下一阶段"的判断,由总控决定是否顺延 `design` 或 `build`。
