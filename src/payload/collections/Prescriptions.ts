import type { CollectionConfig } from 'payload/types';

import { isAdminOrConsultant } from '../access/roles';

export const Prescriptions: CollectionConfig = {
  slug: 'prescriptions',
  access: {
    read: ({ req }) => Boolean(req.user),
    create: isAdminOrConsultant,
    update: isAdminOrConsultant,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'consultation',
      type: 'relationship',
      relationTo: 'consultations',
      required: true,
    },
    {
      name: 'medications',
      type: 'json',
    },
    {
      name: 'instructions',
      type: 'textarea',
    },
    {
      name: 'pdfUrl',
      type: 'text',
    },
  ],
};
