# X Suite V0.1 社区版安装

使用 Windows x64、Node 24.20.0、npm 11.19.0、pnpm 11.25.0 和支持本地插件的 Codex。将三个源码 ZIP 解压到长期保留的本地目录。下文假定目录为 `C:\XSuite\XMi`、`C:\XSuite\XDev` 和 `C:\XSuite\XMem`。三个版本的下载链接见 [README](README.md)。

准备一个新项目目录 `C:\XSuite\project`，在里面创建一个可供 XMem 记录摘要的 `README.md`。以下步骤会创建新的 XMi 数据目录、XMem 运行目录和 XDev 项目配置。

## 安装 XMi

```powershell
Set-Location C:\XSuite\XMi
npm.cmd ci --omit=dev --ignore-scripts
npm.cmd run check
$xmi = npm.cmd run --silent configure -- --host codex --data-dir C:\XSuite\xmi-data | ConvertFrom-Json
codex plugin marketplace add $xmi.plugin_directory --json
codex plugin add xmi@xmi-local --json
```

在 Codex 的原生插件入口审阅 XMi 的钩子并按界面操作。新开对话后，可以用 XMi 梳理项目需求。正式确认采用对话中列出的内容，并由真实的用户回复触发。

## 构建 XMem 并配置 XDev

```powershell
Set-Location C:\XSuite\XMem
npm.cmd ci --ignore-scripts
npm.cmd run build
node tools/stage-runtime.mjs C:\XSuite\xmem-runtime
Set-Location C:\XSuite\xmem-runtime
npm.cmd ci --omit=dev --ignore-scripts

Set-Location C:\XSuite\XDev
pnpm.cmd install --frozen-lockfile --ignore-scripts
npm.cmd --prefix mcp ci --ignore-scripts
$suite = node mcp/setup-community-memory.ts --project C:\XSuite\project --data C:\XSuite\xdev-data --runtime C:\XSuite\xmem-runtime --snapshot README.md --consent | ConvertFrom-Json
$xmemArgs = $suite.xmem[1..($suite.xmem.Count - 1)]
codex plugin marketplace add $suite.xdev_plugin_directory --json
codex plugin add xdev@xsuite-community-local --json
codex @xmemArgs
```

`--consent` 允许初始化这个新项目的记忆存储与项目设置，并为此项目配置显式回读、保存、对账和检查点。每条公开来源仍需在项目配置中按文件及其摘要登记。开发任务写入和 QA 执行权限须按任务另行设置。

从项目目录新开 Codex 对话，启用 XDev，然后调用 `xdev_context` 查看绑定项目，并执行 `xdev_memory` 的 `recall`。新项目没有历史条目时，空结果是预期行为。XMem 独立入口也可通过 `xmem_standalone_status` 查询这个项目的策略和社区版版本。

## 项目和升级

保留源码及运行目录的绝对路径。安装脚本根据配套 XMem 构建生成部署清单，启动时验证程序和清单。更换配套构建时，为新版准备新的运行目录，并按新版指南配置，现有记忆的迁移需要单独处理。

同一 Codex 配置中只保留一份 XDev 和一份 XMem 注册。已有同名连接时，先在独立的 Codex 配置中按上述步骤验证。GitHub 的下载包和安装流程仅包含社区版源码与公开依赖。
