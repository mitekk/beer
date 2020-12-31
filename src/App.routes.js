import BeerList from "./pages/BeerList";
import Beer from "./pages/Beer";
import NotFound from "./pages/404";

const BEERS_LIST = "/";
const BEER = "/beer/:id";
const NOT_FOUND = "*";

const routes = [
  { path: BEERS_LIST, component: BeerList, exact: true },
  { path: BEER, component: Beer },
  { path: NOT_FOUND, component: NotFound },
];

export { routes };
