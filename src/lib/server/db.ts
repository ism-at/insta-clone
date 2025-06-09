import { env } from '$env/dynamic/private';
//import { DATABASE_URL } from '$env/static/private';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '$lib/schema';

const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql, { schema });

// Original line from --> https://orm.drizzle.team/docs/connect-neon
// const sql = neon(process.env.DATABASE_URL!);
// const db = drizzle({ client: sql });