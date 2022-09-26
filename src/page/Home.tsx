import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Index from '@/components/index';

const Home = () => {
  const [num, setNum] = useState(0);

  console.log('%c [  ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', 'Home');

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('%c [ e ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', e);
    const a = num + 1;
    setNum(a);
  };

  return (
    <div>
      <h2>123</h2>
      <button onClick={handleClick}>触发{num}</button>
      <Index />
      <Link to="/users/1">用户1</Link>
      <Link to="/users/2">用户2</Link>
    </div>
  );
};

export default Home;
