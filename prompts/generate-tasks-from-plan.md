---
title: Generate Tasks from Plan
author: "@ryanlewis"
related:
  - "[[Test Coverage Task]]"
  - "[[Create Jira Ticket]]"
---

## Description

This prompt creates detailed project plans by breaking down priorities into actionable tasks. It generates structured documentation with clear goals, approaches, validation steps, and completion tracking suitable for LLM agents like Claude Code.

---

<div class="prompt-content">

# Generate Tasks from Plan

Plan out the work required to complete the first priority in `[PROJECT_PATH]/docs/[PRIORITY_DOCUMENT].md`.

The plan should consist of the tasks required in order to complete priority 1.

The plan should be placed in `[PROJECT_PATH]/docs/[OUTPUT_FILENAME].md`.

Do not make assumptions. Ask questions to clarify your understanding.

Produce the plan in the following template:

```
# Priority 1 - Plan of work

## Summary

Summary of what priority 1 is.

## Goals

- List of goals for priority 1.

## Approach 

- Start with writing tests before making any changes to the code. 
- All work must be validated by the tests. 
- All code should have appropriate docstrings.
- All code should validate using `make check` from the root of the repository.

## Useful commands

All commands are to be ran from the root directory unless stated otherwise. Use as stated below and do not consider running commands any other way.

- `source .venv/bin/activate` - activate the virtualenv
- `uv run pytest` - run pytest
- `uv run python` - run python
- `uv run ruff` - run ruff for checking and formatting
- `make test-python` - run all python tests
- `make lint-python` - run all python linting

## Strict instructions

- You MUST validate your work with `uv run pytest` and `make test-python` from the root directory
- You MUST validate. your work with `uv run ruff check` and `make lint-python` from the root directory. You may use `uv run ruff` to complete linting tasks such as fixes and formatting.
- You MUST NOT make assumptions. Seek clarification from the user if you are unsure.
- You MUST update this plan file when you have completed a task, showing what tasks have been completed and provide a short summary of what has been done for that task. 
- You MUST complete a final validation (using `make check` from root directory) and update this plan with a statement. 

## Tasks

### Task grouping 1

1. [ ] Task 1
  - Useful information about task 1
2. [ ] Task 2
3. [ ] Task 3

### Task grouping 2

1. [ ] Task 4
2. [ ] Task 5
3. [ ] Task 6

## Notes for implementation

Other notes that are useful.

## Completion notes

Notes on completion of the tasks above.
```

This plan is to be passed to an LLM agent, such as Claude Code or OpenAI Codex. As such, evaluate whether the plan is sufficient for the work to be completed completely, and make suggestions to the user for any improvements either to:

- the instructions you have been given
- the structure of the template you have been given

</div>
