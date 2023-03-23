import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Login from "../../pages/Login/Login";
import POS from "../../pages/POS/POS";
import ManageProducts from "../../pages/ManageProducts/ManageProducts";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Register from './../../pages/Register/Register';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Orders from "../../pages/Orders/Orders";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><Main/></PrivateRoute>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/pos',
                element: <POS/>
            },
            {
                path: '/manage-products',
                element: <ManageProducts/>
            },
            {
                path: '/add-product',
                element: <AddProduct/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
]);