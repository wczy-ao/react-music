import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { BrowserRouter } from 'react-router-dom';
import routes from '@/router'

import WanFooter from '@/components/app-footer'
import WanHeader from '@/components/app-header'

const App = memo(() => {
    return (
        <BrowserRouter>
            <WanHeader />
            {renderRoutes(routes)}
            <WanFooter />
        </BrowserRouter>
    )
})

export default App