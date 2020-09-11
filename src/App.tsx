import * as React from 'react';
import { hot } from 'react-hot-loader';
import { RelayEnvironmentProvider } from 'relay-hooks';

import { Environment } from './relay';
import Continent from './Continent';
import ContinentRoot from './ContinentRoot';

const App = () => {
  return (
    <RelayEnvironmentProvider environment={Environment} >
      <Continent />
      {/* <ContinentRoot /> */}
    </RelayEnvironmentProvider>
  )
}

export default hot(module)(App)