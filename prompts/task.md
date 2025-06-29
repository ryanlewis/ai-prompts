---
title: Test Coverage Task
author: "@ryanlewis"
related:
  - "[[Generate Tasks from Plan]]"
---

## Description

This prompt provides comprehensive instructions for improving test coverage in Python projects. It includes mandatory development workflows, architecture details, code style guidelines, and specific commands for testing and linting in a polyglot monorepo environment.

---

## Task

Improve the coverage of the following files:

- [PROJECT_PATH]/[MODULE_NAME]/[FILE1].py
- [PROJECT_PATH]/[MODULE_NAME]/[FILE2].py
- [PROJECT_PATH]/[MODULE_NAME]/__init__.py
- [PROJECT_PATH]/[MODULE_NAME]/[FILE3].py

Aim for 100% coverage.

## Mandatory dev workflow

```bash
source .venv/bin/activate            # activate Python virtualenv
uv sync --frozen --all-extras --dev  # install deps
uv run pre-commit                    # pre-commit checks
make test-python                     # run all python tests
make lint-python                     # lint all python
```

Use `uv run ruff` to format and lint code.

You MUST finalise all Python work with `make check` and `uv run pre-commit` to ensure tests pass and code is linted.

## Architecture

[REPO_TYPE]: Python ([PACKAGE_MANAGER], [LINTER], [TYPE_CHECKER]) + [FRONTEND_TECH] + [INFRASTRUCTURE_TECH]

## Code Style

- **Python**: 88 char lines, double quotes, snake_case, type hints required, AAA test pattern
- **Testing**: pytest with `conftest.py` fixtures, `models.ALLOW_MODEL_REQUESTS = False` blocks API calls
- **Branch naming**: `type/personid-jiraid-description`
- **Docstrings**: Google-style for all public functions

## Key Rules

- Never commit secrets
- Add Python packages to `[CONFIG_FILE]` workspace members
- Tests in `[TEST_DIR]/test_*.py`
- Never add watermarks or signatures to commit messages
