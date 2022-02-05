import './UserProfilePage1.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import Loading from '../../Assets/Svg/loading.svg'

function UserProfilePage1 () {

    const [photos, setPhotos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {

        (async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json()
            const dataSlice = data.slice(15, 16)
    
            if (dataSlice?.length > 0) {
                setPhotos([...dataSlice])
                setLoading(false)
            }
          } catch (err) {
            console.log(err)
            }
        })()
            
      },[])

    if(loading) {
      return <img className='loading' src={Loading} alt="loading" />
    }else {
    return (
        <>
          <div className='user_profile_page1'>
            <div className='home_photo_page2'>
              <div className='photos_box'>
                {
                  photos.length > 0 &&
                  photos.map((photo) => (
                    <div key={photo.id}>
                      <ul>
                        <li className='user_list_item'>
                          <NavLink to={'/photo/' + photo.id}>
                            <img className='photo_list_item_img' src={photo.thumbnailUrl} alt={'online_image'} width={1462} height={280}/>
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
    )}
}
export { UserProfilePage1 }