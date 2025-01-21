import { useEffect } from "react";
// Імпортує хук useEffect із React.

import { loadAuthProducts, refresh } from "../services/api.service.ts";
// Імпортує функції для завантаження продуктів та оновлення токенів.

export const AuthResourcesPage = () => {
    // Створює компонент сторінки з продуктами.
    useEffect(() => {
        // Виконується під час завантаження компонента.
        loadAuthProducts()
            .then(products => {
                console.log(products);
                // Якщо запит успішний, виводить продукти в консоль.
            })
            .catch(reason => {
                console.log(reason);
                // Якщо виникла помилка, виводить її в консоль.

                refresh()
                    // Викликає функцію оновлення токенів.
                    .then(() => loadAuthProducts())
                    // Після оновлення токенів повторно завантажує продукти.
                    .then(value => console.log(value));
                // Виводить продукти після повторного запиту.
            });
    }, []);
    // Виконується тільки один раз під час завантаження сторінки.

    return (
        <>AuthResourPage</>
        // Повертає HTML-розмітку сторінки.
    );
};