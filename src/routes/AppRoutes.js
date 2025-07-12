// src/routes/AppRoutes.js
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const AppRoutes = () => {
  const routing = useRoutes(routes);
  return routing;
};

export default AppRoutes;
