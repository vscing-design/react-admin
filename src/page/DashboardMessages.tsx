import { useRoutes } from 'react-router-dom';
import Home from '@/page/Home';
import Users from '@/page/User';
import Dashboard from './Dashboard';

const DashboardMessages = () => {
  const element = useRoutes([
    {
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: 'users', element: <Users /> },
      ],
    },
  ]);
  return (
    <div>
      <h1>DashboardMessages</h1>
      {element}
    </div>
  );
};

export default DashboardMessages;
