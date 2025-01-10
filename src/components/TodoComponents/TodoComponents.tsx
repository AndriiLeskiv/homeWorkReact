import {useEffect, useState} from "react";
import {TodoComponent} from '../TodoComponent/TodoComponent.tsx';
import {ITodo} from "../../models/iTodos.ts";

export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data:ITodo[]) => setTodos(data.slice(0, 100)));

        return () => {
            console.log('done');
        }
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            {todos.map((todo) => (
                <TodoComponent key={todo.id} todo={todo}/>
            ))}
        </div>
    );
};