import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import PreJunior from './pages/PreJunior'
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function RoutesItems() {
    return (
        <div>
            //Switch выбирает первый подходящий роут
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} element={() => <Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={() => <PreJunior/>}/>
                    // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={() => <Error404/>}/>

            </Routes>
        </div>
    )
}

export default RoutesItems
