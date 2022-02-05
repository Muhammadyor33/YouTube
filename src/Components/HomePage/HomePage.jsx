import './HomePage.scss'
import React from 'react'

import { HomePhotoPage1 } from '../HomePhotoPage1/HomePhotoPage1'
import { HomePhotoPage2 } from '../HomePhotoPage2/HomePhotoPage2'
import { HomePhotoPage3 } from '../HomePhotoPage3/HomePhotoPage3'
import { HomeUserPage1 } from '../HomeUserPage1/HomeUserPage1'
import { HomeUserPage2 } from '../HomeUserPage2/HomeUserPage2'
import { Context as ContextThemes } from '../../Context/Themes';

function HomePage () {

    const {theme} = React.useContext(ContextThemes)

    return (
        <>
            <div>
                <div className='home_page_box'>
                    <div className='home_girl_text_box'>
                        <HomeUserPage1/>
                    </div>
                    <HomePhotoPage1/>
                    <h3 className={`${theme === 'light' ? 'home_girl_text' : 'home_girl_textwww'}`}>
                        Recommended
                    </h3>
                    <HomePhotoPage2/>
                    <div className='food_box'>
                        <HomeUserPage2/>
                        <p className='food_text'>
                            Recommended channel for you
                        </p>
                    </div>
                    <HomePhotoPage3/>
                </div>
            </div>
        </>
    )
}
export { HomePage }