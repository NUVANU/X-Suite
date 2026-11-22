# X Suite

**面向 AI 代码工程的工程治理与证据链工具套件**

**把需求、改动和验收对上号，让下一次开发有据可查。**

[English](https://github.com/NUVANU/X-Suite/blob/main/README.md) · **简体中文**

[开始使用](https://github.com/NUVANU/X-Suite/blob/main/INSTALL.md) · [XMi](https://github.com/NUVANU/XMi) · [XDev](https://github.com/NUVANU/XDev) · [XMem](https://github.com/NUVANU/XMem)

**AI 的编程能力越来越强大，但 AI 的编程质量，谁来检验？**

在生产线上，关键工艺节点需要质量检查。AI 开发也有类似需求：需求有没有确认，这次改动有没有超出范围，“测试通过”对应的是不是准备交付的代码，换一个会话还能不能找到当时的依据。

X Suite 将质量管理的方法带到 AI 代码工程：通过 **XMi、XDev、XMem**，把需求确认、执行约束、交付核验与记忆接续连接起来。你继续使用熟悉的编程宿主和模型，三个组件为工程过程提供可核对的要求、记录与判断依据。

## 让四个问题有据可查

| 开发时需要回答的问题 | X Suite 提供的依据 |
| --- | --- |
| **你确认了什么？** | XMi 区分建议、待定与正式决定，保留版本化规格与例外 |
| **这一版改了什么？** | XDev 关联当前任务、允许范围与候选代码 |
| **凭什么算通过？** | XDev 核对适用的非作者 Review、实际 QA 与当前版本 |
| **下次该用哪份记录？** | XMem 检索工程历史，按引用回读来源、修订与适用范围 |

## 三个组件，各管一段

| 组件 | 职责 | 你得到什么 |
| --- | --- | --- |
| **[XMi](https://github.com/NUVANU/XMi)** | 需求确认 · 版本化规格 | 将想法、规则、例外和验收条件整理成用户确认的 XSpec，并衔接同版本架构与评审 |
| **[XDev](https://github.com/NUVANU/XDev)** | 执行约束 · 交付核验 | 将本次任务、实际改动、审查与测试关联起来，说明交付通过或仍待验证的原因 |
| **[XMem](https://github.com/NUVANU/XMem)** | 工程记忆 · 项目接续 | 留下有来源和修订的决定、约束、失败经验与检查点，供后续会话查找、回读与复核 |

可以组合使用，也可以从一个组件开始。已有明确需求时，可直接进入开发治理；只需要项目经验检索时，也可以单独使用 XMem。

### XMi：开发前，把要求和例外说清楚

从一句想法、零散资料或已有规则出发，找出缺项、歧义、冲突与待定问题。关键产品决定交给用户确认，形成能阅读、能导出、能供下游检查的规格。

重点保留“做什么、哪些不做、怎样算完成、还有什么未决定”，避免建议在下一环节被当作已批准需求。

### XDev：把本次任务、实际改动与验收对上号

沿用宿主的搜索、设计、编码、调试和 Agent 协调能力，在任务进入、关键变化或中断、交付三个节点核验。产品变化保留非作者 Review 与实际 QA；证据不足或版本不对应时，不将受影响的交付登记为通过。

普通、可回退的日常操作采用相称的必要检查。中断后先检查原记录，再按已有权限恢复，保留失败与未知结果。

### XMem：让接手者有原文可查

保存获准的工程决定、规则例外、失败经验和检查点。按项目、任务或主题查找记录，从预览定位到原文，再检查修订、来源和当前适用性。

更正、撤回与历史记录分别处理。找到一条旧记录后，仍需判断本次能否沿用；保存成功、完整读回和后续正确采用分别核验。

## 谁适合使用？

- **用 AI 做产品的个人开发者：** 将产品要求说清楚，检查交付依据，接续长任务。
- **非技术产品发起人：** 通过可理解的确认与结果说明参与开发，减少手工整理工程材料的负担。
- **小团队与多 Agent 工作流：** 核对交接内容、代码版本、审查结论与历史经验。

产品原则：**要求要说清楚，结果要有依据，摘要要清晰，记忆要准确。**

## 一次最小使用流程

以开发一个本地工具为例：

1. **确认要求。** 告诉 XMi 使用者、主要操作、排除范围和验收条件，确认本次规格。
2. **开发与核验。** 让宿主按已确认范围开发，使用 XDev 关联任务、候选代码、非作者 Review 和实际 QA。
3. **保存与接续。** 通过 XMem 保存获准决定与关键发现，完整读回并建立检查点；新会话重新核对项目和任务后再采用。

```text
需求确认 → 版本化规格 → 任务与范围 → 宿主开发 → 审查与实际 QA → 交付核验
                            ↕                                      ↕
                   XMem：检索适用历史，保存并回读关键记录，支持后续接续
```

宿主负责工具执行、会话、调度、权限和生命周期；XDev 负责治理判断，XMem 负责工程记录与检索。记忆贯穿过程，历史记录不替代新的执行授权。

## 如何让证据可核对？

| 机制 | 核对什么 |
| --- | --- |
| 版本化产品规格与条目状态 | 哪些决定已采纳，哪些问题仍未确认 |
| 项目、任务、文件引用与内容哈希 | 材料属于哪个项目、任务和实际版本 |
| 候选关联的 Review 与 QA 记录 | 本次审查、实际命令与结果支持哪份代码 |
| 原记录对账与有界恢复 | 中断后是否已有结果，哪些状态仍未知 |
| 工程记忆修订、来源与范围检查 | 原文是否变化，历史是否适用于当前任务 |

哈希用于核对内容一致性，不能单独证明结论正确。宿主规则、程序检查与实际运行证据各有作用；具体支持范围见各组件文档。

## 当前版本与下载

| 组件 | 版本 | 下载与说明 |
| --- | --- | --- |
| XMi | **0.1.3** | [发布页](https://github.com/NUVANU/XMi/releases/tag/v0.1.3) · [轻量安装包](https://github.com/NUVANU/XMi/releases/download/v0.1.3/xmi-0.1.3-lite.zip) · [源码包](https://github.com/NUVANU/XMi/releases/download/v0.1.3/xmi-0.1.3-source.zip) · [校验和](https://github.com/NUVANU/XMi/releases/download/v0.1.3/SHA256SUMS.txt) |
| XDev | **0.1.5** | [仓库](https://github.com/NUVANU/XDev) · [源码 ZIP](https://github.com/NUVANU/XDev/archive/refs/heads/main.zip) · [更新说明](https://github.com/NUVANU/XDev/blob/main/docs/PUBLIC-UPDATE-20261120.md) |
| XMem | **0.1.2** | [仓库](https://github.com/NUVANU/XMem) · [源码 ZIP](https://github.com/NUVANU/XMem/archive/refs/heads/main.zip) · [更新说明](https://github.com/NUVANU/XMem/blob/main/docs/PUBLIC-UPDATE-20261115.md) |

按 **[安装指南](https://github.com/NUVANU/X-Suite/blob/main/INSTALL.md)** 开始，当前说明以 Windows/Codex 本地路径为主。XMi 表内链接指向固定 v0.1.3 发行包；XDev、XMem 的 main ZIP 随提交变化，复现时请记录 commit；发行说明保留已知问题和兼容范围。

安装并核对配置后，可以这样向 Agent 提出任务：

> 请按已确认的需求开发。在关键节点用 XDev 核对范围与交付依据；通过已配置的 XMem 查找适用历史并保存关键记录。最后说明这次改了什么、实际验证了什么、还有什么未验证。

## XMi 0.1.3：少重复，保留确认依据

本次 v0.1.3 将 2026-11-22 更新整理为固定源码包和轻量安装包，附 SHA-256 校验和；旧 v0.1.2 保持原样。新增有界清单交付预检、按版本增量读取与短校验回执，适用时沿用已确认的蓝图选择；完整清单、真实回复和阻塞校验继续保留。独立的可选本地原型适配器支持展示首版流程、集中处理选择并输出 16 文件原型规格，普通 MCP 默认工具目录保持原样。

升级前备份已有数据并更新读取器；重新审阅钩子、连接后再核验加载。旧读取器兼容性及有限验证范围见[XMi 更新说明](https://github.com/NUVANU/XMi/blob/main/docs/public/UPDATE-20261122.md)。本次发布同步不等于新版三件套已完成联合端到端验收。

## XDev 0.1.5：任务数据可放在项目内

普通受监督任务可显式将 XDev 配置、输入和控制记录放在工程直属 `.xdev` 中。候选清单只排除三个保留的运行数据路径，其他 `.xdev` 产品文件仍正常检查；初始化保持权限默认关闭，不覆盖或迁移已有记录。

XSpec 接收、旧 XMem bridge 与外部实施产物采用继续使用外置布局，原生 XMem 独立配置。有界持续推进、非作者 Review、实际 QA 与有限授权保持。详见[更新与支持范围](https://github.com/NUVANU/XDev/blob/main/docs/PUBLIC-UPDATE-20261120.md)及[安装选项](https://github.com/NUVANU/X-Suite/blob/main/INSTALL.md)。

## 当前进展与后续方向

社区源码和安装入口已公开。组件的实际验证记录见各自更新说明；源码可检查、指定版本测试通过、用户实际受益，是需要分别取证的结论。

近期重点是降低安装、维护与工程核对成本，继续完善真实项目验证，并逐平台推进 DeepSeek Harness、WorkBuddy、Qoder 等宿主的适配。Pro、团队方案与更完整的测评能力属于后续规划。

新宿主、跨平台接续和新版本组合按实际场景单独验证。现有支持的 Node QA 路径有明确命令和时长边界，不能据此推断浏览器、游戏引擎或全部生产场景通过，也不据此承诺固定的缺陷下降率或成本收益。

工程记忆在本地保存，检索内容可能由宿主提交给模型服务商。请只保存有权使用的资料，公开反馈时保留必要脱敏。

## 深入了解与反馈

- [XMi 工作流](https://github.com/NUVANU/XMi/blob/main/docs/public/WORKFLOW.md)
- [XDev 社区工作流](https://github.com/NUVANU/XDev/blob/main/docs/COMMUNITY.md)
- [XMem 配置与日常使用](https://github.com/NUVANU/XMem/blob/main/docs/STANDALONE-SEMI-AUTO.md)
- [反馈组合使用问题](https://github.com/NUVANU/X-Suite/issues)

反馈时请附组件版本与 commit、宿主和运行时、最小复现及脱敏结果。

## 许可证

本仓库组合说明采用 [Apache-2.0](https://github.com/NUVANU/X-Suite/blob/main/LICENSE)。XMi 采用 Apache-2.0，XDev 与 XMem 采用 MPL-2.0；第三方依赖保留各自许可证。
