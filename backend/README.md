# African Currency Platform - Backend

NestJS backend for the African Currency Exchange Platform.

## Features

- **User Management** - User registration, authentication, and profiles
- **Wallet Management** - Create and manage digital wallets
- **Transaction Processing** - Transfer and exchange transactions
- **Currency Management** - Manage supported currencies and exchange rates
- **News & Updates** - Content management for news and announcements
- **Economic Indicators** - Track economic data by country
- **Admin Dashboard** - Administrative tools and controls
- **Stellar Integration** - Blockchain wallet support
- **JWT Authentication** - Secure token-based authentication
- **Role-Based Access Control** - Admin, moderator, and user roles

## Technology Stack

- **Framework**: NestJS
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT
- **Blockchain**: Stellar SDK
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Jest
- **Validation**: Class-validator

## Project Structure

```
src/
├── modules/                 # Feature modules
│   ├── auth/               # Authentication
│   ├── user/               # User management
│   ├── wallet/             # Wallet operations
│   ├── transaction/        # Transaction engine
│   ├── currency/           # Currency data
│   ├── country/            # Country information
│   ├── exchange-rate/      # Exchange rates
│   ├── news/               # News management
│   ├── economic-indicator/ # Economic data
│   ├── admin/              # Admin operations
│   ├── role/               # Role management
│   └── news-category/      # News categories
├── config/                 # Configuration files
├── shared/                 # Shared utilities
│   ├── filters/            # Exception filters
│   ├── guards/             # Auth guards
│   ├── interceptors/       # HTTP interceptors
│   ├── decorators/         # Custom decorators
│   └── utils/              # Helper utilities
└── main.ts                 # Application entry point
```

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env

# Update .env with your database credentials
```

### Development

```bash
# Start development server
pnpm dev

# Server runs on http://localhost:3001
# API docs on http://localhost:3001/api/docs
```

### Building

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Database Setup

### Create Database

```bash
createdb african_currency
```

### Run Migrations

```bash
npm run typeorm migration:run
```

### Seed Data

```bash
npm run seed
```

## API Documentation

Swagger documentation is available at `http://localhost:3001/api/docs` when running the application.

## Authentication

All protected endpoints require JWT token:

```
Authorization: Bearer <your_token>
```

## Testing

```bash
# Run tests
pnpm test

# Run with coverage
pnpm test:cov

# Watch mode
pnpm test:watch
```

## Linting

```bash
# Check linting
pnpm lint

# Fix linting issues
pnpm lint:fix
```

## Environment Variables

See `.env.example` for all required variables:

- `DATABASE_*` - PostgreSQL connection
- `JWT_*` - JWT configuration
- `STELLAR_*` - Stellar blockchain config
- `CORS_ORIGIN` - Allowed origins
- `LOG_LEVEL` - Logging level

## Key Modules

### Auth Module
- User registration and login
- JWT token generation and validation
- Password hashing with bcrypt

### User Module
- User CRUD operations
- Profile management
- User deactivation/activation

### Wallet Module
- Wallet creation and management
- Balance tracking
- Wallet verification

### Transaction Module
- Transaction creation and management
- Transaction history
- Status tracking
- Integration with Stellar

### Currency Module
- Manage supported currencies
- Currency information
- Exchange rate data

## Deployment

### Production Build

```bash
pnpm build
NODE_ENV=production pnpm start
```

### Docker

```bash
docker build -t african-currency-backend .
docker run -p 3001:3001 african-currency-backend
```

## Security Best Practices

- ✅ JWT token validation on protected routes
- ✅ Password hashing with bcrypt
- ✅ Role-based access control
- ✅ Input validation with class-validator
- ✅ CORS configuration
- ✅ SQL injection prevention with TypeORM
- ✅ Error message sanitization

## Error Handling

All endpoints return standardized error responses:

```json
{
  "statusCode": 400,
  "message": "Error message",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "path": "/api/endpoint"
}
```

## Monitoring

Enable debug logging:

```env
LOG_LEVEL=debug
NODE_ENV=development
```

## Troubleshooting

### Database Connection Error
- Verify PostgreSQL is running
- Check DATABASE_URL in .env
- Ensure database exists

### Port Already in Use
```bash
lsof -ti :3001 | xargs kill -9
```

### Module Not Found
```bash
pnpm install
```

## Contributing

1. Create feature branch
2. Make changes
3. Run tests and lint
4. Commit with descriptive message
5. Push and create pull request

## License

MIT

## Support

For issues and questions, please open a GitHub issue or contact support.
