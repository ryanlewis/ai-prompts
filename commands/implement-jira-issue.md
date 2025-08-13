---
title: Implement Jira Issue
author: "@ryanlewis"
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git checkout:*), Bash(git push:*), Bash(git pull:*)
argument-hint: "[jira-id]"
---

## Description

This Claude Code command automates the complete workflow of implementing a Jira issue - from fetching and analysing the issue details to making code changes, writing tests, and updating the ticket status. It provides a streamlined, git-integrated approach with emphasis on TDD and proper workspace management.

---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`
- Jira Issue: $ARGUMENTS

## Steps to undertake 

1. Fetch & Analyse – Use mcp-atlassian; extract Summary, Description, Acceptance Criteria, Type, Priority, Labels, Comments.
2. Understand Requirements – Identify core change, constraints, dependencies. Clarify ambiguity, assumptions, and edge cases.
3. Prepare Workspace. Check for uncommitted changes and clarify with me what to do with them. Go to default branch, update, then:

```bash
git checkout -b feature/rlew-<TICKET>-<short-desc>
```

4. Plan Implementation – Files to change, changes per file, new files, test updates, edge cases. Confirm before coding.
5. Tests – Add/update for happy paths, edge cases, errors, integrations. TDD approach.
6. Implement – Follow style, add docs/comments, handle errors, consider performance.
7. Verify – All checks pass, format Markdown with Prettier (run tests, linting)
8. Suggest commit message and confirm with me before committing:

```
<jira-id>: <brief-description>

- change 1
- change 2
- tests added
```

9. Update Jira – Comment with changes, testing, notes; transition status if needed.
10. Summary – Changes, tests, remaining work, review focus.