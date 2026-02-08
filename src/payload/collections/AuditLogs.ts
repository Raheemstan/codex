import type { CollectionConfig } from 'payload/types';

import { isAdmin } from '../access/roles';

export const AuditLogs: CollectionConfig = {
  slug: 'audit-logs',
  access: {
    read: isAdmin,
    create: () => true,
    update: () => false,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'actor',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'action',
      type: 'text',
      required: true,
    },
    {
      name: 'entityType',
      type: 'text',
    },
    {
      name: 'entityId',
      type: 'text',
    },
    {
      name: 'metadata',
      type: 'json',
    },
  ],
};
