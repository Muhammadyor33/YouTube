function Popca ({color}) {
  return  (
      <>
          <svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M1.8 0C.8 0 0 .8 0 1.8v12.4c0 1 .8 1.8 1.8 1.8h16.4c1 0 1.8-.8 1.8-1.8V4.4c0-1-.8-1.7-1.8-1.7H10L8.7.7C8.4.3 7.8 0 7.3 0H1.8Zm16.4 14.2H1.8V1.8h5.5l1.2 1.8c.3.5.9.8 1.5.8h8.2v9.8Z" fill={color}/>
          </svg>
      </>
  )
}
export { Popca }