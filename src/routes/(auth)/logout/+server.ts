// +server.ts: API Routing For Logout
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
	// Delete the session of cookies
	cookies.delete('session', { path: '/' });

	throw redirect(302, '/login');
};
