import type { CollectionConfig } from 'payload/types';

import { isAdminOrConsultant } from '../access/roles';

export const Consultations: CollectionConfig = {
  slug: 'consultations',
  access: {
    read: isAdminOrConsultant,
    create: isAdminOrConsultant,
    update: isAdminOrConsultant,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'appointment',
      type: 'relationship',
      relationTo: 'appointments',
      required: true,
    },
    {
      name: 'consultant',
      type: 'relationship',
      relationTo: 'consultants',
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'summary',
      type: 'textarea',
    },
  ],
};
