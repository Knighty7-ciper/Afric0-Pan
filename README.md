# African Currency Platform

A comprehensive currency exchange platform for African markets with Stellar blockchain integration.

## Overview

The African Currency Platform is a full-stack application that enables users to:
- Exchange currencies across African markets
- Manage digital wallets with Stellar integration
- Track exchange rates and economic indicators
- Access market news and updates
- Trade with secure authentication

## Features

### User Features
- 🔐 User registration and authentication
- 💼 Digital wallet management
- 💱 Currency exchange and transfers
- 📊 Real-time exchange rates
- 📰 Market news and updates
- 📈 Economic indicators by country
- 🔗 Stellar blockchain integration

### Admin Features
- 👥 User management
- 💰 Currency and exchange rate management
- 📰 News and content management
- 📊 Economic data management
- 📋 Transaction monitoring
- 🔧 System configuration

## Technology Stack

### Frontend
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: React Hooks & Context
- **Forms**: React Hook Form with Zod validation

### Backend
- **Framework**: NestJS
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT
- **API**: REST with Swagger documentation
- **Blockchain**: Stellar SDK

### Infrastructure
- **Package Manager**: pnpm
- **Monorepo**: pnpm workspaces
- **Testing**: Jest
- **CI/CD**: Ready for deployment

## Project Structure

```
african-currency-platform/
├── backend/                 # NestJS backend server
│   ├── src/
│   │   ├── modules/        # Feature modules
│   │   ├── config/         # Configuration
│   │   ├── shared/         # Shared utilities
│   │   └── main.ts         # Entry point
│   └��─ test/               # Test files
├── frontend/                # Next.js frontend application
│   ├── app/                # Next.js app directory
│   ├── components/         # React components
│   ├── lib/                # Utility functions
│   └── public/             # Static assets
├── database/               # Database migrations & seeds
├── docs/                   # Documentation
├── scripts/                # Utility scripts
└── config/                 # Configuration files
```

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- pnpm 10+

### Installation

```bash
# Clone repository
git clone <repository-url>
cd african-currency-platform

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Update .env files with your configuration
```

### Database Setup

```bash
# Create PostgreSQL database
createdb african_currency

# Run migrations
cd backend
npm run typeorm migration:run
```

### Development

```bash
# Start both frontend and backend
pnpm dev

# Or run individually
pnpm backend:dev    # Backend on http://localhost:3001
pnpm frontend:dev   # Frontend on http://localhost:3000
```

### Building

```bash
# Build both packages
pnpm build

# Or build individually
pnpm backend:build
pnpm frontend:build
```

## API Documentation

Swagger documentation available at: `http://localhost:3001/api/docs`

### Main Endpoints

- **Auth**: `/auth/register`, `/auth/login`
- **Users**: `/users`
- **Wallets**: `/wallets`
- **Transactions**: `/transactions`
- **Currencies**: `/currencies`
- **Exchange Rates**: `/exchange-rates`
- **News**: `/news`
- **Admin**: `/admin`

## Environment Variables

### Root (.env)
```env
BACKEND_PORT=3001
FRONTEND_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@localhost:5432/african_currency
JWT_SECRET=your_secret_key
```

### Backend (backend/.env)
```env
NODE_ENV=development
DATABASE_HOST=localhost
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
STELLAR_NETWORK=testnet
STELLAR_SIGNING_KEY=your_key
```

See `.env.example` files for all variables.

## Authentication

### User Registration
```bash
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "Password123",
  "firstName": "John"
}
```

### User Login
```bash
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "Password123"
}
```

### Protected Requests
```bash
GET /users/:id
Authorization: Bearer <token>
```

## Testing

```bash
# Run all tests
pnpm test

# Backend tests
pnpm backend:test

# Frontend tests
pnpm frontend:test

# With coverage
pnpm test:cov
```

## Linting

```bash
# Check linting
pnpm lint

# Fix issues
pnpm lint:fix
```

## Deployment

### Production Build
```bash
pnpm build
NODE_ENV=production pnpm start
```

### Docker
```bash
docker-compose up -d
```

### Environment for Production
```env
NODE_ENV=production
DATABASE_URL=postgresql://prod_user:prod_pass@prod_host:5432/african_currency
JWT_SECRET=production_secret_key
STELLAR_NETWORK=public
CORS_ORIGIN=https://yourdomain.com
```

## Documentation

- [Development Guide](./docs/DEVELOPMENT.md)
- [API Documentation](./docs/API.md)
- [Stellar Integration](./docs/STELLAR_INTEGRATION.md)
- [Backend README](./backend/README.md)

## Key Features Explained

### Wallet Management
Users can create wallets for different currencies and manage their balances securely using Stellar blockchain integration.

### Currency Exchange
Real-time currency exchange with automatic rate calculation and transaction processing.

### Economic Indicators
Track economic data for African countries including GDP, inflation, unemployment rates.

### News Management
Admin-managed news system with category organization for market updates.

### Transaction History
Complete transaction history with status tracking and filtering capabilities.

## Security

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Role-based access control
- ✅ Input validation & sanitization
- ✅ CORS protection
- ✅ SQL injection prevention
- ✅ Secure environment variable handling

## Performance

- 📦 Optimized bundle size with Next.js
- ⚡ Database query optimization
- 🔄 Caching strategies implemented
- 🚀 API pagination support
- 💾 Database indexing on frequently queried columns

## Monitoring & Logging

```env
LOG_LEVEL=debug  # For development
LOG_LEVEL=info   # For production
```

## Troubleshooting

### Database Connection Issues
```bash
# Check PostgreSQL status
psql -U postgres -d african_currency -c "SELECT 1"

# Reset database
dropdb african_currency
createdb african_currency
npm run typeorm migration:run
```

### Port Already in Use
```bash
# Backend port 3001
lsof -ti :3001 | xargs kill -9

# Frontend port 3000
lsof -ti :3000 | xargs kill -9
```

### Dependencies Installation
```bash
# Clear cache and reinstall
rm -rf node_modules
pnpm install
```

## Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open pull request

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "feat: add my feature"

# Push changes
git push origin feature/my-feature

# Create pull request on GitHub
```

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions:
- Open a GitHub issue
- Contact: support@africancurrency.com
- Documentation: https://docs.africancurrency.com

## Roadmap

- [ ] Mobile application (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Push notifications
- [ ] Two-factor authentication
- [ ] Cryptocurrency integration
- [ ] P2P marketplace

## Acknowledgments

- Built with [NestJS](https://nestjs.com/)
- Frontend with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Blockchain integration with [Stellar](https://stellar.org/)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release notes and updates.

---

**Last Updated**: January 2024
**Version**: 1.0.0
