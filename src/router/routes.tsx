import type { RouteObjectType } from '../types/router';
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// 导入其它router
export const metaRouters = import.meta?.glob('@/router/modules/**/*.ts', { eager: true });
export const routerArray: RouteObjectType[] = [];
Object.keys(metaRouters).forEach((key) => {
  const mod = metaRouters[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routerArray.push(...modList);
});

// 根路由
export const rootRouter: RouteObjectType[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    component: lazy(() => import('@/page/user/login')),
    meta: {
      title: '登录页',
    },
  },
  ...routerArray,
  {
    path: '*',
    component: lazy(() => import('@/page/exception/404')),
  },
];
