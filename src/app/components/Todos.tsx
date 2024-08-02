import { FunctionComponent } from 'react';
import { TodoSchema } from '@/types/todos';
import { fetchWithZod } from '@/lib/fetchWithZod';
import Todo from './Todo';
import { env } from '@/env';

interface TodosProps {
	query: string;
}

const Todos: FunctionComponent<TodosProps> = async ({ query }) => {
	const result = await fetchWithZod(
		TodoSchema,
		`${env.NEXT_PUBLIC_API_URL}/todos?${query}`
		// `http://localhost:1337/api/todos?${query}`
	);

	return (
		<div className='flex flex-col gap-4'>
			{result.data.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default Todos;
