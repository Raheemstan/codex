# Realtime Chat & Video

## Chat (Socket.IO)
- Namespace: `/consultations`
- Rooms: `appointment:{id}`
- Events: `message:new`, `typing:start`, `typing:stop`, `read:receipt`.
- Persistence: store messages in `ChatMessages` collection.

## Video
- Use Daily/Agora/Twilio to generate room + token.
- Token stored in `appointments` for the scheduled window.
- Fallback: if video fails, redirect to chat room.

## Security
- Room access validated via JWT + appointment ownership.
- Tokens are short-lived and scoped per appointment.
