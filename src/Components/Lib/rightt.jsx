function Right ({color}) {
  return  (
      <>
        <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity=".2" d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z" fill="#000"/>
          <path fillRule="evenodd" clipRule="evenodd" d="m12 8.7-.5.5a1 1 0 0 0-.3.7c0 .2 0 .4.3.6l3.4 3.5-3.4 3.5-.3.6c0 .3 0 .5.3.7l.5.5.6.3c.3 0 .5 0 .7-.3l4.6-4.7c.2-.1.3-.3.3-.6s0-.5-.3-.7l-4.6-4.6a.9.9 0 0 0-.7-.3 1 1 0 0 0-.6.3Z" fill={color}/>
        </svg>
      </>
  )
}
export { Right }