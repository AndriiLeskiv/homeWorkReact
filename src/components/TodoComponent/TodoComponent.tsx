import {ITodo} from "../../models/iTodos.ts";
import {FC} from "react";

type TodoComponentType = {
    todo:ITodo
}

export const TodoComponent:FC<TodoComponentType> = ({todo}) => {
    return (
        <div style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
            <p><strong>ID</strong> - {todo.id}</p>
            <h3><strong>Title:</strong> {todo.todo}</h3>
            <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
        </div>
    );
};