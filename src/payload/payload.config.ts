import path from 'path';
import { buildConfig } from 'payload/config';

import { collections } from './collections';
import { getDatabaseURL } from './database';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
  },
  db: {
    url: getDatabaseURL(),
  },
  collections,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
