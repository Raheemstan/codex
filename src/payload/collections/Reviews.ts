import type { CollectionConfig } from 'payload/types';

import { isAdmin } from '../access/roles';

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  access: {
    read: () => true,
    create: ({ req }) => req.user?.role === 'user',
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'appointment',
      type: 'relationship',
      relationTo: 'appointments',
      required: true,
    },
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
      name: 'rating',
      type: 'number',
      required: true,
    },
    {
      name: 'feedback',
      type: 'textarea',
    },
  ],
};
