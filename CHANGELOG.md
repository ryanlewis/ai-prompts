# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Conventional Commits](https://conventionalcommits.org/).

## [Unreleased]

## [2025-06-29] - Obsidian Integration

### Added
- Obsidian configuration documentation in .obsidian/README.md
- File ignore plugin configuration for clean Obsidian workspace
- Comprehensive file exclusion patterns for build artifacts

### Changed
- Updated file-ignore plugin configuration with complete structure including rules and history

## [2025-06-29] - Documentation Updates

### Added
- CHANGELOG.md file following Keep a Changelog format
- Project change tracking and versioning documentation

## [2025-06-29] - Latest Changes

### Added
- Conventional commits guidelines to CLAUDE.md documentation
- Cross-platform line ending configuration for consistent development
- Site favicon from rlew.io
- HTML page title suffixes for better SEO
- Renovate bot configuration for automated dependency management
- Enhanced Renovate configuration with project-specific settings

### Changed
- Updated build tools and dependencies via Renovate
- Updated eleventy-notes dependencies
- Updated @parcel/transformer-sass to match parcel version
- Updated lucide dependency to ^0.525.0

### Fixed
- Parcel version compatibility issues
- Line ending consistency across platforms

## [2025-06-29] - Site Architecture

### Added
- Eleventy-based AI prompts documentation site
- Obsidian-style note-taking integration
- Static site generation with wikilinks support
- Task prompt template

### Changed
- Moved architecture guidance from README to tips guide
- Simplified README with correct repository links
- Replaced prompt-content divs with horizontal rule detection

### Removed
- Server.log files (added to gitignore)
- Completed TODO items from TODO.md

## [2025-06-23] - Project Foundation

### Added
- Initial project structure
- Obsidian git configuration
- TODO.md with project roadmap
- Obsidian configuration improvements

### Changed
- Simplified TODO.md to focus on explicitly mentioned items

## Project Versioning

This project follows semantic versioning principles:
- **MAJOR**: Incompatible API changes or significant architectural changes
- **MINOR**: New features and functionality additions
- **PATCH**: Bug fixes and small improvements

## Contributing

When adding entries to this changelog:
1. Follow the [Keep a Changelog](https://keepachangelog.com/) format
2. Use [Conventional Commits](https://conventionalcommits.org/) for commit messages
3. Group changes under Added, Changed, Deprecated, Removed, Fixed, or Security
4. Reference relevant issues or pull requests where applicable

---

*This changelog is maintained manually. For detailed commit history, see `git log`.*