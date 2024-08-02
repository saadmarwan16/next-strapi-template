import { FunctionComponent } from 'react';
import GoogleAuthButton from '../components/GoogleAuthButton';

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = async () => {
	return (
		<div className='flex h-screen items-center justify-center'>
			<GoogleAuthButton />
		</div>
	);
};

export default Auth;
