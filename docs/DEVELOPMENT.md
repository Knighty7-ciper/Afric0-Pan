# Development Guide

## Prerequisites

- Node.js (v18+)
- PostgreSQL (v12+)
- pnpm (v10+)

## Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd african-currency-platform
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Copy environment files:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Update `.env` with your local database credentials.

### 4. Database Setup

Create PostgreSQL database:

```bash
createdb african_currency
```

### 5. Run Development Servers

Start both backend and frontend:

```bash
pnpm dev
```

Or run individually:

```bash
# Backend only
pnpm backend:dev

# Frontend only
pnpm frontend:dev
```

## Project Structure

```
african-currency-platform/
├── backend/           # NestJS backend
├── frontend/          # Next.js frontend
├── database/          # Database migrations
├── config/            # Configuration files
├── docs/              # Documentation
└── scripts/           # Utility scripts
```

## Database Migrations

Create a migration:

```bash
npm run typeorm migration:create -- -n MigrationName
```

Run migrations:

```bash
npm run typeorm migration:run
```

## Testing

Run tests:

```bash
pnpm test
```

Run tests with coverage:

```bash
pnpm test:cov
```

## Linting

Lint code:

```bash
pnpm lint
```

Auto-fix lint issues:

```bash
pnpm lint:fix
```

## Building

Build for production:

```bash
pnpm build
```

## API Documentation

Swagger documentation available at:

```
http://localhost:3001/api/docs
```

## Common Issues

### Port Already in Use

Kill process on port 3001:

```bash
lsof -ti :3001 | xargs kill -9
```

### Database Connection Error

Verify PostgreSQL is running and credentials are correct in `.env`.

### Module Not Found

Install missing dependencies:

```bash
pnpm install
```

## Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Follow NestJS best practices

## Debugging

Enable debug logs:

```env
LOG_LEVEL=debug
NODE_ENV=development
```

Use Chrome DevTools:

```bash
node --inspect-brk -r ts-node/register src/main.ts
```

## Git Workflow

1. Create feature branch
2. Make changes
3. Run tests and lint
4. Commit with descriptive message
5. Push and create pull request

## Contributing

See CONTRIBUTING.md for guidelines.
