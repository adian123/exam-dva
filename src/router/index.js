import React from 'react';
import RouterView from "./router-view"
import RouterRoutes from './router-routes'
import { BrowserRouter as Router} from 'dva/router';

function RouterConfig() {
  return (
    <Router>
      <RouterView Routes={RouterRoutes}/>
    </Router>
  );
}

export default RouterConfig;
