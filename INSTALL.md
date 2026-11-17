# X Suite installation / 社区版安装

Public source set: **XMi 0.1.2 · XDev 0.1.4 · XMem 0.1.2**. Windows x64 / Node **24.20.0** / npm **11.19.0** / pnpm **11.25.0** is the documented local path. Use a Codex version with local plugin and MCP support. Keep the three source directories in a permanent local folder.

本次采用宿主直接连接 XMem 的方式。旧 `setup-community-memory.ts` 联合桥接安装入口对应旧版构建，不适用于本次源码组合；不要通过改白名单或旧指纹强行接入。新版组件源码同步与新版三件套端到端联合验收分别记录。

## 1. Download / 下载

- XMi: [v0.1.2 Release](https://github.com/NUVANU/XMi/releases/tag/v0.1.2), [lightweight package](https://github.com/NUVANU/XMi/releases/download/v0.1.2/xmi-0.1.2-lite.zip), [source package](https://github.com/NUVANU/XMi/releases/download/v0.1.2/xmi-0.1.2-source.zip), [SHA256SUMS](https://github.com/NUVANU/XMi/releases/download/v0.1.2/SHA256SUMS.txt). Read the release's known dependency findings.
- XDev: [public source](https://github.com/NUVANU/XDev) / [main ZIP](https://github.com/NUVANU/XDev/archive/refs/heads/main.zip).
- XMem: [public source](https://github.com/NUVANU/XMem) / [main ZIP](https://github.com/NUVANU/XMem/archive/refs/heads/main.zip).

Main ZIPs move with the branch; record the commit for reproducibility. The following examples use `C:\XSuite\XMi`, `C:\XSuite\XDev`, and `C:\XSuite\XMem`. Replace paths with your actual directories. 不要覆盖已有源码、运行目录或现场数据库。

## 2. XMi

```powershell
Set-Location C:\XSuite\XMi
npm.cmd ci --omit=dev --ignore-scripts
npm.cmd run check
$xmi = npm.cmd run --silent configure -- --host codex --data-dir C:\XSuite\xmi-data | ConvertFrom-Json
codex plugin marketplace add $xmi.plugin_directory --json
codex plugin add xmi@xmi-local --json
```

Review the plugin/hook prompts in Codex and reopen the connection. See [XMi installation](https://github.com/NUVANU/XMi/blob/main/docs/public/INSTALL.md) and [workflow](https://github.com/NUVANU/XMi/blob/main/docs/public/WORKFLOW.md) for confirmation, version-bound architecture, review, and separately authorized export.

已有 XMi 升级先备份并保留数据路由，按其升级说明更新入口；首次配置工具不接管已有数据库。

## 3. Build XMem / 构建独立 XMem

```powershell
Set-Location C:\XSuite\XMem
npm.cmd ci --ignore-scripts
npm.cmd run check
npm.cmd run build
node tools/stage-runtime.mjs C:\XSuite\xmem-runtime-0.1.2
Set-Location C:\XSuite\xmem-runtime-0.1.2
npm.cmd ci --omit=dev --ignore-scripts
```

The target must be a new absolute directory. The locked dependency tree includes a Windows x64 SQLite native package; other platforms need separate validation. Keep this runtime in place.

通过 Codex 支持的 MCP 设置注册名称为 `xmem` 的服务，命令与参数分别填写（不是一整串带引号命令）：

```text
command: C:\Program Files\nodejs\node.exe
args: ["C:\\XSuite\\xmem-runtime-0.1.2\\dist\\src\\engineering-companion.js"]
```

Use `(Get-Command node).Source` to find your actual Node path. If using the Codex CLI instead of the settings UI:

```powershell
codex mcp add xmem -- node C:\XSuite\xmem-runtime-0.1.2\dist\src\engineering-companion.js
```

Register once. Existing `xmem` settings must be inspected and updated, not duplicated. This creates a connection, not an enabled project database.

## 4. Enable memory for the actual project / 明确项目与记忆政策

With the owner's consent, initialize the chosen existing project using the [XMem first-use recipe](https://github.com/NUVANU/XMem/blob/main/docs/STANDALONE-SEMI-AUTO.md#executable-owner-first-use-recipe). It gives exact CLI commands and reviewed JSON examples for:

1. Project initialization and status.
2. Explicit enabled policy, roles, snapshot files, capture categories, and budgets.
3. `PROJECT_LOCAL` or an explicitly selected empty local directory.
4. Policy/storage readback and diagnostics.

本次不自动替已有项目配置 `consent:true`，也不搬迁现场数据。已配置项目使用原有政策与真实 location hash；已有数据不能通过修改路径直接迁移。配置完成后，新会话调用 discover/status/storage 并绑定实际 task/version，再检索、保存、完整读回和 checkpoint。空历史返回 EMPTY 是正常状态。

## 5. Install XDev / 安装 XDev

```powershell
Set-Location C:\XSuite\XDev
pnpm.cmd install --frozen-lockfile --ignore-scripts
npm.cmd --prefix mcp ci --ignore-scripts
npm.cmd run typecheck
codex plugin marketplace add . --json
codex plugin add xdev@xdev-community-local --json
```

The included marketplace installs XDev Skills and its default MCP entry. Reconnect/reopen and inspect `xdev_context`: a new unbound installation correctly returns **UNBOUND**, null project roots, and false task permissions. It does not pick your cwd as the project.

若宿主只支持直接 MCP 注册，可运行 `node --experimental-strip-types mcp/configure.ts --host codex` 获得实际命令；仅加载 MCP 不等于加载 Skills。不要在插件之外再重复注册同名服务。

For approved product work, follow [XDev local project setup](https://github.com/NUVANU/XDev/blob/main/docs/LOCAL-MCP.zh.md). The supported initialization command uses the existing actual project and a new external data directory:

```powershell
node --experimental-strip-types mcp/local.ts init --project-root C:\Projects\my-project --data-root C:\XSuite\my-project-xdev-data --project-id my-project
```

Both parents must exist; the new data directory must be separate from the project. Initialization prints the exact configuration and connection descriptor but grants no Job/QA authority. Bind that configuration through one supported host connection, reconnect, then inspect context. Do not edit the installed cache.

新正式 Node 任务按 [v5 统一合同](https://github.com/NUVANU/XDev/blob/main/docs/R4-UNIFIED-CONTRACT.zh.md) 准备当前需求、候选、验收与有限授权。项目初始化、写 Job、实际 QA、恢复和 XSpec 接收的权限分别设置；用户不需要手写 UUID，协调者从真实确认来源准备输入。

## 6. Verify / 分开核验

- XMi: actual plugin version and configured data route; prepare is not confirmation or export.
- XDev: actual 0.1.4 release declaration, binding/permissions, current task contract, non-author Review, actual QA, and result.
- XMem: actual 0.1.2 package/runtime status, explicit project/task/storage, permitted save, complete readback, and a later-session checkpoint recovery.

XDev 使用宿主原生 XMem 工具，不要求旧 bridge 配置；历史不是授权。安装成功、当前会话可见、实际执行与新版联合验收是不同结论。未验证的宿主、功能或组合应如实报告。

## 7. Upgrade and rollback / 升级与回退

Keep old runtimes and a consistent database/artifact backup. Build the new version in a new directory; update only the intended connection, reconnect, and read back the runtime identity. Public packaging creates a new fingerprint; do not relabel an old fingerprint as a new version. An open chat may still use an old process.

迁移与业务开发分开处理；新库已有写入后，不直接恢复旧副本覆盖新数据。UNKNOWN 先按原身份对账，不删锁、换 key 重试或修改盘根目录权限。详细限制分别见三个组件文档。
