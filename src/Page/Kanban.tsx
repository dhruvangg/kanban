import { useEffect, useState } from 'react';
import { AddNewBoard, Board } from '@/Components';
import './kanban.css'
import taskBLoC from '@/BLoC/TaskBLoC';
import { BoardInterface } from '@/types';
import { Container } from '@/Components/UI';

export default function Kanban() {
  const [boardData, setBoardData] = useState<BoardInterface[]>([])
  const taskBLoCInstance = taskBLoC.getInstance()


  useEffect(() => {
    taskBLoCInstance.subscribe((data: BoardInterface[]) => {
      setBoardData(data)
    })
  }, [])

  const handleTaskMove = (task: string, fromColumn: string, toColumn: string) => {
    taskBLoC.onTaskMove(task, fromColumn, toColumn);
  };

  return (
      <Container>
        <AddNewBoard />
        <div className="kanban-container">
          {boardData.length > 0 && boardData.map((column) => (
            <Board key={column.title.toString()} data={column} onTaskMove={handleTaskMove} />
          ))}
        </div>
      </Container>
  )
}

