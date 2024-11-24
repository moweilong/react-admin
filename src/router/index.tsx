import { createBrowserRouter } from 'react-router-dom';

import routes from './routes';

const router = createBrowserRouter(routes, {
  basename: '/react-admin',
});

export default router;
