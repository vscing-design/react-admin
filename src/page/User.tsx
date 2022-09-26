import { Link } from 'react-router-dom';

const User = (props: any) => {
  console.log('%c [  ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', 'User', props);
  return (
    <div>
      <h2>456</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default User;
