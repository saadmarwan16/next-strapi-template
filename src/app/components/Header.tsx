import { FunctionComponent } from 'react';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@radix-ui/react-avatar';

const Header: FunctionComponent = () => {
	return (
		<header className='flex h-12 items-center shadow-md'>
			<div className='flex grow items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16'>
				<h1 className='text-2xl'>Todoey</h1>
				<div className='flex items-center gap-2'>
					<Avatar className='h-10 w-10'>
						<AvatarImage
							src='https://github.com/shadcn.png'
							alt='@shadcn'
							className='h-10 w-10 rounded-full'
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div className='hidden max-w-[500px] flex-col gap-0 sm:flex'>
						<span className='truncate text-sm'>Shad Mirza</span>
						<span className='truncate text-xs text-gray-500'>@shadcn</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
