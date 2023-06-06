import Client from "./components/Client";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Package from "./components/Package";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/client',
    element: <Client />
  },
  {
    path: '/package',
    element: <Package />
  }
];

export default AppRoutes;
