import Header from './components/Header';
import AddTodoDialog from './components/AddTodoDialog';
import Todos from './components/Todos';
import { Suspense } from 'react';
import TodoSkeleton from './components/TodoSkeleton';

const Home = () => {
	return (
		<main>
			<Header />
			<section className='flex flex-col gap-5 px-4 py-8 sm:gap-8 sm:px-6 sm:py-12 md:gap-10 md:px-10 md:py-16 lg:px-16'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl'>Todos</h2>
					<AddTodoDialog />
				</div>

				<Suspense fallback={<TodoSkeleton />}>
					<Todos />
				</Suspense>
			</section>
		</main>
	);
};

export default Home;
