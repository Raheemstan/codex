# Database Schema (PostgreSQL)

## Core entities

### users
- id (uuid, pk)
- email (unique)
- password_hash
- role (enum: admin, consultant, user)
- status (enum: active, suspended, pending)
- phone
- locale
- created_at / updated_at

### consultants
- id (uuid, pk)
- user_id (fk users.id)
- license_number
- specializations (array or join table)
- fee_amount
- verification_status (enum: pending, approved, rejected)
- availability_timezone
- payout_subaccount_id
- created_at / updated_at

### user_profiles
- id (uuid, pk)
- user_id (fk users.id)
- date_of_birth
- gender
- medical_history (jsonb)
- emergency_flag (boolean)

### appointments
- id (uuid, pk)
- user_id (fk users.id)
- consultant_id (fk consultants.id)
- scheduled_start / scheduled_end
- status (pending_payment, confirmed, completed, canceled, no_show)
- meeting_provider (daily/agora/twilio)
- meeting_room_id
- calendar_event_id
- created_at / updated_at

### payments
- id (uuid, pk)
- appointment_id (fk appointments.id)
- user_id (fk users.id)
- paystack_reference
- amount
- currency
- status (initiated, paid, failed, refunded)
- metadata (jsonb)
- created_at / updated_at

### consultations
- id (uuid, pk)
- appointment_id (fk appointments.id)
- consultant_id (fk consultants.id)
- user_id (fk users.id)
- notes (encrypted)
- summary
- created_at / updated_at

### prescriptions
- id (uuid, pk)
- consultation_id (fk consultations.id)
- medications (jsonb)
- instructions
- pdf_url
- created_at / updated_at

### reviews
- id (uuid, pk)
- appointment_id (fk appointments.id)
- user_id (fk users.id)
- consultant_id (fk consultants.id)
- rating (int)
- feedback
- created_at

### availability_slots
- id (uuid, pk)
- consultant_id (fk consultants.id)
- day_of_week
- start_time / end_time
- is_recurring

### specializations
- id (uuid, pk)
- name
- description

### audit_logs
- id (uuid, pk)
- actor_id (fk users.id)
- action
- entity_type
- entity_id
- metadata (jsonb)
- created_at

### settings
- id (uuid, pk)
- key
- value (jsonb)

## Indices
- appointments(user_id, consultant_id, scheduled_start)
- payments(paystack_reference)
- consultants(user_id)
- reviews(consultant_id, rating)
