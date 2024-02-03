import { Routes as ReactRoutes, Route, BrowserRouter } from "react-router-dom";
import Dashboards from "../pages/dashboards/index";
import Users from "../pages/users/index";

const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Dashboards />} />
      <Route path="/users" element={<Users />} />
    </ReactRoutes>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Routes;
