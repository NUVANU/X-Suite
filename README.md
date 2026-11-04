# X Suite

X Suite 将用户确认的需求、受范围约束的开发和可核对的项目记忆带入 Codex。

| 组件 | 职责 | 社区版许可证 |
| --- | --- | --- |
| [XMi](https://github.com/NUVANU/XMi) | 澄清需求、确认规格和导出 XSpec | Apache-2.0 |
| [XDev](https://github.com/NUVANU/XDev) | 按确认范围执行、Review 和 QA | MPL-2.0 |
| [XMem](https://github.com/NUVANU/XMem) | 显式保存、来源与版本记录、新会话回读 | MPL-2.0 |

## 组件源码版本

- [XMi 722896dd0408](https://github.com/NUVANU/XMi/commit/722896dd04081e7040dfb459907eda8e1c55ec94)
- [XDev 3316b6408ee4](https://github.com/NUVANU/XDev/commit/3316b6408ee4da6c4c3fd7d482206289be003c96)
- [XMem 91b8e0f6a7c2](https://github.com/NUVANU/XMem/commit/91b8e0f6a7c29dd29b5ee2572107ebd4d8f9b768)

## 公开验证范围

本机联合验收的组件为 XMi R3、XDev R10、XMem R6。评测使用同一个社区工具预约台起点，对比原生 Codex 和同配置的 Codex 加 X Suite。使用独立的项目、聊天及记忆范围，第一天实现首版并改预约时限，第二天在新会话接手。

[公共提示词](benchmark/tool-booking-ab/PROMPTS.md) · [相同起点](benchmark/tool-booking-ab/starter/README.md)

本仓库自有集成资料采用 Apache-2.0。各组件按其仓库标明的许可证分发。
