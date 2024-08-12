import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(['development', 'test', 'production'])
			.default('development'),
		DOMAIN: z.string(),
	},
	client: {
		NEXT_PUBLIC_BACKEND_URL: z.string(),
		NEXT_PUBLIC_API_URL: z.string(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		DOMAIN: process.env.DOMAIN,
		NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
});
