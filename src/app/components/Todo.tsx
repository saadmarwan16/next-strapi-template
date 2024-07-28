'use client';

import { FunctionComponent } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { TTodoItem } from '@/types/todos';
import DeleteTodoButton from './DeleteTodoButton';
import { useOptimisticAction } from 'next-safe-action/hooks';
import { updateCompleted } from '../actions';

interface TodoProps {
	todo: TTodoItem;
}

const Todo: FunctionComponent<TodoProps> = ({ todo }) => {
	const {
		execute,
		optimisticState: { id, attributes },
	} = useOptimisticAction(updateCompleted, {
		currentState: todo,
		updateFn: (state, { completed }) => {
			return {
				...state,
				attributes: {
					...state.attributes,
					completed,
				},
			};
		},
	});

	return (
		<div className='flex items-center justify-between gap-4 rounded-lg bg-gray-100 px-4 py-2'>
			<div className='flex items-start gap-3'>
				<Checkbox
					id='completed'
					className='mt-2'
					checked={attributes.completed}
					onClick={() =>
						execute({ id: id, completed: !attributes.completed })
					}
				/>
				<div>
					<h3 className='truncate text-lg font-semibold'>
						{attributes.title}
					</h3>
					<p className='text-wrap'>{attributes.body}</p>
				</div>
			</div>
			<div className='basis-6 sm:basis-8 md:basis-10'>
				<DeleteTodoButton id={id} />
			</div>
		</div>
	);
};

export default Todo;
