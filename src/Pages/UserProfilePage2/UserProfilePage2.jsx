import './UserProfilePage2.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

function UserProfilePage2 () {

    const [photos, setPhotos] = React.useState([])

    React.useEffect(() => {

        (async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json()
            const dataSlice = data.slice(16, 17)
    
            if (dataSlice?.length > 0) {
                setPhotos([...dataSlice])
            }
          } catch (err) {
            console.log(err)
            }
        })()
            
      },[])

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
                            <img className='photo_list_item_img' src={photo.thumbnailUrl} alt={'online_image'} width={500} height={250}/>
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
export { UserProfilePage2 }