import Home from './components/Home.vue';
import Movies from './components/user/movies.vue';
import Cars from './components/user/cars.vue';
import About from './components/user/about.vue';

export const routes = [
  {
    path: '', name: 'home', components: {
      default: Home
    }
  },
  { path: '/about', component: About},
  { path: '/cars', component: Cars},
  { path: '/movies', component: Movies},
  {path: '/redirect-me', redirect: {name: 'home'}},
  {path: '*', redirect: '/'}
];
