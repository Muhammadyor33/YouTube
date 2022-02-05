import './SiteBarPage.scss'
import React from 'react'

import Home from '../../Assets/Svg/home.svg'
import { Fayl } from '../Lib/fayl'
import { Popca } from '../Lib/popca'
import { Letter } from '../Lib/letter'
import { Like } from '../Lib/like'
import { Music } from '../Lib/music'
import { Playstation } from '../Lib/playstation'
import { Star } from '../Lib/star'
import { Olov } from '../Lib/olov'
import { Clock } from '../Lib/clock'
import { SiteBarShowMore } from '../SiteBarShowMore/SiteBarShowMore'
import { Strelca } from '../Lib/show_more_strelca'
import { Settings } from '../Lib/settings'

import { Context as ContextThemes } from '../../Context/Themes';
import { Context as ContextGamburger } from '../../Context/GamburgerMenu';
import { Themes } from '../../Localization/Themes';

function SiteBarPage() {

  const {burger} = React.useContext(ContextGamburger)
  const {theme} = React.useContext(ContextThemes)

  return (
    <>
      <div className='site_bar_page'>
        <div className={`site_bar_box ${burger ? null : 'vissualy-hidden'}`}>
          <ul className='site_bar_list'>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <img src={Home} alt='home_logo'/>
              </div>
              <p className='site_bar_list_item_text--active'>
                Home
              </p>
            </li>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Olov color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                Trending
              </p>
            </li>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Fayl color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                Subscriptions
              </p>
            </li>
          </ul>
          <ul>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Popca color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                Library
              </p>
            </li>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Letter color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                History
              </p>
            </li>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Clock color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                Watch later
              </p>
            </li>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Star color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                Favourites
              </p>
            </li>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Like color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                Liked videos
              </p>
            </li>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Music color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                Music
              </p>
            </li>
            <li className='site_bar_list_item'>
              <div className='site_bar_list_item_box'>
                <Playstation color={Themes[theme].darkColors}/>
              </div>
              <p className='site_bar_list_item_text'>
                Games
              </p>
            </li>
          </ul>
          <div className='mb-4 icon_text_box'>
            <Strelca color={Themes[theme].darkColors}/>
            <p className='site_bar_list_item_text'>
              Show More
            </p>
          </div>
          <SiteBarShowMore/>
          <div className='setting_text_box'>
            <Settings color={Themes[theme].darkColors}/>
            <p className='m-0 p-0 site_bar_list_item_text'>
              Setting
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export { SiteBarPage }