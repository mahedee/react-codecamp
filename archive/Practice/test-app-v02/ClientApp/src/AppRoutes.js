import Client from "./components/Client/Client";
import ClientCreate from "./components/Client/ClientCreate";
import ClientDelete from "./components/Client/ClientDelete";
import ClientEdit from "./components/Client/ClientEdit";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Package from "./components/Package/Package";
import PackageCreate from "./components/Package/PackageCreate";
import PackageDelete from "./components/Package/PackageDelete";
import PackageEdit from "./components/Package/PackageEdit";

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
  },
  {
    path: '/package',
    element: <Package/>
  },
  {
    path: '/package-create',
    element: <PackageCreate/>
  },
  {
    path: '/package-edit/:id',
    element: <PackageEdit/>
  },
  {
    path: '/package-delete/:id',
    element: <PackageDelete/>
  },
];

export default AppRoutes;
