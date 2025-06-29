---
title: Create Jira Ticket
author: "@ryanlewis"
related:
  - "[[Generate Tasks from Plan]]"
---

## Description

This prompt helps you generate well-structured Jira tickets with consistent formatting. It guides you through providing the necessary information and outputs a professional ticket description following established templates and best practices.

---

<div class="prompt-content">

Create a Jira ticket for the [PROJECT_NAME] project with the following information:

**Problem/Issue**: 
Describe the problem or feature request

**Issue Type**:
Task/Bug/Story

**Additional Context**: 
Any relevant background, affected files, related PRs, or why this matters

**Expected Outcome**:
What should happen when this is fixed/implemented

Please format the ticket using this structure:

Summary: Concise one-line description

Description:
```
## Summary (Brief overview of the issue/task)

## Context (Background information, why this is needed, what's currently happening)

## Acceptance criteria (Bullet points starting with * describing what needs to be done)

## Other information (Optional - links, references, additional notes)    
```

Use professional, straightforward language focused on the technical issue. For bugs, explain what's wrong and what the correct behavior should be. For tasks, explain what needs to be created or changed.

---

### Example usage

Create a Jira ticket for the [PROJECT_NAME] project with the following information:

**Problem/Issue**: 
Our [FILENAME].md suggests single quotes for docstrings but PEP 257 and ruff require double quotes

**Issue Type**: 
Bug

**Additional Context**: 
This conflicts with Python standards and our ruff formatter configuration

**Expected Outcome**: 
[FILENAME].md should recommend triple double quotes for docstrings to align with PEP 257

</div>"