# MedConsult Platform (Payload CMS)

Production-ready architecture blueprint for a medical consultation platform tailored to Nigeria/Africa while scaling globally. The repository provides data models, access control patterns, API surfaces, and deployment/security guidance for a Payload CMS + Next.js implementation.

## Contents
- `docs/architecture.md`: system architecture overview
- `docs/database-schema.md`: relational schema & entity relationships
- `docs/collections.md`: Payload collections, access, and hooks
- `docs/api-endpoints.md`: API routes and workflows
- `docs/payment-flow.md`: Paystack payment flows
- `docs/realtime.md`: chat and video integration
- `docs/frontend.md`: frontend page requirements
- `docs/deployment.md`: docker & cloud deployment guidance
- `docs/security.md`: security and compliance practices

## Next Steps
1. Scaffold Payload CMS and Next.js apps.
2. Implement collections and access rules from `docs/collections.md`.
3. Integrate Paystack, Google Calendar, and WebRTC providers.
4. Add monitoring, analytics, and operational tooling.

## Running locally
This repository is a blueprint. To run a live instance, wire the files under `src/payload` into a Payload CMS app (and Next.js frontend) and then follow the steps below.

1. Install dependencies in your Payload app (`pnpm install` or `npm install`).
2. Configure environment variables (example values shown):
   - `PAYLOAD_SECRET=super-long-secret`
   - `PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000`
   - `PAYLOAD_DATABASE_URL=postgres://user:pass@localhost:5432/medconsult_live`
   - `PAYLOAD_DEMO_DATABASE_URL=postgres://user:pass@localhost:5432/medconsult_demo`
   - `PAYLOAD_DEMO_MODE=false`
3. Start Payload in dev mode: `pnpm payload dev` (or `npm run payload dev`).
4. Optional: seed data using the provided seed script (see below).

## Seeding data
`src/payload/seed.ts` contains a starter seed that creates an admin user, common specializations, and demo consultant data.

Example run command (from your Payload app):
```
node -r ts-node/register ./src/payload/seed.ts
```
