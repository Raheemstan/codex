import type { CollectionConfig } from 'payload/types';

import { isAdmin, isAdminOrConsultant } from '../access/roles';

export const Consultants: CollectionConfig = {
  slug: 'consultants',
  access: {
    read: () => true,
    create: isAdminOrConsultant,
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
      name: 'licenseNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'specializations',
      type: 'relationship',
      relationTo: 'specializations',
      hasMany: true,
    },
    {
      name: 'feeAmount',
      type: 'number',
      required: true,
    },
    {
      name: 'verificationStatus',
      type: 'select',
      defaultValue: 'pending',
      options: ['pending', 'approved', 'rejected'],
    },
    {
      name: 'availabilityTimezone',
      type: 'text',
      defaultValue: 'Africa/Lagos',
    },
    {
      name: 'payoutSubaccountId',
      type: 'text',
    },
  ],
};
