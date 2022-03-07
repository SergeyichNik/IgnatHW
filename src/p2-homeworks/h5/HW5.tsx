import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Header'
import RoutesItems from './RoutesItems'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <RoutesItems/>

            </HashRouter>
        </div>
    )
}

export default HW5
