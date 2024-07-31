'use client';

import { FunctionComponent } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

interface SortTodosProps {
	default?: string;
}

const SortTodos: FunctionComponent<SortTodosProps> = (props) => {
	const router = useRouter();

	return (
		<div className='flex items-center gap-3'>
			<h3 className='text-lg'>Sort & Filter</h3>
			<Select
				defaultValue={props.default}
				onValueChange={(val) => {
					if (val === 'title:asc' || val === 'title:desc') {
						router.push(`/?sort=${val}`);
					} else if (val === 'completed' || val === 'uncompleted') {
						router.push(`/?filter=${val}`);
					}
				}}
			>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder='Select sort parameter' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='title:asc'>Title (asc)</SelectItem>
						<SelectItem value='title:desc'>Title (desc)</SelectItem>
						<SelectItem value='completed'>Completed</SelectItem>
						<SelectItem value='uncompleted'>Uncompleted</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default SortTodos;
