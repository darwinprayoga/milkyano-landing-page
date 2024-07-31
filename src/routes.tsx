import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const webRoutes = [{ path: "landing-page", component: LandingPage }];

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* WEB ROUTE */}
        {webRoutes.map(({ path, component: Component }) => (
          <React.Fragment key={path}>
            <Route path={`/${path}`} element={<Component />} />
          </React.Fragment>
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
