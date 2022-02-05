import './UserProfile.scss'
import React from 'react'
import { useParams } from 'react-router-dom'

import { Bell } from '../../Components/Lib/bell'
import Search from '../../Assets/Svg/search.svg'
import { Right } from '../../Components/Lib/rightt'
import { Left } from '../../Components/Lib/leftt'

import { Context as ContextThemes } from '../../Context/Themes';
import { Themes } from '../../Localization/Themes';
import { UserProfilePage1 } from '../UserProfilePage1/UserProfilePage1'
import { UserProfilePage2 } from '../UserProfilePage2/UserProfilePage2'
import { UserProfilePage3 } from '../UserProfilePage3/UserProfilePage3'
import { UserProfilePage4 } from '../UserProfilePage4/UserProfilePage4'

function UserProfile() {

  const { id } = useParams()
  const [users, setUser] = React.useState({})
  const {theme} = React.useContext(ContextThemes)

  React.useEffect(() => {

    (async () => {
        try {
            const response = await fetch('https://reqres.in/api/users/' + id)
            const data = await response.json()

            setUser(data.data)
        } catch (err) {
            console.log(err)
        }
    })()
        
  }, [id])
  
  return (
    <>
      <div>
        <div>
          <UserProfilePage1/>
        </div>
        <div className='user_el_box'>
          <div className='user_profile_box_user_name_img'>
            <img className='user_profile_user_img' src={users.avatar} alt={users.first_name + 's avatar'} width={80} height={80}/>
            <div>
              <h2 className={`${theme === 'light' ? 'user_profile_user_name' : 'user_profile_user_namew'}`}>
                {users.first_name + ' ' + users.last_name}
              </h2>
              <p className='user_profile_user_text'>
                245K subscribed
              </p>
            </div>
          </div>
          <div className='bell_btn_box'>
            <Bell Points color={Themes[theme].darkColors}/>
            <button className='user_profile_btn'>
                Subscribe 2.3m
            </button>
          </div>
        </div>
        <div className='user_ul_title_box'>
          <ul className='user_list_pages'>
            <li className='user_list_item_pages'>
              <div className='user_list_item_pages_span_text_box'>
                <h5 className='user_list_item_h5--active'>
                  Home
                </h5>
                <span className='user_list_item_pages_span'></span>
              </div>
            </li>
            <li className='user_list_item_pages'>
              <h5 className={`${theme === 'light' ? 'user_list_item_h5' : 'user_list_item_h5w'}`}>
                Videos
              </h5>
            </li>
            <li className='user_list_item_pages'>
              <h5 className={`${theme === 'light' ? 'user_list_item_h5' : 'user_list_item_h5w'}`}>
                Playlists
              </h5>
            </li>
            <li className='user_list_item_pages'>
              <h5 className={`${theme === 'light' ? 'user_list_item_h5' : 'user_list_item_h5w'}`}>
                Channels
              </h5>
            </li>
            <li className='user_list_item_pages'>
              <h5 className={`${theme === 'light' ? 'user_list_item_h5' : 'user_list_item_h5w'}`}>
                Discussion
              </h5>
            </li>
            <li className='user_list_item_pages'>
              <h5 className={`${theme === 'light' ? 'user_list_item_h5' : 'user_list_item_h5w'}`}>
                About
              </h5>
            </li>
            <li className='user_list_item_pages'>
              <img src={Search} alt="search" width={19} height={19}/>
            </li>
          </ul>
          <p className='user_el_box_title'>
            Recommended channel
          </p>
        </div>
        <div className='user_el_profile_3_box'>
          <div className='user_el_profile2_box'>
            <div className='user_profile2_box'>
              <UserProfilePage2/>
            </div>
            <div className='user_el_box_2'>
              <h3 className={`${theme === 'light' ? 'user_el_box_2_title' : 'user_el_box_2_titlew'}`}>
                Choosing The Best Audio Player Software For Your Computer
              </h3>
              <p className={`${theme === 'light' ? 'user_el_box_2_text' : 'user_el_box_2_textw'}`}>
                Your cheap internet-based banner advertising will become one ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
              </p>
              <p className='user_el_box_2_text2'>
                11k views  ·  6 months ago
              </p>
            </div>
          </div>
          <div>
            <UserProfilePage3/>
          </div>
        </div>
        <div>
          <h3 className={`${theme === 'light' ? 'home_girl_textw' : 'home_girl_textww'}`}>
            Margaret Phelps videos
          </h3>
          <div className='right_left_box'>
            <Right color={Themes[theme].darkColors}/>
            <Left color={Themes[theme].darkColors}/>
          </div>
          <UserProfilePage4/>
        </div>
      </div>
    </>
  )
}
export { UserProfile }