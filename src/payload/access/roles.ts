import type { Access } from 'payload/types';

export const isAdmin: Access = ({ req }) => {
  return req.user?.role === 'admin';
};

export const isConsultant: Access = ({ req }) => {
  return req.user?.role === 'consultant';
};

export const isUser: Access = ({ req }) => {
  return req.user?.role === 'user';
};

export const isAdminOrSelf: Access = ({ req }) => {
  if (req.user?.role === 'admin') {
    return true;
  }
  return {
    id: {
      equals: req.user?.id,
    },
  };
};

export const isAdminOrConsultant: Access = ({ req }) => {
  return req.user?.role === 'admin' || req.user?.role === 'consultant';
};
