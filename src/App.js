import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';
import routes from '@/router'
import store from './store';

import WanFooter from '@/components/app-footer'
import WanHeader from '@/components/app-header'
import WanPlayerBar from './pages/player/app-player-bar';

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <WanHeader />
        {renderRoutes(routes)}
        <WanFooter />
        <WanPlayerBar />
      </HashRouter>
    </Provider>
  )
})

export default App