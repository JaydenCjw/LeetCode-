---
name: create-rule
description: 创建 Cursor 规则（中文说明版）
---

# create-rule（中文说明）

## 用途

在 `.cursor/rules/` 下创建 `.mdc` 规则，为 AI 提供长期、稳定的项目约束。

## 何时使用

- 需要创建新规则
- 需要补充编码规范或项目约定
- 需要按文件模式（glob）控制规则生效范围

## 执行要点

1. 先确认规则目标（要约束什么）。
2. 再确认作用范围（全局 or 文件级）。
3. 文件级规则必须明确 `globs`，例如 `**/*.ts`、`backend/**/*.py`。

## 文件格式

规则文件放在 `.cursor/rules/`，后缀为 `.mdc`，使用 frontmatter：

```markdown
---
description: 规则说明
globs: **/*.ts
alwaysApply: false
---

# 规则标题

规则正文...
```

## 推荐实践

- 单条规则聚焦一个主题
- 内容简洁且可执行
- 给出具体正反示例
- 尽量避免重复或互相冲突的规则

## 检查清单

- [ ] 规则文件是 `.cursor/rules/*.mdc`
- [ ] `description/globs/alwaysApply` 配置正确
- [ ] 规则内容明确可执行
- [ ] 包含必要示例
