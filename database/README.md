# Database Directory

This directory contains database-related configurations and migration files for the African Currency Platform.

## Structure

- `migrations/` - TypeORM migrations
- `seeds/` - Database seed files
- `backups/` - Database backup files

## Migrations

### Create a new migration

```bash
npm run typeorm migration:create -- -n MigrationName
```

### Run migrations

```bash
npm run typeorm migration:run
```

### Revert migrations

```bash
npm run typeorm migration:revert
```

## Seeds

Run seed files to populate initial data:

```bash
npm run seed
```

## Backup & Restore

Backup the database:

```bash
pg_dump african_currency > database/backups/backup_$(date +%Y%m%d_%H%M%S).sql
```

Restore from backup:

```bash
psql african_currency < database/backups/backup_filename.sql
```
