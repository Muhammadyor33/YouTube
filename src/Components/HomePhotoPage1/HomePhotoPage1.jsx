import './HomePhotoPage1.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Right } from '../Lib/rightt'
import { Left } from '../Lib/leftt'
import Loading from '../../Assets/Svg/loading.svg'

import { Themes } from '../../Localization/Themes';
import { Context as ContextThemes } from '../../Context/Themes';

function HomePhotoPage1 () {

    const [photos, setPhotos] = React.useState([])
    const {theme} = React.useContext(ContextThemes)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {

        (async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json()
            const dataSlice = data.slice(0, 6)
    
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
          <div>
            <div className='home_photo_page_box1'>
              <div className='right_left_box'>
                <Right color={Themes[theme].darkColors}/>
                <Left color={Themes[theme].darkColors}/>
              </div>
              <div className='photos_box'>
                {
                  photos.length > 0 &&
                  photos.map((photo) => (
                    <div key={photo.id}>
                      <ul>
                        <li className='user_list_item'>
                          <NavLink className='photo_list_item_img' to={'/photo/' + photo.id}>
                            <img className='photo_list_item_img' src={photo.thumbnailUrl} alt={'online_images'} width={220} height={120}/>
                          </NavLink>
                        </li>
                        <li>
                          <h5 className={`${theme === 'light' ? 'user_list_item_title' : 'user_list_item_titlew'}`}>
                            Lorem, ipsum dolor.
                          </h5>
                          <div className='user_list_item_box'>
                            <p className='m-0 p-0 user_item_box_text'>
                              80k views  ·  3 days ago
                            </p>
                            <p className='m-0 p-0 user_item_box_text'>
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
    )}
}
export { HomePhotoPage1 }