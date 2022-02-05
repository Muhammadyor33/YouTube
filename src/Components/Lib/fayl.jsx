function Fayl ({color}) {
  return  (
      <>
          <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M4 1c0-.6.4-1 .9-1h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1-1-1ZM0 8l.8 8.1c.1 1 1 1.9 2.1 1.9h12c1 0 2-.8 2.1-1.9l.8-8C17.9 7 17 6 15.9 6h-14C.8 6 0 7 0 8Zm2 0h13.8l-.9 8H3L2 8ZM3 3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H3Z" fill={color}/>
          </svg>
      </>
  )
}
export { Fayl }