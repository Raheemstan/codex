# API Endpoints (Payload + custom routes)

## Auth
- `POST /api/users/login` → Payload auth
- `POST /api/users/forgot-password`
- `POST /api/users/reset-password`
- `POST /api/users/verify-email`

## Consultations & scheduling
- `POST /api/appointments` → create pending appointment
- `PATCH /api/appointments/:id/confirm` → admin override
- `POST /api/appointments/:id/cancel`
- `GET /api/consultants/:id/availability`
- `POST /api/availability-slots` → consultant-managed

## Payments (Paystack)
- `POST /api/payments/initialize` → create Paystack transaction
- `POST /api/payments/webhook` → verify & update status
- `POST /api/payments/:id/refund` → admin-only

## Chat & realtime
- `GET /api/chat/rooms/:appointmentId` → fetch room metadata
- `POST /api/chat/messages` → store chat messages (optional if using Socket.IO only)

## Video
- `POST /api/video/session` → request room/token from provider

## Prescriptions & records
- `POST /api/consultations/:id/prescription` → consultant creates
- `GET /api/prescriptions/:id/pdf` → secure download

## Admin analytics
- `GET /api/admin/analytics/revenue`
- `GET /api/admin/analytics/appointments`
- `GET /api/admin/analytics/consultants`
