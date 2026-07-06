---
name: review-bugbot
description: 使用 Bugbot 子代理做代码审查（中文说明版）
---

# review-bugbot（中文说明）

## 用途

对当前仓库改动做 Bugbot 风格审查，重点识别 bug、回归与风险点。

## 何时使用

当用户明确要求运行 `/review-bugbot` 或“用 Bugbot 审查改动”时。

## 关键约束

- 只启动一个 `bugbot` 子代理
- 默认 `readonly: true`
- 默认前台执行（除非用户明确要后台）
- 不要手动计算 diff，交给子代理处理

## Diff 选择

- 默认：`branch changes`
- 仅审查未提交改动：`uncommitted changes`
- 常规 diff 失败时兜底：`natural language` + `Change Description`

## 失败重试

- 调用参数错误：修正后重试一次
- diff 计算失败：改用 `natural language` 重试一次
- 其他失败：同参数重试一次
- 仍失败：停止并报告简短阻塞原因

## 输出规范

- 无 diff：一句话说明
- 无问题：一句话状态
- 有问题：按严重度降序输出表格，列为  
  `Severity | Location(file:line) | Finding`

## 边界

除非用户明确要求，不要自动修复问题，也不要自动再次复审。
