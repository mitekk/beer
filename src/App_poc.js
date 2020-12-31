import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./App.routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route
            key={`route-key-${path}`}
            path={path}
            exact={exact}
            component={component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
