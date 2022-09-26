import type { RouteObject } from 'react-router-dom';
import { RouteObjectType } from '@/types/router';

const useInitRouter = (routes: RouteObjectType[]): RouteObject[] => {
  return routes || [];
};

export default useInitRouter;
