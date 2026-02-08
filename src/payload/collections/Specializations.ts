import type { CollectionConfig } from 'payload/types';

import { isAdmin } from '../access/roles';

export const Specializations: CollectionConfig = {
  slug: 'specializations',
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
  ],
};
