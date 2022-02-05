import './SiteBarShowMore.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Context as ContextThemes } from '../../Context/Themes';
import { Context as ContextShowMore } from '../../Context/SiteBarShowMore';

function SiteBarShowMore() {

  const {more} = React.useContext(ContextShowMore)
  const {theme} = React.useContext(ContextThemes)
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {

    (async () => {
      try {
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json()

        if (data?.data?.length > 0) {
          setUsers([...data.data])
        }
      } catch (err) {
        console.log(err)
        }
    })()
        
  },[])

  return (
    <>
      <div>
        <div className={`site_bar_box ${more ? null : 'vissualy-hidden'}`}>
          <div>
            <h5 className={`${theme === 'light' ? 'site_bar_users_text' : 'site_bar_users_textw'}`}>
              Subscriptions
            </h5>
          </div>
          <div className='user_list'>
          {
            users.length > 0 &&
            users.map((user) => (
              <div key={user.id}>
                <ul>
                  <li className='user_list_item'>
                    <NavLink to={'/profile/' + user.id}>
                      <img className='user_list_item_img' src={user.avatar} alt={users.first_name + 's avatar'} width={26} height={26}/>
                    </NavLink>
                    <NavLink className='site_bar_navlink_text' to={'/profile/' + user.id}>
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
export { SiteBarShowMore }