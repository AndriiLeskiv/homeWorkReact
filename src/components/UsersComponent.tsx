import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
    console.log('users');

    // useState для зберігання стану користувачів
    const [users, setUsers] = useState([]);

    // useMemo для мемоізації масиву чисел
    const arr: number[] = useMemo(() => {
        return [4, 5, 7]; // Повертаємо масив чисел [4, 5, 7]
    }, []);

    // useCallback для мемоізації функції foo
    const foo = useCallback(() => {
        console.log('Foo'); // Просто виводимо 'Foo' в консоль
    }, []);

    // useEffect для виконання побічного ефекту – отримання даних з API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // Виконуємо запит до API
            .then(value => value.json()) // Перетворюємо відповідь в JSON
            .then(value => {
                setUsers(value); // Оновлюємо стан користувачів з отриманими даними
            });

        // Повертаємо функцію, яка буде викликана при зміні компонента або його видаленні
        return () => {
            console.log('unsubscribe'); // Виводимо 'unsubscribe' в консоль
        };
    }, []); // Пустий масив залежностей означає, що ефект виконується лише після монтування компонента

    // Повертаємо JSX, компонент UsersComponent
    return (
        <div>
            UsersComponent
            <UserComponent foo={foo} arr={arr}/> {/* Передаємо foo і arr в компонент UserComponent */}
        </div>
    );
};