import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const AddTodoSchema = zfd.formData({
	title: zfd.text(
		z
			.string({
				required_error: 'Title is required',
			})
			.min(4, 'Title must be at least 4 characters long')
			.max(40, 'Title must be at most 40 characters long')
	),
	body: zfd.text(
		z
			.string({
				required_error: 'Body is required',
			})
			.min(16, 'Title must be at least 16 characters long')
			.max(160, 'Title must be at most 160 characters long')
	),
	completed: zfd.checkbox(),
});

export const UpdateCompletedSchema = z.object({
	id: z.number(),
	completed: z.boolean(),
});

export const UpdateTodoSchema = zfd.formData({
	id: zfd.numeric(z.number().min(1, 'Id must be positive')),
	title: zfd.text(
		z
			.string({
				required_error: 'Title is required',
			})
			.min(4, 'Title must be at least 4 characters long')
			.max(40, 'Title must be at most 40 characters long')
	),
	body: zfd.text(
		z
			.string({
				required_error: 'Body is required',
			})
			.min(16, 'Title must be at least 16 characters long')
			.max(160, 'Title must be at most 160 characters long')
	),
	completed: zfd.checkbox(),
});

export const DeleteTodoSchema = z.number();

export const TodoItemSchema = z.object({
	id: z.number(),
	attributes: z.object({
		title: z.string(),
		body: z.string(),
		completed: z.boolean(),
		createdAt: z.string(),
		updatedAt: z.string(),
		publishedAt: z.string(),
	}),
});

export const TodoListSchema = z.array(TodoItemSchema);

export const TodoSchema = z.object({
	data: TodoListSchema,
	meta: z.object({
		pagination: z.object({
			page: z.number(),
			pageSize: z.number(),
			pageCount: z.number(),
			total: z.number(),
		}),
	}),
});

export type TTodoItem = z.infer<typeof TodoItemSchema>;

export type TTodoList = z.infer<typeof TodoListSchema>;

export type TTodo = z.infer<typeof TodoSchema>;
