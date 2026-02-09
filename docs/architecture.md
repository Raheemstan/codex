# Architecture Overview

## High-level services
- **Payload CMS API** (Node.js, TypeScript): primary backend, auth, RBAC, CMS admin UI.
- **Next.js App Router**: patient + consultant experiences, landing pages, dashboards.
- **Realtime Gateway**: Socket.IO service for chat, presence, typing indicators.
- **Video Service**: WebRTC provider (Daily/Agora/Twilio) with tokenized sessions.
- **Notifications**: Email (SendGrid/Mailgun) + SMS (Africa-friendly gateway).
- **Payments**: Paystack (one-time + subscriptions) with webhook verification.
- **Scheduling**: internal scheduling engine + Google Calendar sync.

## Data flow (summary)
1. User books appointment → creates `Appointment` with status `pending_payment`.
2. Client initializes Paystack transaction → webhook confirms → `Payment` updates.
3. Appointment transitions to `confirmed` and calendar events are created.
4. Chat room and video session tokens are provisioned.
5. Post-consultation: consultant adds notes/prescription, patient receives summary.

## Security boundaries
- Payload API handles auth, role-based access, and audit logging.
- PII and medical data encrypted at rest; field-level access limits exposure.
- Webhook verification uses secret signing and replay protection.

## Scalability considerations
- Horizontal scaling for API + realtime service.
- PostgreSQL read replicas for analytics queries.
- Object storage for file uploads (prescriptions, records).
