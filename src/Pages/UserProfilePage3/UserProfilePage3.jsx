import './UserProfilePage3.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Context as ContextThemes } from '../../Context/Themes';

function UserProfilePage3() {

  const [users, setUsers] = React.useState([])
  const {theme} = React.useContext(ContextThemes)

  React.useEffect(() => {

    (async () => {
      try {
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json()
        const dataSlices = data.data.slice(3, 6)

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
                  <li className='user_profile_item_3'>
                    <NavLink to={'/profile/' + user.id}>
                      <img className='user_profile_item__img_3' src={user.avatar} alt={user.first_name + 's avatar'} width={50} height={50}/>
                    </NavLink>
                    <NavLink className={`${theme === 'light' ? 'user_profile_item_name_3' : 'user_profile_item_name_3w'}`} to={'/profile/' + user.id}>
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
export { UserProfilePage3 }