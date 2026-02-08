export const isDemoMode = process.env.PAYLOAD_DEMO_MODE === 'true';

export const getDatabaseURL = () => {
  if (isDemoMode) {
    return process.env.PAYLOAD_DEMO_DATABASE_URL;
  }
  return process.env.PAYLOAD_DATABASE_URL;
};
