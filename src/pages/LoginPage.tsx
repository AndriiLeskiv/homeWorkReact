import {useEffect} from "react";

export const LoginPage = () => {

    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);
    return (
        <>LoginPage</>
    );
};