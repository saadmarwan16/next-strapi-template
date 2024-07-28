import { FunctionComponent } from 'react';
import { TodoSchema } from '@/types/todos';
import { fetchWithZod } from '@/lib/fetchWithZod';
import Todo from './Todo';

interface TodosProps {}

const Todos: FunctionComponent<TodosProps> = async () => {
	const result = await fetchWithZod(
		TodoSchema,
		'http://localhost:1337/api/todos'
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
