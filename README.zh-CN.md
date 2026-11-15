# X Suite

**让想法不止停留在原型。**

面向 AI 辅助开发的开源工程治理与证据链工具套件。

[English](README.md) · **简体中文**

[开始使用](INSTALL.md) · [XMi](https://github.com/NUVANU/XMi) · [XDev](https://github.com/NUVANU/XDev) · [XMem](https://github.com/NUVANU/XMem)

第一个 AI 原型往往很快就能运行。但继续修改后，旧规则可能失效，新对话可能忘记关键决定，“测试通过”也可能说的是昨天的代码。

**X Suite 让产品意图、工程历史和交付证据更容易检查。** XMi 澄清要做什么，XDev 核范围与交付依据，XMem 保留适用的项目经验；开发继续由宿主与模型完成。

## 三个工具，清晰分工

| 工具 | 提供什么 | 适合什么时候用 |
| --- | --- | --- |
| **XMi** | 引导澄清、用户确认的 XSpec、同版本架构与评审交接 | 把想法转为已商定的行为与范围 |
| **XDev** | 进入、变化或中断、交付三个节点的轻量治理；绑定候选的 Review/QA 证据与有界恢复 | 判断实际修改是否具备交付依据 |
| **XMem** | 本地工程记录、修订、来源、有界检索与检查点 | 跨会话保留约束、决策、失败和未知 |

可以单独使用，也可以组合。需求清楚时不必再走 XMi；使用 XDev 也不意味着每个项目都必须新建记忆库。

## 为什么值得尝试？

| AI 开发中的常见问题 | 套件提供的帮助 |
| --- | --- |
| 一句话需求遗漏关键行为 | XMi 将未决问题列出并交给用户确认 |
| 建议悄悄变成未批准的新功能 | 保留决策与范围，在 Review 中检查符合性 |
| 新会话重复已经失败的方案 | 检索原工程记录、原因与支持证据 |
| 审查与测试对应不同候选 | 将阶段记录关联到实际项目、任务和文件 |
| 对话中断后重复执行 | 先核原 claim 和结果，再按权限恢复 |
| 小操作积累大量流程开销 | XDev 将普通可回退操作交给相称的必要检查 |

## 典型工作流

```text
描述产品想法
      ↓
XMi：澄清 → 确认 → 规格与架构
      ↓
宿主：搜索 → 设计 → 编码 → 调试 → 协调 Agent
      ↕
XMem：检索适用历史；关键发现保存并完整读回
      ↓
XDev：核当前范围、非作者 Review、实际 QA 与交付
```

宿主负责工具、调度、会话、权限与生命周期；XDev 负责治理判断，XMem 负责证据持久化。历史内容不是新的执行授权，哈希也不证明结论必然正确。

## 当前公开源码与下载

| 组件 | 版本 | 下载与说明 |
| --- | --- | --- |
| XMi | **0.1.2** | [发布页](https://github.com/NUVANU/XMi/releases/tag/v0.1.2) · [轻量安装包](https://github.com/NUVANU/XMi/releases/download/v0.1.2/xmi-0.1.2-lite.zip) · [源码包](https://github.com/NUVANU/XMi/releases/download/v0.1.2/xmi-0.1.2-source.zip) · [校验和](https://github.com/NUVANU/XMi/releases/download/v0.1.2/SHA256SUMS.txt) |
| XDev | **0.1.3 — R4 / MECH-02 源码更新** | [仓库](https://github.com/NUVANU/XDev) · [源码 ZIP](https://github.com/NUVANU/XDev/archive/refs/heads/main.zip) · [更新说明](https://github.com/NUVANU/XDev/blob/main/docs/PUBLIC-UPDATE-20261115.md) |
| XMem | **0.1.2 — R6 RestoreBudget 源码更新** | [仓库](https://github.com/NUVANU/XMem) · [源码 ZIP](https://github.com/NUVANU/XMem/archive/refs/heads/main.zip) · [更新说明](https://github.com/NUVANU/XMem/blob/main/docs/PUBLIC-UPDATE-20261115.md) |

XDev、XMem 的 main ZIP 是会随提交变化的源码归档，不是固定二进制 Release 附件；复现时请记录 commit。XMi 发布说明包含已知依赖审计问题。

### 本轮更新

**XDev：** 新正式 Node 任务采用无三档选择的统一 v5 合同；普通可回退操作只做必要检查，产品变化保留非作者 Review 与实际 QA。浅接入让宿主继续自主开发。

**XMem：** 编译前预留恢复说明字节，再按既有上限合计正文、连续性与说明；必需材料保留或明确失败，可选材料可整条留作引用。

**组合方式：** 优先使用宿主直接配置的原生 XMem。旧 XDev bridge 仍受指定构建与存储模式限制，不能将本次源码同步当作新桥接资格或新版端到端联合验收已通过。

## 开始使用

按 [INSTALL.md](INSTALL.md) 完成 Windows/Codex 源码安装。保留源码与运行目录，经同意初始化真实项目，重连后核实际服务。安装、项目绑定、独立 Review、实际 QA 与发行验收分别检查。

设置完成后可以这样使用：

> 请用 XMi 澄清尚未决定的产品行为，让宿主完成已确认范围。使用已配置的 XMem 检索适用历史，并由 XDev 在进入、关键变化和交付时检查。说明实际候选、验证证据与剩余未知。

## 证据与边界

上游 XDev R4 核心已有本机限定验收；MECH-02 完成独立 Review 和六个宿主政策场景，其中三项实际夹具操作、三项决策场景。XMem 恢复预算修复通过 89/89 回归包及另列、存在覆盖重叠的 19/19 Core 补充复核包。这些是组件结果，不是模型准确率、成本下降或通用安装能力的对比证明。

XDev MCP runner 运行精确且有界的 Node 命令，不等于通用浏览器或游戏引擎 QA。其他宿主、平台、全新机器、无人值守恢复和本次新版组合仍需分别验证。这里不宣称具体缺陷下降率、记忆准确率或 token 节省比例。

记忆在本地保存，但检索内容可能被宿主提交给模型服务商。不要将凭证、私密对话或现场数据库放进公开仓库。

## 深入了解与参与

- [XMi 工作流](https://github.com/NUVANU/XMi/blob/main/docs/public/WORKFLOW.md)
- [XDev 社区工作流](https://github.com/NUVANU/XDev/blob/main/docs/COMMUNITY.md)
- [XMem 设置与日常使用](https://github.com/NUVANU/XMem/blob/main/docs/STANDALONE-SEMI-AUTO.md)
- [反馈组合使用问题](https://github.com/NUVANU/X-Suite/issues)

提交问题时请提供组件 commit、宿主与运行时版本、最小复现和脱敏回执。

## 许可证

本仓库组合说明采用 [Apache-2.0](LICENSE)；XMi 采用 Apache-2.0，XDev 与 XMem 采用 MPL-2.0。第三方依赖保留各自许可证。
