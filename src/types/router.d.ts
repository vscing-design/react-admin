import type { RouteObject } from 'react-router-dom';
import type { LazyExoticComponent } from 'react';

type RouteMeta = {
  title: string;
  icon?: string;
  sort?: number;
  hideMenu?: boolean;
};

// TODO 中间件
type MiddlewareType<T = React.PropsWithChildren> = React.FC<T>;

export type MergeRouteObject<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

export type RouteObjectType = MergeRouteObject<
  RouteObject,
  {
    component?: LazyExoticComponent<(props: any) => JSX.Element>;
    meta?: RouteMeta;
    redirect?: string;
    children?: RouteObjectType[];
    middleware?: MiddlewareType[];
  }
>;
