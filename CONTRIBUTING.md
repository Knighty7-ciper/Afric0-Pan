# Contributing to African Currency Platform

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and professional
- Focus on constructive feedback
- Support diverse perspectives
- Report issues appropriately

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Set up development environment (see README.md)

## Development Workflow

### Setup Development Environment

```bash
git clone https://github.com/yourusername/african-currency-platform.git
cd african-currency-platform
pnpm install
cp .env.example .env
# Update .env with your configuration
```

### Before Starting Work

1. Sync with main branch
2. Create feature branch from latest main
3. Keep commits clean and focused
4. Write meaningful commit messages

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: Build/setup

Example:
```
feat(wallet): add wallet verification endpoint

- Implement verification logic
- Add validation
- Update tests

Closes #123
```

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful variable names
- Add JSDoc comments for complex logic

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific test
pnpm test wallet

# Run with coverage
pnpm test:cov

# Watch mode
pnpm test:watch
```

### Linting & Formatting

```bash
# Check linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

## Pull Request Process

### Before Submitting PR

1. Update documentation
2. Add/update tests for new code
3. Run full test suite: `pnpm test`
4. Run linting: `pnpm lint`
5. Build project: `pnpm build`
6. Check for console warnings/errors
7. Update CHANGELOG.md

### PR Guidelines

1. Link related issues: `Fixes #123`
2. Provide clear description of changes
3. Include screenshots for UI changes
4. Keep PR focused on single feature
5. Request review from maintainers

### PR Title Format

```
<type>(<scope>): <description>
```

## Issue Guidelines

### Reporting Bugs

Include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (OS, browser, versions)
- Screenshots/logs if applicable

### Feature Requests

Include:
- Use case description
- Expected behavior
- Why it's needed
- Possible implementation approach

## Testing Requirements

### Backend Tests

```bash
# Unit tests
pnpm backend:test

# E2E tests
pnpm backend:test:e2e

# Coverage report
pnpm backend:test:cov
```

### Frontend Tests

```bash
# Unit tests
pnpm frontend:test

# Watch mode
pnpm frontend:test:watch
```

## Documentation

Update documentation when:
- Adding new features
- Changing API endpoints
- Modifying configuration
- Updating dependencies

## Performance Considerations

- Optimize database queries
- Use pagination for large datasets
- Cache frequently accessed data
- Profile before optimization

## Security Review

When submitting code:
- No hardcoded secrets
- Validate all inputs
- Use parameterized queries
- Follow OWASP guidelines

## Merging

- Squash and merge for single features
- Rebase and merge for multiple commits
- Delete branch after merging
- Update related issues

## Release Process

1. Update CHANGELOG.md
2. Bump version in package.json
3. Create git tag
4. Push changes and tag
5. Create GitHub release
6. Deploy to production

## Questions?

- Check existing documentation
- Search closed issues
- Ask in discussions
- Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

Thank you for contributing! 🎉
