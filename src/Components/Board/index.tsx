import { DragEvent } from "react"
import { Task } from "../Task"
import { CreateTask } from "../CreateTask"
import './style.css'

type BoardProps = {
    onTaskMove: (task: string, fromColumn: string, toColumn: string) => void
    data: {
        title: string
        tasks: string[]
    }
}

export const Board = ({ data, onTaskMove }: BoardProps) => {
    const { title, tasks } = data

    const handleDrop = (e: DragEvent) => {
        const name = e.dataTransfer.getData('name');
        const column = e.dataTransfer.getData('column');
        onTaskMove(name, column, title);
    }

    return (
        <div className="kanban-column" onDrop={(e) => handleDrop(e)} onDragOver={(e) => e.preventDefault()}>
            <div className="kanban-column-header">{title}</div>
            <div className="kanban-column-content">
                {tasks.map((task) => (
                    <Task key={task} name={task} column={title} />
                ))}
            </div>
            <div className="kanban-column-footer">
                <CreateTask column={title} />
            </div>
        </div>
    )
}