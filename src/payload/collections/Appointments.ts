import type { CollectionConfig } from 'payload/types';

import { isAdmin, isAdminOrConsultant } from '../access/roles';

export const Appointments: CollectionConfig = {
  slug: 'appointments',
  access: {
    read: isAdminOrConsultant,
    create: ({ req }) => Boolean(req.user),
    update: isAdminOrConsultant,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'consultant',
      type: 'relationship',
      relationTo: 'consultants',
      required: true,
    },
    {
      name: 'scheduledStart',
      type: 'date',
      required: true,
    },
    {
      name: 'scheduledEnd',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending_payment',
      options: ['pending_payment', 'confirmed', 'completed', 'canceled', 'no_show'],
    },
    {
      name: 'meetingProvider',
      type: 'select',
      options: ['daily', 'agora', 'twilio'],
    },
    {
      name: 'meetingRoomId',
      type: 'text',
    },
    {
      name: 'calendarEventId',
      type: 'text',
    },
  ],
};
