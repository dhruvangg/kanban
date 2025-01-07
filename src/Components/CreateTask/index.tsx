import { FormEvent, useState } from 'react'
import './style.css'
import taskBLoC from '@/BLoC/TaskBLoC'
import { Button, Input } from '../UI'

interface TaskProps {
    column: string
}

export const CreateTask = ({ column }: TaskProps) => {
    const [task, setTask] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        taskBLoC.addTask(task, column)
        setTask('')
    }

    return <form onSubmit={handleSubmit} className='create-task'>
        <Input type="text" className="create-task-input" placeholder="New Task" onChange={(e) => setTask(e.target.value)} value={task} />
        <Button type="submit" variant='primary'>Add</Button>
    </form>
}