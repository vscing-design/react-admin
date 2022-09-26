import { lazy } from 'react';

// 基础布局
export const BASELAYOUT = lazy(() => import('@/layouts/base'));

// 用户权限布局
export const USERLAYOUT = lazy(() => import('@/layouts/user'));

// 异常页面
export const EXCEPTION_COMPONENT = lazy(() => import('@/page/exception'));
