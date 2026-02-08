import type { CollectionConfig } from 'payload/types';

import { isAdminOrConsultant } from '../access/roles';

export const AvailabilitySlots: CollectionConfig = {
  slug: 'availability-slots',
  access: {
    read: () => true,
    create: isAdminOrConsultant,
    update: isAdminOrConsultant,
    delete: isAdminOrConsultant,
  },
  fields: [
    {
      name: 'consultant',
      type: 'relationship',
      relationTo: 'consultants',
      required: true,
    },
    {
      name: 'dayOfWeek',
      type: 'select',
      required: true,
      options: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    },
    {
      name: 'startTime',
      type: 'text',
      required: true,
    },
    {
      name: 'endTime',
      type: 'text',
      required: true,
    },
    {
      name: 'isRecurring',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
};
