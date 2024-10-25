import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Accueil from './component/accueil/accuil'
import Prof from './component/prof/prof'
import About from './component/about/about'
import Connixion from './component/connexion/connexion'
import Room from './component/room/room'
import Detail from './component/detail.prof/detail-prof'
import Header from './component/sections/hedear'
import Fouter from './component/sections/fouter/foeter';










export default function MyRoutes() {
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/room" && <Header />}
            < Routes >
                <Route path='/' element={<Accueil />} />
                <Route path='/prof' element={<Prof />} />
                <Route path='/about' element={<About />} />
                <Route path='/Connixion' element={<Connixion />} />
                <Route path='/room' element={<Room />} />
                <Route path='/prof/detail/:id_P/:Nimg' element={<Detail />} />
            </Routes >
            {location.pathname !== "/room" && <Fouter />}
        </>
    )
}
