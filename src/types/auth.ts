import { z } from 'zod';

export const GoogleAuthSchema = z.object({ url: z.string().url() });

export const AuthenticatedUserSchema = z.object({
	jwt: z.string(),
	user: z.object({
		id: z.number(),
		username: z.string(),
		email: z.string(),
		provider: z.string(),
		confirmed: z.boolean(),
		blocked: z.boolean(),
		createdAt: z.string(),
		updatedAt: z.string(),
	}),
});
