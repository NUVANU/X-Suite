# 社区工具预约台 · 参赛起始目录

请按用户确认的业务范围实现本地产品。初始项目只有运行入口和验收接口约定。

## 运行约定

- Node 24.20.0，使用标准库，可自由选择界面和内部组织方式。启动命令是 `npm.cmd start`，评测员也会直接执行 `node server.mjs`。
- 监听 `127.0.0.1`。用环境变量 `PORT` 指定端口，未提供时使用 4173。支持 `PORT=0`，由系统分配端口。监听成功时独占一行输出 `BENCH_READY http://127.0.0.1:<实际端口>`。
- `BOOKING_DATA_DIR` 有值时，读写该目录中的预约数据；未提供时可用项目目录内的 `.booking-data`。进程结束重启后仍需能使用已有数据。
- `GET /` 是可操作的网页。其它路由是两组共同遵循的自动验收接口。业务行为以用户确认的内容为准。

## 验收接口

接口的成功响应使用 JSON。日期使用 `YYYY-MM-DD`，以字符串返回。新项目预置 `drill`（电钻）和 `ladder`（梯子），初始无预约。

| 请求 | 约定 |
|---|---|
| `POST /api/bookings` | 接收 `{ toolId, borrower, startDate, endDate }`。成功返回 201 和 `{ booking }`。字段不合法或违反可预约天数约束时返回 400。若与同一件工具的有效预约冲突，返回 409。 |
| `GET /api/bookings` | 返回 200 和 `{ bookings: [...] }`。按用户确认的可见性规则包含预约；列表顺序不限。 |
| `POST /api/bookings/<id>/cancel` | 对已有有效预约执行取消，返回 200 和 `{ booking }`。 |

`booking` 至少包含非空字符串 `id`、`toolId`、`borrower`、`startDate`、`endDate` 和 `status`。状态值为 `active` 或 `cancelled`。额外字段可自行设计。错误响应的正文格式不限。
