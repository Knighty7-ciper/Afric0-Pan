# African Currency Platform - API Documentation

## Overview

This is the REST API for the African Currency Exchange Platform. The API is built with NestJS and uses JWT for authentication.

## Base URL

```
http://localhost:3001/api
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Users

- `GET /users` - Get all users (admin only)
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user (admin only)

### Wallets

- `GET /wallets` - Get user wallets
- `GET /wallets/:id` - Get wallet details
- `POST /wallets` - Create wallet
- `PUT /wallets/:id` - Update wallet
- `PUT /wallets/:id/verify` - Verify wallet
- `DELETE /wallets/:id` - Delete wallet

### Transactions

- `GET /transactions` - Get user transactions
- `GET /transactions/:id` - Get transaction details
- `GET /transactions/history` - Get transaction history
- `POST /transactions` - Create transaction
- `PUT /transactions/:id` - Update transaction
- `GET /transactions/:id/status` - Get transaction status

### Currencies

- `GET /currencies` - Get all currencies
- `GET /currencies/:code` - Get currency details
- `POST /currencies` - Create currency (admin only)
- `PUT /currencies/:code` - Update currency (admin only)

### Exchange Rates

- `GET /exchange-rates` - Get all exchange rates
- `GET /exchange-rates/pair` - Get specific pair rate
- `GET /exchange-rates/:id` - Get exchange rate details
- `POST /exchange-rates` - Create exchange rate (admin only)

### News

- `GET /news` - Get published news
- `GET /news/featured` - Get featured news
- `GET /news/category/:id` - Get news by category
- `GET /news/:id` - Get news details
- `POST /news` - Create news (admin only)
- `PUT /news/:id` - Update news (admin only)

### Admin

- `POST /admin/login` - Admin login
- `GET /admin` - Get all admins (super admin only)
- `GET /admin/:id` - Get admin details
- `POST /admin` - Create admin (super admin only)
- `PUT /admin/:id` - Update admin (super admin only)
- `DELETE /admin/:id` - Delete admin (super admin only)

## Error Responses

All errors follow this format:

```json
{
  "statusCode": 400,
  "message": "Error message",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "path": "/api/endpoint"
}
```

## Response Format

Successful responses follow this format:

```json
{
  "status": "success",
  "statusCode": 200,
  "data": {},
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Pagination

Endpoints supporting pagination use these query parameters:

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10, max: 100)

## Rate Limiting

Currently no rate limiting is implemented. This should be added for production.

## CORS

CORS is enabled for the frontend URL specified in environment variables.

## Swagger Documentation

Interactive API documentation is available at:

```
http://localhost:3001/api/docs
```
