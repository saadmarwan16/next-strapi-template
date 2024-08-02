import { actionClient } from '@/lib/safeAction';
import { AuthenticatedUserSchema } from '@/types/auth';
import { cookies } from 'next/headers';

export const setCookie = actionClient
	.schema(AuthenticatedUserSchema.omit({ user: true }))
	.action(async ({ parsedInput: { jwt } }) => {
		cookies().set('jwt', jwt, {
			secure: true,
		});
	});
