import React from 'react'
import { Context as ContextShowMore } from '../../Context/SiteBarShowMore';

function Strelca ({color}) {

  const {more, setMore} = React.useContext(ContextShowMore)

  const ShowMore = function() {
    more ? setMore(!more) : setMore(!more)
  }

  return  (
      <>
        <svg className="show_more_strelca" onClick={ShowMore} width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity=".2" d="m6.7 5.3 5-5A1 1 0 1 1 13 1.7L7.4 7.4a1 1 0 0 1-1.4 0L.3 1.7A1 1 0 1 1 1.7.3l5 5Z" fill={color}/>
        </svg>
      </>
  )
}
export { Strelca }