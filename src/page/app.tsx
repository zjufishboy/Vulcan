import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './app.less';
import '@/global/style/global.less';
import RootStore, { Provider } from '@/store/rootStore';
import { useStore } from '@/hooks/useStore';

/**
 * 这个组件是网页的入口
//  */
export const App: React.FC = () => {
  const { userStore } = useStore();
  return (
    <Provider value={RootStore}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div>app</div>
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
