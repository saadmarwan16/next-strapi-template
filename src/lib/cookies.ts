'server-only';

import { env } from '@/env';
import { cookies } from 'next/headers';
import { Routes } from './routes';
import { redirect } from 'next/navigation';

export const getCookie = (key: string) => {
	const res = cookies().get(key);
	if (!res) redirect(Routes.AUTH);

	return res.value;
};

export const setCookie = (key: string, value: string) => {
	cookies().set(key, value, {
		maxAge: 60 * 60 * 24 * 7, // 1 week
		path: '/',
		domain: env.DOMAIN ?? 'localhost',
		httpOnly: true,
		secure: env.NODE_ENV === 'production',
	});
};
