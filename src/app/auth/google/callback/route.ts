import { env } from '@/env';
import { setCookie } from '@/lib/cookies';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { Routes } from '@/lib/routes';
import { AuthenticatedUserSchema } from '@/types/auth';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
	const access_token = request.nextUrl.searchParams.get('access_token');
	if (!access_token) {
		return Response.json(
			{ error: 'No access token found' },
			{
				status: 401,
			}
		);
	}

	try {
		const { jwt } = await fetchWithZod(
			AuthenticatedUserSchema,
			`${env.NEXT_PUBLIC_API_URL}/auth/google/callback?access_token=${access_token}`
		);
		setCookie('jwt', jwt);
	} catch (error) {
		// TODO: Log error to an error logging service
		return Response.json(
			{ error: 'Failed to authenticated user' },
			{
				status: 401,
			}
		);
	}

	redirect(Routes.HOME);
};
