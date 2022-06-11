import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';
import routes from '@/router'
import store from './store';

import WanFooter from '@/components/app-footer'
import WanHeader from '@/components/app-header'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <WanHeader />
        {renderRoutes(routes)}
        <WanFooter />
      </HashRouter>
    </Provider>

  )
})

export default App