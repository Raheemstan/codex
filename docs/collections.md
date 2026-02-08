# Payload Collections & Access Rules

## Access control patterns
- **Admins**: full CRUD access.
- **Consultants**: read/write their own profiles, availability, consultations.
- **Users**: read/write their own profile, appointments, and payments.
- **Field-level**: sensitive fields (medical history, notes) readable by consultants/admins only.

## Collections

### Users
- Auth collection with roles.
- Fields: email, role, status, locale, phone, linked consultant profile.
- Hooks: create audit logs, email verification.

### Consultants
- Fields: license, specializations, fee, payout info, verification status.
- Access: consultants can update their own profile; admins approve.
- Hooks: sync Paystack subaccount, notify admin on onboarding.

### Appointments
- Fields: user, consultant, schedule, status, meeting info.
- Access: user and assigned consultant can read; admin all.
- Hooks: on paid → create calendar event; on cancel → notify & release slot.

### Payments
- Fields: amount, currency, status, paystack ref, metadata.
- Access: user can read own; admin read all.
- Hooks: verify Paystack webhook signature.

### Consultations
- Fields: notes (encrypted), summary, attachments.
- Access: consultants write; users read own; admin all.

### Prescriptions
- Fields: medications, instructions, pdf.
- Access: consultants create; users read.

### Reviews
- Fields: rating, feedback.
- Access: users create for completed appointments only.

### AvailabilitySlots
- Fields: consultant, day_of_week, start/end, recurring.
- Access: consultants manage own.

### Specializations
- Fields: name, description, slug.
- Access: admin manage; read public.

### AuditLogs
- Fields: actor, action, entity, metadata.
- Access: admin read; system write.

### Settings
- Fields: key, value.
- Access: admin only.
