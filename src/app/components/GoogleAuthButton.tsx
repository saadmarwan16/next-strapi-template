'use client';

import { Button } from '@/components/ui/button';
import { env } from '@/env';
import { FunctionComponent } from 'react';
import { FcGoogle } from 'react-icons/fc';

interface GoogleAuthButtonProps {}

const GoogleAuthButton: FunctionComponent<GoogleAuthButtonProps> = () => {
	return (
		<Button
			type='button'
			variant='ghost'
			className='w-fit shadow-md drop-shadow-md'
			onClick={() =>
				window.location.assign(`${env.NEXT_PUBLIC_API_URL}/connect/google`)
			}
		>
			<FcGoogle className='mr-4 h-7 w-7' />
			Sign in with Google
		</Button>
	);
};

export default GoogleAuthButton;
