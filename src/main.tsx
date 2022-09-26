import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './index.less';

const metaRouters: any = import.meta.glob('@/router/modules/**/*.ts', { eager: true });

const routerArray: any = [];
Object.keys(metaRouters).forEach((key) => {
  const mod = metaRouters[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routerArray.push(...modList);
});
// Object.keys(metaRouters).forEach(item => {
//   Object.keys(metaRouters[item]).forEach((key: any) => {
//     routerArray.push(...metaRouters[item][key]);
// 	});
// });
console.log(
  '%c [ routerArray ]-11',
  'font-size:13px; background:pink; color:#bf2c9f;',
  routerArray
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
