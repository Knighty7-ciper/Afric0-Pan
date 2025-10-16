# Configuration Directory

This directory contains environment-specific configuration files for the African Currency Platform.

## Files

- `development.yml` - Development environment configuration
- `staging.yml` - Staging environment configuration  
- `production.yml` - Production environment configuration
- `secrets.yml` - Secret keys and credentials (should not be committed)

## Usage

Configuration is loaded from environment variables defined in `.env` files at the project root.

## Required Environment Variables

See `../.env.example` for all required environment variables.

## Security

Never commit secrets or sensitive credentials to version control. Use environment variables instead.
