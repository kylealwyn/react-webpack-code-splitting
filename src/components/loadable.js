import Loadable from 'react-loadable';

import Loader from './loader';

export default (opts) => Loadable({
  LoadingComponent: Loader,
  delay: 300,
  ...opts,
});
