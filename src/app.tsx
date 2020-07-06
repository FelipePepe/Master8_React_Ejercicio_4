import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { LoginScene } from 'scenes';

const App: React.FunctionComponent = () => {
  return <LoginScene />;
};

export default hot(App);
