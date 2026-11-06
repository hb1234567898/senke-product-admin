
// import { createBrowserRouter } from "react-router";
//
// import App from "../App";
// import Home from "../pages/Home";
// import Products from "../pages/Products";
// import ProductsDetails from "../pages/ProductsDetails";
//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//             },
//             {
//                 path: "products",
//                 element: <Products />,
//             },
//             {
//                 path: "products/:id",
//                 element: <ProductsDetails />,
//             },
//         ],
//     },
// ]);
//
// export default router;

import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import Products from "../pages/Products.tsx";
import Home from "../pages/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "products",
                element: <Products/>,
            },
        ]
    }
])

export default router;
