import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  console.log('%c [ location ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', location);

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/message/users');
  });

  return (
    <div>
      <h1>重定向组件</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
