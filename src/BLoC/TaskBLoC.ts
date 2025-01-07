import { BoardInterface } from "@/types";
import { BehaviorSubject } from "rxjs";

const initialData: BoardInterface[] = [
    { title: "To Do", tasks: ["Task 1", "Task 2"] },
    { title: "In Progress", tasks: ["Task 3"] },
    { title: "Done", tasks: ["Task 4"] }
]

class Task {
    private boards;
    private boards$;

    constructor() {
        if (!localStorage.getItem('kanban')) {
            this.boards = new BehaviorSubject<BoardInterface[]>(initialData)
        } else {
            this.boards = new BehaviorSubject<BoardInterface[]>(JSON.parse(localStorage.getItem('kanban')!))
        }
        this.boards$ = this.boards.asObservable()
        this.boards$.subscribe((data) => localStorage.setItem('kanban', JSON.stringify(data)))
    }

    onTaskMove(task: string, fromColumn: string, toColumn: string) {
        if (fromColumn === toColumn) return

        this.boards.next(this.boards.getValue().map(column => {
            if (column.title === fromColumn) {
                return { ...column, tasks: column.tasks.filter(t => t !== task) }
            } else if (column.title === toColumn) {
                return { ...column, tasks: [...column.tasks, task] }
            } else {
                return column
            }
        }))
    }

    createBoard(board: string) {
        this.boards.next([...this.boards.getValue(), { title: board, tasks: [] }])
    }

    addTask(task: string, board: string) {
        this.boards.next(this.boards.getValue().map(column => {
            if (column.title === board) {
                return { ...column, tasks: [...column.tasks, task] }
            } else {
                return column
            }
        }))
    }

    removeTask(task: string, board: string) {
        this.boards.next(this.boards.getValue().map(column => {
            if (column.title === board) {
                return { ...column, tasks: column.tasks.filter(t => t !== task) }
            } else {
                return column
            }
        }))
    }

    getInstance() {
        return this.boards$
    }
}

const taskBLoC = Object.freeze(new Task())
export default taskBLoC


