import './HeaderPage.scss'
import React from 'react'

import { GamburgerMenu } from '../Lib/Gamburger_menu'
import { YouTubeLogo } from '../Lib/YouTube_logo'
import { Camera } from '../Lib/camera'
import { Points } from '../Lib/points'
import { Bell } from '../Lib/bell'
import Search from '../../Assets/Svg/search.svg'
import Oval from '../../Assets/Svg/Oval.svg'
import User from '../../Assets/Images/youtube_user.png'

import { Context as ContextThemes } from '../../Context/Themes';
import { Themes } from '../../Localization/Themes';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function HeaderPage() {

  const {theme, setTheme} = React.useContext(ContextThemes)

  return (
    <>
      <div className='header_page'>
        <div className='gam_you_input_nav_box'>
          <div className='gam_you_input_box'>
            <GamburgerMenu color={Themes[theme].darkColors}/>
            <YouTubeLogo color={Themes[theme].darkColors}/>
            <div className='input_img_box'>
              <input className={`${theme === 'light' ? 'header_input' : 'header_inputw'}`} type={"text"} placeholder='Search'/>
              <img className='input_img_box_img' src={Search} alt="search" width={19} height={19}/>
            </div>
            <div className='select_box'>
              <FormControl sx={{width: 100}} value={theme} onChange={(evt) => setTheme(evt.target.value)}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Theme
                </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }}
                  >
                  <option value='light'>
                    Light
                  </option>
                  <option value='dark'>
                    Dark
                  </option>
                </NativeSelect>
              </FormControl>
            </div>
            <div>
            <nav>
              <ul className='list_img'>
                <li className='list_img_item'>
                  <Camera color={Themes[theme].darkColors}/>
                </li>
                <li className='list_img_item'>
                  <Points color={Themes[theme].darkColors}/>
                </li>
                <li className='list_img_item'>
                  <div className='list_img_item_box'>
                    <Bell Points color={Themes[theme].darkColors}/>
                    <img className='list_img_item_box_img' src={Oval} alt="camera" width={18} height={18}/>
                    <p className='list_img_item_box_3'>
                      3
                    </p>
                  </div>
                </li>
                <li className='list_img_item'>
                  <img src={User} alt="camera" width={40} height={40}/>
                </li>
              </ul>
            </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export { HeaderPage }