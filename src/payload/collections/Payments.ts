import type { CollectionConfig } from 'payload/types';

import { isAdmin } from '../access/roles';

export const Payments: CollectionConfig = {
  slug: 'payments',
  access: {
    read: ({ req }) => req.user?.role === 'admin' || Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
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
      name: 'paystackReference',
      type: 'text',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: 'NGN',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'initiated',
      options: ['initiated', 'paid', 'failed', 'refunded'],
    },
    {
      name: 'metadata',
      type: 'json',
    },
  ],
};
