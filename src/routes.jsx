import { Fragment, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Layout from "./layout";
import Attendance from "./pages/attendance";

export const renderRoutes = (routes) => {
    return (
        <Suspense>
            <Routes>
                {routes.map((route, index) => {
                    const Layout = route.layout || Fragment; // Use Fragment if no layout is provided
                    const Component = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Suspense>
    )
}

const routes = [
    { path: "/", component: () => <Navigate to="/dashboard" />, exact: true },
    { path: "/dashboard", component: Dashboard, layout: Layout },
    { path: "/attendance", component: Attendance, layout: Layout },
];

export default routes;