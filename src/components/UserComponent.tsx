import {FC, memo} from "react";

// FC - функціональний компонент, memo - для мемоізації
export const UserComponent: FC<{ foo: () => void, arr: number[] }> = memo(({arr}) => {
    console.log('user'); // Виводимо 'user' в консоль
    console.log(arr); // Виводимо масив arr в консоль
    return (
        <div>user</div> // Повертаємо JSX – div з текстом 'user'
    );
});