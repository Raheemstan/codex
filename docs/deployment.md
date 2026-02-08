# Deployment & Operations

## Docker
- Multi-stage builds for API and frontend.
- Environment variables for secrets (Paystack, JWT, DB).
- Health checks for API and realtime services.
  - Use `PAYLOAD_DEMO_MODE=true` to switch the database URL to `PAYLOAD_DEMO_DATABASE_URL`.

## Cloud
- AWS: ECS/Fargate + RDS + S3.
- GCP: Cloud Run + Cloud SQL + Cloud Storage.
- DigitalOcean: App Platform + Managed Postgres + Spaces.

## Observability
- Logging: structured JSON logs.
- Tracing: OpenTelemetry.
- Metrics: Prometheus + Grafana.

## Backups
- Daily DB snapshots.
- File storage retention policies.
