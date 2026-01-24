# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Conventional Commits](https://conventionalcommits.org/).

## [2026-01-24] - Fix Parcel Dependency Grouping in Renovate

### Fixed
- Fixed Renovate configuration to group all `@parcel/*` packages with `parcel` in the "build tools" group
- This prevents version mismatches where `parcel` gets updated but `@parcel/transformer-sass` doesn't, causing build failures

## [2025-10-28] - Cloudflare Pages Deployment Configuration

### Added
- Created `wrangler.toml` configuration file to specify correct build settings for Cloudflare Pages
- Added `.node-version` file to ensure Node.js 20 LTS is used during deployment

### Fixed
- Fixed Cloudflare Pages deployment error where build was incorrectly attempting to use `npx vercel build` instead of `npm run build`
- Resolved Edge Runtime error for static assets by properly configuring Eleventy build output directory (`.app/dist`)

## [2025-08-13] - Implement Jira Issue Command Update

### Changed
- Updated implement-jira-issue.md command with streamlined 10-step workflow
- Added git workflow integration including branch creation and workspace preparation
- Introduced context section showing current git status and recent commits
- Emphasised TDD approach with tests before implementation
- Simplified command structure from 161 lines to 49 lines for better clarity
- Added frontmatter fields for allowed-tools and argument-hint for Claude Code integration

## [2025-07-09] - Claude Code Commands and Prompts Enhancement

### Added
- New cleanup.md command in /commands/ directory for automating Git branch cleanup workflow
- Frontmatter and enhanced description to cleanup.md following implement-jira-issue.md format
- Frontmatter and enhanced description to gh-issue.md prompt for GitHub issue implementation workflow

### Changed
- Generalized gh-issue.md prompt to remove project-specific references (Dog Pound, Bun, TypeScript, Sapphire Framework)
- Updated gh-issue.md to work with any project setup and package manager

### Fixed
- Moved cleanup.md from incorrect /prompts/ directory to proper /commands/ directory

## [2025-07-03] - Software Engineering Focus Update

### Added
- Personal introduction to home page with direct statement about prompt collection

### Changed
- Updated home page (index.md) to explicitly highlight software engineering focus
- Revised main description to emphasise software engineering workflows
- Updated "Getting Started" section with engineering-specific benefits
- Renamed "Domain Focus" to "Engineering Stack & Tools" for clarity
- Added new "Software Engineering Workflows" section listing covered development lifecycle areas

## [2025-07-03] - Claude Code Commands Section

### Added
- New Claude Code Commands section to the documentation site
- Created /commands/ directory for Claude Code specific commands
- Added implement-jira-issue.md command documentation for automating Jira issue implementation workflow
- Updated app.mjs to include Claude Code Commands section in sidebar navigation after Prompts section

## [2025-07-03] - ClaudeLog Resource Addition

### Added
- ClaudeLog.com resource link to guides/resources.md under Community Resources section
- Comprehensive documentation resource for Claude Code developers with installation guides and best practices

## [2025-07-02] - Community Resources Update

### Added
- Awesome Claude Prompts repository link to guides/resources.md under Community Resources section
- Wikilink prevention instruction for CLAUDE.md references in project documentation

### Fixed
- Wrapped CLAUDE.md references in backticks to prevent wikilink creation (except in markdown link text)

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
- Comprehensive markdown conversion supporting headers, code blocks, lists, bold/italic text, and links

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
- Improved Jira ticket prompt with concrete examples and better formatting

### Fixed
- Parcel version compatibility issues
- Line ending consistency across platforms
- Fixed prompt copy functionality to preserve markdown formatting instead of copying plain text
- Updated copyPromptContent and fallbackCopyToClipboard methods to use markdown conversion
- Filtered out copy-to-clipboard button elements and SVG icons from copied markdown content
- Added whitespace normalization to prevent excessive newlines and formatting artifacts

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