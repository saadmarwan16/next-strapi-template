'use client';

import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { updateTodo } from '../actions';
import { useAction } from 'next-safe-action/hooks';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ActionMessages } from '@/lib/constants/actionMessages';
import { TTodoItem } from '@/types/todos';

interface UpdateTodoDialogProps {
	todo: TTodoItem;
}

const UpdateTodoDialog: FunctionComponent<UpdateTodoDialogProps> = ({
	todo,
}) => {
	const ref = useRef<HTMLFormElement>(null);
	const [open, setOpen] = useState(false);
	const { execute, isExecuting, result } = useAction(updateTodo);

	useEffect(() => {
		const { data, fetchError, serverError } = result;
		if (fetchError || serverError) toast.error(fetchError || serverError);
		else if (data === ActionMessages.UPDATE_TODO_SUCCESS) {
			setOpen(false);
			toast.success(data);
		}
	}, [result]);

	return (
		<Dialog open={open} onOpenChange={(val) => setOpen(val)}>
			<DialogTrigger asChild>
				<h3
					className='cursor-pointer truncate text-lg font-semibold hover:text-blue-700'
					onClick={() => setOpen(true)}
				>
					{todo.attributes.title}
				</h3>
			</DialogTrigger>
			<DialogContent className='w-4/5 items-start rounded-lg sm:max-w-[600px]'>
				<form ref={ref} action={execute}>
					<DialogHeader>
						<DialogTitle className='text-left'>Todo Details</DialogTitle>
					</DialogHeader>

					<input id='id' name='id' type='hidden' defaultValue={todo.id} />

					<div className='mb-6 mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-6 md:gap-8'>
						<div className='grid w-full items-center gap-2'>
							<Label htmlFor='title'>Title</Label>
							<Input
								id='title'
								name='title'
								defaultValue={todo.attributes.title}
								placeholder='Enter todo title here...'
							/>
							{result.validationErrors?.title?._errors?.map((error, idx) => (
								<Label
									key={idx}
									htmlFor='title'
									className='text-sm text-destructive'
								>
									{error}
								</Label>
							))}
						</div>
						<div className='grid w-full items-center gap-2'>
							<Label htmlFor='body'>Body</Label>
							<Textarea
								id='body'
								name='body'
								defaultValue={todo.attributes.body}
								placeholder='Enter todo body here...'
							/>
							{result.validationErrors?.body?._errors?.map((error, idx) => (
								<Label
									key={idx}
									htmlFor='title'
									className='text-sm text-destructive'
								>
									{error}
								</Label>
							))}
						</div>
						<div className='flex items-center space-x-2'>
							<Checkbox
								id='completed'
								name='completed'
								defaultChecked={todo.attributes.completed}
							/>
							<label
								htmlFor='completed'
								className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
							>
								Mark as completed
							</label>
						</div>
					</div>

					<DialogFooter>
						<Button type='submit' disabled={isExecuting}>
							Update Todo
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default UpdateTodoDialog;
