import { env } from '@/env';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { Routes } from '@/lib/routes';
import { AuthenticatedUserSchema } from '@/types/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FunctionComponent } from 'react';

interface GoogleAuthCallbackProps {
	searchParams: {
		access_token?: string;
	};
}

const GoogleAuthCallback: FunctionComponent<GoogleAuthCallbackProps> = async ({
	searchParams: { access_token },
}) => {
	if (!access_token) throw new Error('No access token found');

	const { jwt } = await fetchWithZod(
		AuthenticatedUserSchema,
		`${env.NEXT_PUBLIC_API_URL}/auth/google/callback?access_token=${access_token}`
	);
	// cookies().set('jwt', jwt, {
	// 	secure: true,
	// });
	redirect(Routes.HOME);

	return null;
};

export default GoogleAuthCallback;
