function Left ({color}) {
  return  (
      <>
        <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity=".2" d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z" fill="#000"/>
          <path fillRule="evenodd" clipRule="evenodd" d="m16 8.7.5.5c.2.2.3.4.3.7 0 .2 0 .4-.3.6L13.1 14l3.4 3.5.3.6c0 .3 0 .5-.3.7l-.5.5-.6.3c-.3 0-.5 0-.7-.3l-4.6-4.7a.9.9 0 0 1-.3-.6c0-.3 0-.5.3-.7l4.6-4.6c.2-.2.4-.3.7-.3.2 0 .4 0 .6.3Z" fill={color}/>
        </svg>
      </>
  )
}
export { Left }