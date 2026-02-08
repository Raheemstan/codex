import type { CollectionConfig } from 'payload/types';

import { isAdmin } from '../access/roles';

export const Settings: CollectionConfig = {
  slug: 'settings',
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'value',
      type: 'json',
    },
  ],
};
