---
name: automate
description: 创建 Cursor Automation（中文说明版）
---

# automate（中文说明）

## 用途

用于创建新的 Cursor Automation。  
注意：这里指 Cursor 产品内的 Automations，不等于通用 CI/脚本/工作流系统。

## 何时使用

仅在用户明确表示要“创建 Cursor Automation”时使用。

## 执行主流程

1. 检查是否支持“打开 Automations 编辑器”收尾路径。
2. 收集目标：触发条件、执行动作、预期结果。
3. 补齐关键字段：trigger、tools、prompt、name、description。
4. 一次性补问缺失信息（避免碎片化追问）。
5. 先给 Markdown 草案表格让用户确认，再打开编辑器继续完成。

## 必须遵守的规则

- 面向用户用自然语言，不暴露内部协议/枚举字段。
- 草案确认阶段默认不给 YAML/JSON（除非用户明确要求）。
- 只做“新建自动化”，不在该流程修改现有自动化。
- 不走旁路（如浏览器预填链接）；按编辑器交接流程执行。

## MCP 关键约束

- 仅可使用当前会话中“存在且可用”的 MCP。
- MCP 未认证时，需先完成认证，再进入草案/交接。
- `mcp.server.name` 必须使用 `SERVER_METADATA.json` 的 `serverName`，不能用目录名或 `serverIdentifier`。

## 触发器与配置注意事项

- cron 必须是有效表达式，不能留空触发器。
- Slack 频道/会话 ID 仅可用 `C...`、`G...`、`D...`。
- “在编辑器补完”的项目必须明确写在草案里。

## 推荐草案表字段

- Name / description
- Trigger
- Tools
- Instructions
- Resolved settings
- To finish in editor

## 一句话总结

先在聊天中把自动化草案质量做完整，再进入编辑器完成落地，是 `automate` 的核心工作方式。
