import { FunctionComponent } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const TodoSkeleton: FunctionComponent = async () => {
	return (
		<div className='flex flex-col gap-4'>
			{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => (
				<Skeleton key={idx} className='h-[72px] w-full md:h-16' />
			))}
		</div>
	);
};

export default TodoSkeleton;
