import { Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import User from "../pages/User";
import { ROUTE_PATHS } from "./routePaths";

const appRoutes = (
    <Route path={ROUTE_PATHS.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
        <Route path={ROUTE_PATHS.USER} element={<User />} />
    </Route>
);

export default appRoutes;