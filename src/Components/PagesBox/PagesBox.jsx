import './PagesBox.scss'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomePage } from '../HomePage/HomePage'
import { SiteBarPage } from '../SiteBarPage/SiteBarPage'
import { HeaderPage } from '../HeaderPage/HeaderPage'
import { UserProfile } from '../../Pages/UserProfile/UserProfile'
import { PhotosPage } from '../../Pages/PhotosPage/PhotosPage'

import { Context as ContextThemes } from '../../Context/Themes';

function PagesBox () {

    const {theme} = React.useContext(ContextThemes)

    return (
        <>
            <div className={`${theme === 'light'? 'pages_box' : 'pages_boxw'}`}>
                <HeaderPage/>
                <Routes>
                    <Route path='/*' element={
                        <div className='pages_box_site_bar_home_box'>
                            <SiteBarPage/>
                            <HomePage/>
                        </div>
                    }/>
                    <Route path='photo/:id' element={<PhotosPage/>}/>
                    <Route path='profile/:id' element={
                        <div className='pages_box_site_bar_home_box'>
                            <SiteBarPage/>
                            <UserProfile/>
                        </div>
                    }/>
                </Routes>
                
            </div>
        </>
    )
}
export { PagesBox }