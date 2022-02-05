import './PhotosPage.scss'
import React from 'react'
import { useParams } from 'react-router-dom'

import HandPas from '../../Assets/Svg/hand_pas.svg'
import HandTepa from '../../Assets/Svg/hand_tepa.svg'
import StrelcaFollow from '../../Assets/Svg/strelca_follow.svg'
import MoreFollow from '../../Assets/Svg/more_photo.svg'
import KunTun from '../../Assets/Svg/kun_tun.svg'
import Loading from '../../Assets/Svg/loading.svg'

import { PhotosPhotoPage1 } from '../PhotosPhotoPage1/PhotosPhotoPage1'
import { PhotosPhotoPage2 } from '../PhotosPhotoPage2/PhotosPhotoPage2'
import { Context as ContextThemes } from '../../Context/Themes';

function PhotosPage() {

  const { id } = useParams()
  const [photos, setPhotos] = React.useState([])
  const {theme} = React.useContext(ContextThemes)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {

    (async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + id)
            const data = await response.json()

            setPhotos(data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    })()
        
  }, [id])
  
  if(loading) {
    return <img className='loading' src={Loading} alt="loading" />
  }else {
  return (
    <>
      <div className='photo_page_box'>
        <div className='photo_page_box_box'>
          <img className='photos_page_img' src={photos.thumbnailUrl} alt={'online_image'} width={1265} height={600}/>
          <h1 className={`${theme === 'light' ? 'photos_page_title' : 'photos_page_titlew'}`}>
            Dude You Re Getting A Telescope
          </h1>
          <div className='photos_page_box'>
            <p className='photos_page_box_text'>
              123k views
            </p>
            <div className='photos_page_box_box'>
              <button className='photos_page_box_box_btn'>
                <img className='photos_page_box_box_btn_svg' src={HandPas} alt='hand_pas' width={14} height={13}/>
                <p className='photos_page_box_box_btn_text'>
                  123k
                </p>
              </button>
              <button className='photos_page_box_box_btn'>
                <img className='photos_page_box_box_btn_svg' src={HandTepa} alt='hand_pas' width={14} height={13}/>
                <p className='photos_page_box_box_btn_text'>
                  435k
                </p>
              </button>
              <button className='photos_page_box_box_btn'>
                <img className='photos_page_box_box_btn_svg' src={StrelcaFollow} alt='hand_pas' width={14} height={13}/>
                <p className='photos_page_box_box_btn_text'>
                  Share
                </p>
              </button>
            <img src={MoreFollow} alt='hand_pas' width={28} height={6}/>
            </div>
          </div>
          <hr className='photos_span'/>
          <div>
            <PhotosPhotoPage1/>
          </div>
        </div>
        <div className='photo_page_box_box2'>
          <div className='photo_page_box_box2_title_img_box'>
            <h2 className={`${theme === 'light' ? 'photo_page_box_box2_title' : 'photo_page_box_box2_titlew'}`}>
              Next
            </h2>
            <div className='photo_page_box_box2_title_img_box2'>
              <h5 className={`${theme === 'light' ? 'photo_page_box_box2_title_img_box2_text' : 'photo_page_box_box2_title_img_box2_textw'}`}>
                Autoplay
              </h5>
              <div className='photo_page_box_box2_title_img_box2_img'>
                <img className='photo_page_box_box2_title_img_box2_imgg' src={KunTun} alt="kun_tun" width={36} height={24}/>
              </div>
            </div>
          </div>
          <PhotosPhotoPage2/>
        </div>
      </div>
    </>
  )}
}
export { PhotosPage }