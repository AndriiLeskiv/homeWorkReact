import axios from "axios";
// Імпортує бібліотеку axios для виконання HTTP-запитів.

import { IProduct } from "../models/products/IProduct.ts";
// Імпортує інтерфейс, який описує структуру об'єкта продукту.

import { IProductsResponseModel } from "../models/IProductsResponseModel.ts";
// Імпортує інтерфейс, який описує структуру відповіді API для продуктів.

import { IUserToken } from "../models/IUserToken.ts";
// Імпортує інтерфейс, який описує структуру токена користувача.

import { retriveLocalStorage } from "./helpers.ts";
// Імпортує функцію для отримання даних із localStorage.

import { IToken } from "../models/IToken.ts";
// Імпортує інтерфейс, який описує структуру відповіді токенів (accessToken та refreshToken).

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
};
// Оголошує тип для параметрів входу користувача.

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});
// Створює екземпляр axios із базовим URL для API.

axiosInstance.interceptors.request.use((requestObject) => {
    // Додає перехоплювач для кожного запиту.
    if (requestObject.method?.toUpperCase() === "GET") {
        // Якщо метод запиту GET...
        requestObject.headers.authorization =
            'Bearer ' + retriveLocalStorage<IUserToken>('userWithTokens').accessToken;
        // Додає токен авторизації в заголовок.
    }
    return requestObject;
    // Повертає змінений об'єкт запиту.
});

export const login = async ({ username, password, expiresInMins }: LoginData): Promise<IUserToken> => {
    // Асинхронна функція для входу користувача.
    const { data: userWithTokens } = await axiosInstance.post("/login", { username, password, expiresInMins });
    // Надсилає POST-запит на вхід із вказаними параметрами.
    localStorage.setItem("userWithTokens", JSON.stringify(userWithTokens));
    // Зберігає отримані токени в localStorage.
    return userWithTokens;
    // Повертає токени користувача.
};

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    // Асинхронна функція для завантаження продуктів.
    const { data: { products } } = await axiosInstance.get<IProductsResponseModel>('/products');
    // Надсилає GET-запит для отримання списку продуктів.
    return products;
    // Повертає масив продуктів.
};

export const refresh = async () => {
    // Асинхронна функція для оновлення токенів.
    const IUserWithToken = retriveLocalStorage<IUserToken>('userWithTokens');
    // Отримує збережені токени користувача із localStorage.
    const {
        data: { accessToken, refreshToken }
    } = await axiosInstance.post<IToken>("/refresh", {
        refreshToken: IUserWithToken.refreshToken,
        expiresInMin: 1
    });
    // Надсилає POST-запит для оновлення токенів із refreshToken.
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    // Виводить нові токени в консоль.
    IUserWithToken.accessToken = accessToken;
    IUserWithToken.refreshToken = refreshToken;
    // Оновлює токени у локальній змінній.
    localStorage.setItem("userWithTokens", JSON.stringify(IUserWithToken));
    // Зберігає оновлені токени в localStorage.
};