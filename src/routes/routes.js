// src/routes/routes.js
import UserLists from '../features/dashboard admin/pages/users/UserLists';
import ReportsPage from '../features/dashboard admin/pages/reportsPage/ReportsPage';
import Category from '../features/dashboard admin/pages/category/Category';
import NewCategory from '../features/dashboard admin/pages/newcategory/NewCategory';
import NewProduct from '../features/dashboard admin/pages/newproduct/NewProduct';
import Messages from '../features/dashboard admin/pages/messages/Message';
import Settings from '../features/dashboard admin/pages/adminsettingspage/AdminSettingsPage';

const routes = [
  { path: '/userlists', element: <UserLists /> },
  { path: '/reportspage', element: <ReportsPage /> },
  { path: '/category', element: <Category /> },
  { path: '/settings', element: <Settings /> },
  { path: '/category/create', element: <NewCategory /> },
  { path: '/messages', element: <Messages /> },
  { path: '/product/create', element: <NewProduct /> }
];

export default routes;
