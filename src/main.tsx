import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./layouts/Layout.tsx";
import {PostsPage} from "./pages/PostsPage.tsx";
import {UsersPage} from "./pages/UsersPage.tsx";
import {HomePage} from "./pages/HomePage.tsx";

const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]}
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes} />)