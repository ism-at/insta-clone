import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';
import { config } from 'dotenv'; 
config({ path: '.env' });
export default defineConfig({
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!
	},
	schema: './src/lib/schema/index.ts',
	out: './migrations'
});

// To run my added script --> "studio": "drizzle-kit studio" == npm run studi
// To run my added script --> "push": "drizzle-kit push" == npm run push