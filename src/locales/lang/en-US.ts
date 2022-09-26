// import { genMessage } from '../helper';

const modules = import.meta.globEager('./en-US/**/*.ts');
console.log('%c [ modules ]-4', 'font-size:13px; background:pink; color:#bf2c9f;', modules);
export default {
  dateLocale: null,
  dateLocaleName: 'en',
};
