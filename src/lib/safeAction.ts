import { createSafeActionClient } from 'next-safe-action';
import { env } from '@/env';

export const actionClient = createSafeActionClient({
	handleServerErrorLog(originalError) {
		if (env.NODE_ENV === 'development') {
			// TODO: Log the error to an error logging service
		} else if (env.NODE_ENV === 'test') {
			// Send the error to the test error logging service
		} else {
			// Send the error to the production error logging service
		}
	},
});
