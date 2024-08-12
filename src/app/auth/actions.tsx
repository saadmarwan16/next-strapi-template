import { env } from '@/env';
import { setCookie } from '@/lib/cookies';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { Routes } from '@/lib/routes';
import { actionClient } from '@/lib/safeAction';
import { AuthenticatedUserSchema } from '@/types/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const authenticateWithGoogle = actionClient
	.schema(z.string())
	.action(async ({ parsedInput }) => {
		const { jwt } = await fetchWithZod(
			AuthenticatedUserSchema,
			`${env.NEXT_PUBLIC_API_URL}/auth/google/callback?access_token=${parsedInput}`
		);

		setCookie('jwt', jwt);

		redirect(Routes.HOME);
	});
