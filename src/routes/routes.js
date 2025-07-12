// src/routes/routes.js
import UserLists from '../features/dashboard admin/pages/users/UserLists';
import Products from '../features/dashboard admin/pages/products/ProducstAdmin';
import Analystics from '../features/dashboard admin/pages/Analystics/Analystics';
import Sales from '../features/dashboard admin/pages/Sales/Sales';
import Category from '../features/dashboard admin/pages/category/Category';
import Settings from '../features/dashboard admin/pages/settings/Settings';
import NewCategory from '../features/dashboard admin/pages/newcategory/NewCategory';
import NewProduct from '../features/dashboard admin/pages/newproduct/NewProduct';
import Messages from '../features/dashboard admin/pages/messages/Message';

const routes = [
  { path: '/userlists', element: <UserLists /> },
  { path: '/products', element: <Products /> },
  { path: '/analytics', element: <Analystics /> },
  { path: '/sales', element: <Sales /> },
  { path: '/category', element: <Category /> },
  { path: '/settings', element: <Settings /> },
  { path: '/category/create', element: <NewCategory /> },
  { path: '/messages', element: <Messages /> },
  { path: '/product/create', element: <NewProduct /> }
];

export default routes;
