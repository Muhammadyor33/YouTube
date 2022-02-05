import './HomeUserPage1.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Context as ContextThemes } from '../../Context/Themes';

function HomeUserPage1() {

  const [users, setUsers] = React.useState([])
  const {theme} = React.useContext(ContextThemes)

  React.useEffect(() => {

    (async () => {
      try {
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json()
        const dataSlices = data.data.slice(0,1)

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
                      <img className='home_girl_img' src={user.avatar} alt={user.first_name + 's avatar'} width={50} height={50}/>
                    </NavLink>
                    <NavLink className={`${theme === 'light' ? 'home_girl_text' : 'home_girl_textwww'}`} to={'/profile/' + user.id}>
                      {user.first_name + ' ' + user.last_name}
                    </NavLink>
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
export { HomeUserPage1 }