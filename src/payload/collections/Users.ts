import type { CollectionConfig } from 'payload/types';

import { isAdmin, isAdminOrSelf } from '../access/roles';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: isAdminOrSelf,
    create: () => true,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: ['admin', 'consultant', 'user'],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: ['active', 'suspended', 'pending'],
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'locale',
      type: 'text',
      defaultValue: 'en-NG',
    },
  ],
};
