import { FunctionComponent } from 'react';
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

interface UpdateTodoDialogProps {}

const UpdateTodoDialog: FunctionComponent<UpdateTodoDialogProps> = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Add Todo</Button>
			</DialogTrigger>
			<DialogContent className='w-4/5 items-start rounded-lg sm:max-w-[600px]'>
				<DialogHeader>
					<DialogTitle>Add Todo</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							Name
						</Label>
						<Input
							id='name'
							defaultValue='Pedro Duarte'
							className='col-span-3'
						/>
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='username' className='text-right'>
							Username
						</Label>
						<Input
							id='username'
							defaultValue='@peduarte'
							className='col-span-3'
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type='submit'>Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default UpdateTodoDialog;
