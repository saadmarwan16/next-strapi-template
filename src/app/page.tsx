import Header from './components/Header';
import AddTodoDialog from './components/AddTodoDialog';
import Todos from './components/Todos';
import { FunctionComponent, Suspense } from 'react';
import TodoSkeleton from './components/TodoSkeleton';
import SortTodos from './components/SortTodos';
import qs from 'qs';

interface HomeProps {
	searchParams: {
		sort?: string;
		filter?: string;
	};
}

const Home: FunctionComponent<HomeProps> = ({ searchParams }) => {
	let filter: boolean | undefined = undefined;
	if (searchParams.filter === 'completed') filter = true;
	if (searchParams.filter === 'uncompleted') filter = false;

	const query = qs.stringify(
		{
			sort: searchParams.sort,
			filters: {
				completed: {
					$eq: filter,
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	return (
		<main>
			<Header />
			<section className='flex flex-col gap-5 px-4 py-8 sm:gap-8 sm:px-6 sm:py-12 md:gap-10 md:px-10 md:py-16 lg:px-16'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<h2 className='text-xl'>Todos</h2>
						<AddTodoDialog />
					</div>

					<SortTodos default={searchParams.sort ?? searchParams.filter} />
				</div>

				<Suspense fallback={<TodoSkeleton />}>
					<Todos query={query} />
				</Suspense>
			</section>
		</main>
	);
};

export default Home;
