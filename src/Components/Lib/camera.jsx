function Camera ({color}) {
  return  (
      <>
          <svg width="27" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="m22.2 2.9-3.8 2.8V2.5c0-1.4-1-2.5-2.4-2.5H2.5A2.5 2.5 0 0 0 0 2.5v15C0 18.9 1.1 20 2.5 20H16c1.3 0 2.4-1.1 2.4-2.5v-3.2l3.8 2.8c.3.2.8.4 1.1.4h2.5c.7 0 1.2-.6 1.2-1.3V3.8c0-.7-.6-1.3-1.2-1.3h-2.5c-.3 0-.8.2-1 .4ZM2.5 17.5v-15H16v15H2.5Zm2.4-3.8c0-.6.6-1.2 1.2-1.2h6.2c.6 0 1.2.6 1.2 1.3 0 .6-.6 1.2-1.2 1.2H6c-.6 0-1.2-.6-1.2-1.3ZM23.5 15l-5-3.8V8.8l5-3.8h1v10h-1Z" fill={color}/>
          </svg>
      </>
  )
}
export { Camera }