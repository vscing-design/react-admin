import { Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  console.log('%c [ location ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', location);

  return (
    <div>
      <h1>layout</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
