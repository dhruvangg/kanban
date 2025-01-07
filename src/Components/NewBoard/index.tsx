import { FormEvent, useState } from "react"
import { createPortal } from "react-dom"
import taskBLoC from "@/BLoC/TaskBLoC"
import { Button, Input } from "../UI"
import "./style.css"

export const AddNewBoard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [boardName, setBoardName] = useState('')
    const handleCreateBoard = (e: FormEvent) => {
        e.preventDefault()
        taskBLoC.createBoard(boardName)
        setIsOpen(false)
        setBoardName('')
    }
    return <>
        <div className="button-wrapper">
            <Button type="button" variant="primary" onClick={() => setIsOpen(true)}>Add New Board</Button>
        </div>
        {isOpen && createPortal(
            <div className="new-board-modal">
                <form className="new-board-modal-content" onSubmit={handleCreateBoard}>
                    <div className="new-board-modal-header">New Board</div>
                    <div className="new-board-modal-body">
                        <Input type="text" placeholder="Board Name" value={boardName} onChange={(e) => setBoardName(e.target.value)} />
                    </div>
                    <div className="new-board-modal-footer">
                        <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button type="submit" variant="primary">Create</Button>
                    </div>
                </form>
            </div>,
            document.body
        )}
    </>
}