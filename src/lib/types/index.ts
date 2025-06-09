import type { userTable } from "$lib/schema";

export type User = typeof userTable.$inferInsert;

