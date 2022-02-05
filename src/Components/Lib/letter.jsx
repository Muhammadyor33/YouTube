function Letter ({color}) {
  return  (
      <>
          <svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M6.4 0a2.7 2.7 0 0 0-2.8 2.7v9.9H1a1 1 0 0 0-.9.9v1.8C0 16.8 1.2 18 2.7 18h11c1.4 0 2.7-1.2 2.7-2.7V5.4H19c.5 0 .9-.4.9-.9V2.7C20 1.2 18.8 0 17.3 0h-11ZM5.3 16.2l.2-.9V2.7a1 1 0 0 1 1.8 0v1.8c0 .5.4.9.9.9h6.3v9.9c0 .5-.4.9-.9.9H5.3Zm-3.5-1.8v.9c0 .5.4.9 1 .9.4 0 .8-.4.8-.9v-.9H1.8ZM9.1 3.6v-.9c0-.3 0-.6-.2-.9h8.4c.5 0 .9.4.9.9v.9H9Z" fill={color}/>
          </svg>
      </>
  )
}
export { Letter }