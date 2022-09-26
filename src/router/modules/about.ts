import type { RouteObjectType } from '@/types/router';
import { lazy } from 'react';

import { BASELAYOUT } from '@/router/constant';

const dashboard: RouteObjectType = {
  path: 'about',
  component: BASELAYOUT,
  redirect: 'about/list',
  meta: {
    icon: '',
    title: '123',
    sort: 100000,
  },
  children: [
    {
      path: 'list',
      component: lazy(() => import('@/page/about')),
      meta: {
        title: '456',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
