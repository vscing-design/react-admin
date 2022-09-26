import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';

// 动态页面路径懒加载
export const lazyLoad = (component: string, props: any = {}): React.ReactNode => {
  const ChildrenComp = lazy(() => import(`../../../src/${component}`));

  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        />
      }
    >
      <ChildrenComp {...props} />
    </Suspense>
  );
};
