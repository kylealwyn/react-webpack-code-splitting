import Loadable from '@components/loadable';

export const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */  './about')
});

export const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './home')
});

export const Projects = Loadable({
  loader: () => import(/* webpackChunkName: "projects" */ './projects')
});
