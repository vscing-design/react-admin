// import { useState } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate, useRoutes } from 'react-router-dom';
import './App.css';
import Dashboard from '@/page/Dashboard';
import DashboardMessages from '@/page/DashboardMessages';
import DashboardTasks from '@/page/DashboardTasks';
import Home from '@/page/Home';
import Users from '@/page/User';
import { lazyLoad } from '@/router/utils';
import ErrorBoundary from '@/hooks/errorBoundary';

export type MergeRouteObject<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

export type RouteObjectWithMiddleware = MergeRouteObject<
  RouteObject,
  {
    meta?: any;
    children?: RouteObjectWithMiddleware[];
  }
>;

function App() {
  // const [count, setCount] = useState(0);

  const element = useRoutes([
    {
      path: '/',
      element: lazyLoad('page/Dashboard'),
      children: [
        {
          path: 'message',
          element: lazyLoad('page/Dashboard'),
          children: [
            {
              path: '',
              element: <Navigate to="home" />,
            },
            {
              path: 'home',
              // index: true,
              element: lazyLoad('page/Home'),
            },
            {
              path: 'users',
              element: (
                <ErrorBoundary errorMessage="路由元素加载异常" children={lazyLoad('page/User')} />
              ),
            },
          ],
        },
        { path: 'message2/*', element: <DashboardMessages /> },
        { path: 'tasks', element: <DashboardTasks /> },
      ],
    },
    {
      path: 'home',
      element: <Home />,
    },
    {
      element: <Dashboard />,
      children: [{ path: 'users', element: <Users /> }],
    },
  ]);

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
        <Route path="/" element={<Dashboard />}>
          <Route
            path="messages"
            element={<DashboardMessages />}
          />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>
      </Routes> */}
      {element}
    </div>
  );
}

export default App;
