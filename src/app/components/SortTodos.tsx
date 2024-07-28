'use client';

import { FunctionComponent } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface SortTodosProps {}

const SortTodos: FunctionComponent<SortTodosProps> = () => {
	return (
		<div className='flex items-center gap-3'>
			<h3 className='text-lg'>Sort</h3>
			<Select onValueChange={(val) => console.log('Select changed:', val)}>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder='Select a fruit' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value='apple'>Apple</SelectItem>
						<SelectItem value='banana'>Banana</SelectItem>
						<SelectItem value='blueberry'>Blueberry</SelectItem>
						<SelectItem value='grapes'>Grapes</SelectItem>
						<SelectItem value='pineapple'>Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default SortTodos;
