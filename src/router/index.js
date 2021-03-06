import { lazy, Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderIncubateur from "../components/HeaderIncubateur";
import NotFound from "../components/NotFound";

import routes from "./config";
import GlobalStyles from "../globalStyles";

const Router = withRouter(({ location }) => {
  return (
    <Suspense fallback={null}>
      <GlobalStyles />
      {
        location.pathname == "/" && <Header />
      }
      {
        location.pathname !== "/" && <HeaderIncubateur/>
      }
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
            );
          })}
          <Route component={NotFound} />
      </Switch>
      <Footer />
    </Suspense>
  );
});

export default Router;
