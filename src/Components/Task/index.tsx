import { DragEvent } from "react";
import taskBLoC from "@/BLoC/TaskBLoC";
import './style.css'

type TaskProps = {
    name: string
    column: string
}

export const Task = ({ name, column }: TaskProps) => {
    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('name', name.toString())
        e.dataTransfer.setData('column', column.toString())
    }

    return <div className="kanban-card" draggable onDragStart={e => handleDragStart(e)}>
        {name}
        <span role="button" className="kanban-card-close" title="Remove" onClick={() => taskBLoC.removeTask(name, column)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" strokeWidth="5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
        </span>
    </div>
}