import { Appointments } from './Appointments';
import { AuditLogs } from './AuditLogs';
import { AvailabilitySlots } from './AvailabilitySlots';
import { Consultants } from './Consultants';
import { Consultations } from './Consultations';
import { Payments } from './Payments';
import { Prescriptions } from './Prescriptions';
import { Reviews } from './Reviews';
import { Settings } from './Settings';
import { Specializations } from './Specializations';
import { Users } from './Users';

export const collections = [
  Users,
  Consultants,
  Specializations,
  AvailabilitySlots,
  Appointments,
  Payments,
  Consultations,
  Prescriptions,
  Reviews,
  AuditLogs,
  Settings,
];
