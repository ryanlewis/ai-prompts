# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Conventional Commits](https://conventionalcommits.org/).

## [2025-06-29] - Comprehensive Site Enhancement

### Added
- Eleventy-based AI prompts documentation site with Obsidian-style note-taking integration
- Static site generation with wikilinks support and task prompt template
- New guides/resources.md file containing official Claude Code documentation links
- Official Claude Code documentation section to index.md with links to Anthropic's official resources
- Detailed summaries for Claude Code documentation and Anthropic Quickstarts CLAUDE.md
- Obsidian configuration documentation in .obsidian/README.md
- File ignore plugin configuration for clean Obsidian workspace with comprehensive file exclusion patterns
- CHANGELOG.md file following Keep a Changelog format
- Conventional commits guidelines to CLAUDE.md documentation
- Cross-platform line ending configuration for consistent development
- Site favicon from rlew.io and HTML page title suffixes for better SEO
- Renovate bot configuration for automated dependency management with enhanced project-specific settings
- Community Resources section with Awesome Claude Code repository link
- UK English spelling conventions applied to new documentation
- Claude Code website link to README.md Resources section

### Changed
- Moved Resources section from index.md to dedicated guides/resources.md file
- Removed reference to .plans/00-SETUP.md from troubleshooting section
- Added invitation to create GitHub issues for troubleshooting help
- Reduced spacing between copy prompt button and following headers for better visual flow
- Applied consistent spacing for paragraphs following copy prompt button
- Updated file-ignore plugin configuration with complete structure including rules and history
- Added changelog management instructions to CLAUDE.md
- Removed [Unreleased] section from changelog format
- Moved architecture guidance from README to tips guide
- Simplified README with correct repository links
- Replaced prompt-content divs with horizontal rule detection
- Updated build tools and dependencies via Renovate
- Updated eleventy-notes dependencies
- Updated @parcel/transformer-sass to match parcel version
- Updated lucide dependency to ^0.525.0

### Fixed
- Parcel version compatibility issues
- Line ending consistency across platforms

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

## Contributing

When adding entries to this changelog:
1. Follow the [Keep a Changelog](https://keepachangelog.com/) format
2. Use [Conventional Commits](https://conventionalcommits.org/) for commit messages
3. Group changes under Added, Changed, Deprecated, Removed, Fixed, or Security
4. Reference relevant issues or pull requests where applicable

---

*This changelog is maintained manually. For detailed commit history, see `git log`.*