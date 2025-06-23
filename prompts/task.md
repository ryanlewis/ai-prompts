## Task

Improve the coverage of the following files:

- src/py/mcp_auth_github/storage/sqlite.py
- src/py/mcp_auth_github/storage/redis.py
- src/py/mcp_auth_github/storage/__init__.py
- src/py/mcp_auth_github/storage/memory.py

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

Polyglot monorepo: Python (uv, ruff, mypy) + JavaScript (Yarn, Turborepo) + Infrastructure (Terraform, Docker, AWS Lambda)

## Code Style

- **Python**: 88 char lines, double quotes, snake_case, type hints required, AAA test pattern
- **Testing**: pytest with `conftest.py` fixtures, `models.ALLOW_MODEL_REQUESTS = False` blocks API calls
- **Branch naming**: `type/personid-jiraid-description`
- **Docstrings**: Google-style for all public functions

## Key Rules

- Never commit secrets
- Add Python packages to `pyproject.toml` workspace members
- Tests in `tests/test_*.py`
- Never add watermarks or signatures to commit messages
