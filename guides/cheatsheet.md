---
title: "Claude Code Cheat-Sheet"
author: "@ryanlewis"
---

# Claude Code Cheat‑Sheet

## Guiding Principles

* **Think before code** → Ask Claude to outline its reasoning first (`"Think:"`).
* **State the end‑state** → Describe exact file paths, desired API signatures, test names, or UI snapshots you expect.
* **Constrain the diff** → Use `"Change ONLY …"` or `"Leave all other files untouched."`
* **Iterate in slices** → Prefer small, atomic prompts; chain multiple if needed.

## Core Prompt Patterns

| Intent          | Template                                                                   |
| --------------- | -------------------------------------------------------------------------- |
| Plan first      | `"Plan step‑by‑step how to … but **do not** write code yet."`              |
| TDD loop        | `"Write a failing test in <path> that captures … then STOP."`              |
| Refactor safely | `"Refactor <file> to … . Preserve public API; keep tests passing."`        |
| Generate docs   | `"Summarise the decisions above as markdown in /docs/design/<feature>.md"` |
| Verify output   | `"Show me the new diff only; no commentary."`                              |

## Prompt Macros & Tokens

* `think` / `think harder` / `ultrathink` → progressively larger reasoning budgets.
* `bash:` prefix → shell commands in direct execution mode.
* `// skip_review` at top of message → bypass human oversight for low‑risk routines.

## Example Prompt Snippets

```text
Plan step‑by‑step how to migrate uses of the legacy `PaymentClient` to 
`NewPaymentClient` across the `billing/` folder, then stop and wait for my OK.
```

```text
Write a failing pytest in `tests/cli/test_config.py` that expresses:
- When the user passes `--config env` the CLI should read from ENV vars.
```

```text
Refactor `src/cli/main.py` to extract argument parsing into a separate 
module `src/cli/arguments.py`; keep behaviour identical and tests green.
```

## Debugging Your Prompts

1. **Over‑explain constraints** → If Claude hallucinates paths, list them explicitly.
2. **Slice large tasks** → Break big refactors into 3‑5 discrete prompts.
3. **Ask for self‑critique** → `"Review your answer for mistakes, no code yet."`

## References & Further Reading

* **Anthropic "think" tool** – official explanation of how `think:` pauses output for reflection. [Anthropic Engineering Blog](https://www.anthropic.com/engineering/claude-think-tool)
* **Extended thinking mode** – controlling reasoning budgets with the "thinking budget" slider. [Anthropic News](https://www.anthropic.com/news/visible-extended-thinking)
* **Deep Thinking Keywords** – community‑measured token counts for `think hard`, `think harder`, `ultrathink`. [Reddit r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/comments/1jfespc/claude_codes_deep_thinking_keywords/)
* **Plan‑Code‑Commit workflow** – using small logical commits to review agent output. [Hacker News discussion](https://news.ycombinator.com/item?id=44218518)
* **TDD with Claude** – write failing tests first to keep the agent honest. [Reddit thread](https://www.reddit.com/r/ClaudeAI/comments/1lfirvk/any_tips_on_how_to_get_claude_to_stop_cheating_on/)
* **Diff‑only verification** – reviewing generated commits without commentary. [Hacker News](https://news.ycombinator.com/item?id=44205697)