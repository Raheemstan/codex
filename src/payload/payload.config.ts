import path from 'path';
import { buildConfig } from 'payload/config';

import { collections } from './collections';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
  },
  collections,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
