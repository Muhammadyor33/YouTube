import './PhotosPhotoPage2.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Context as ContextThemes } from '../../Context/Themes';

function PhotosPhotoPage2 () {

    const [photos, setPhotos] = React.useState([])
    const {theme} = React.useContext(ContextThemes)

    React.useEffect(() => {

        (async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json()
            const dataSlice = data.slice(23, 26)
    
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
          <div>
            <div className=''>
              <div className=''>
                {
                  photos.length > 0 &&
                  photos.map((photo) => (
                    <div key={photo.id}>
                      <ul className='photos_photo_page_list'>
                        <li className=''>
                          <NavLink className='' to={'/photo/' + photo.id}>
                            <img className='photos_photo_page_img' src={photo.thumbnailUrl} alt={'online_image'} width={367} height={213}/>
                          </NavLink>
                        </li>
                        <li>
                          <h5 className={`${theme === 'light' ? 'photos_photo_page_text' : 'photos_photo_page_textw'}`}>
                            Lorem ipsum dolor sit.
                          </h5>
                          <div className='photos_photo_page_box'>
                            <p className='m-0 p-0 photos_photo_page_title'>
                              123k views
                            </p>
                            <p className='m-0 p-0 photos_photo_page_title'>
                              Dollie Blair
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
export { PhotosPhotoPage2 }