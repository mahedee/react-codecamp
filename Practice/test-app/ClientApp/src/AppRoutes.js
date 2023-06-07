import Client from "./components/Client/Client";
import ClientCreate from "./components/Client/ClientCreate";
import ClientDelete from "./components/Client/ClientDelete";
import ClientEdit from "./components/Client/ClientEdit";
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
  },
  {
    path: '/client-create',
    element: <ClientCreate/>
  },
  {
    path: '/client-edit/:id',
    element: <ClientEdit />
  }
  ,
  {
    path: '/client-delete/:id',
    element: <ClientDelete />
  }
];

export default AppRoutes;
