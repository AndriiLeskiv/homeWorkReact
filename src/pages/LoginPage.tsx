import { useEffect } from "react";
// Імпортує хук useEffect із React.

import { login } from "../services/api.service.ts";
// Імпортує функцію login для входу користувача.

export const LoginPage = () => {
    // Створює компонент сторінки входу.
    useEffect(() => {
        // Виконує функцію під час завантаження компонента.
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
        // Викликає функцію входу з тестовими даними.
    }, []);
    // Виконується тільки один раз під час завантаження сторінки.

    return (
        <>LoginPage</>
        // Повертає HTML-розмітку сторінки.
    );
};