import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Error404 from '@/components/Error/404';
import Error500 from '@/components/Error/500';
import LazyLoadComponent from '@/components/LazyLoadComponent';

import { getRoutes } from './utils';

import type { IRouteObject } from '@/types/custom-types';

import Layout from '@/layouts/index';

const routeArray = getRoutes();

const routes: IRouteObject[] = [
  {
    path: '/login',
    element: (
      <LazyLoadComponent Component={lazy(() => import('@/pages/login'))} />
    ),
    meta: {
      menu: false,
    },
  },
  {
    path: '/',
    element: <Layout />,
    meta: {
      menu: false,
    },
    HydrateFallback: Error500,
    children: [
      {
        index: true,
        element: <Navigate to="/overview/workspace" replace />,
        meta: {
          menu: false,
        },
      },
      ...routeArray,
      {
        path: '*',
        element: <Error404 />,
        meta: {
          menu: false,
        },
      },
    ],
  },
];

export default routes;
