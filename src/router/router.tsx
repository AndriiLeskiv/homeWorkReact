import {createBrowserRouter} from "react-router-dom";
import {FormPage} from "../pages/FormPage.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CarDetailPage} from "../pages/CarDetailPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",  element: <MainLayout/>,
        children: [
            {path: "cars", element: <CarsPage/>},
            {path: "cars/details", element: <CarDetailPage/>},
            {path: "forms", element: <FormPage/>}
        ]
    }
])