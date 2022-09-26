import React from 'react';

const Index: React.FC = () => {
  console.log('%c [  ]-4', 'font-size:13px; background:pink; color:#bf2c9f;', '触发了');
  return <>子组件</>;
};

export default React.memo(Index);
