import './PhotosPhotoPage1.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Context as ContextThemes } from '../../Context/Themes';

function PhotosPhotoPage1() {

  const [users, setUsers] = React.useState([])
  const {theme} = React.useContext(ContextThemes)

  React.useEffect(() => {

    (async () => {
      try {
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json()
        const dataSlices = data.data.slice(2,3)

        if (dataSlices?.length > 0) {
          setUsers([...dataSlices])
        }
      } catch (err) {
        console.log(err)
        }
    })()
        
  },[])

  return (
    <>
      <div>
        <div>
          <div className=''>
          {
            users.length > 0 &&
            users.map((user) => (
              <div key={user.id}>
                <ul>
                  <li className='home_girl_text_box'>
                    <NavLink to={'/profile/' + user.id}>
                      <img className='home_girl_imgg' src={user.avatar} alt={user.first_name + 's avatar'} width={80} height={80}/>
                    </NavLink>
                    <div className='user_name_text_title_box'>
                      <div className='home_user_name_btn_box'>
                        <NavLink className={`${theme === 'light' ? 'home_girl_textt' : 'home_girl_texttw'}`} to={'/profile/' + user.id}>
                          {user.first_name + ' ' + user.last_name}
                        </NavLink>
                        <button className='home_girl_title_text_box_btn'>
                          Subscribe 2.3m
                        </button>
                      </div>
                      <p className='home_girl_titlee'>
                        Published on 14 Jun 2019
                      </p>
                      <p className={`${theme === 'light' ? 'home_girl_title_text' : 'home_girl_title_textw'}`}>
                        A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. 
                      </p>
                      <p className='home_girl_title_text_show_more'>
                        Show more
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </>
  )
}
export { PhotosPhotoPage1 }