'use server';

import { ActionMessages } from '@/lib/constants/actionMessages';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { actionClient } from '@/lib/safeAction';
import {
	AddTodoSchema,
	DeleteTodoSchema,
	TodoItemSchema,
	UpdateCompletedSchema,
} from '@/types/todos';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const addTodo = actionClient
	.schema(AddTodoSchema)
	.action(async ({ parsedInput }) => {
		await fetchWithZod(
			z.object({ data: TodoItemSchema }),
			'http://localhost:1337/api/todos',
			{
				method: 'POST',
				body: JSON.stringify({ data: parsedInput }),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		revalidatePath('/');

		return ActionMessages.ADD_TODO_SUCCESS;
	});

export const updateCompleted = actionClient
	.schema(UpdateCompletedSchema)
	.action(async ({ parsedInput }) => {
		await fetchWithZod(
			z.object({ data: TodoItemSchema }),
			`http://localhost:1337/api/todos/${parsedInput.id}`,
			{
				method: 'PUT',
				body: JSON.stringify({
					data: {
						completed: parsedInput.completed,
					},
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		revalidatePath('/');

		return ActionMessages.UPDATE_COMPLETED_SUCCESS;
	});

export const deleteTodo = actionClient
	.schema(DeleteTodoSchema)
	.action(async ({ parsedInput }) => {
		await fetchWithZod(
			z.object({ data: TodoItemSchema }),
			`http://localhost:1337/api/todos/${parsedInput}`,
			{
				method: 'DELETE',
			}
		);
		revalidatePath('/');

		return ActionMessages.DELETE_TODO_SUCCESS;
	});
