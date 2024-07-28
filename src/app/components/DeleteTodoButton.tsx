'use client';

import { useAction } from 'next-safe-action/hooks';
import { FunctionComponent } from 'react';
import { MdDelete } from 'react-icons/md';
import { deleteTodo } from '../actions';

interface DeleteTodoButtonProps {
	id: number;
}

const DeleteTodoButton: FunctionComponent<DeleteTodoButtonProps> = ({ id }) => {
	const { execute, isExecuting } = useAction(deleteTodo);

	return (
		<MdDelete
			className={`grow cursor-pointer text-2xl sm:text-3xl md:text-4xl ${
				isExecuting ? 'text-gray-400' : 'text-destructive'
			}`}
			onClick={() => execute(id)}
		/>
	);
};

export default DeleteTodoButton;
