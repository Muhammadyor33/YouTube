function Clock ({color}) {
  return  (
      <>
        <svg width="17" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M12.7 16.7a7.8 7.8 0 0 1-8.4 0l-1 1.6a1 1 0 0 1-1.3.4 1 1 0 0 1-.4-1.4l1.1-1.9a8.3 8.3 0 0 1-1.5-9A3.6 3.6 0 0 1 0 3.5C0 1.6 1.6 0 3.5 0c1.3 0 2.4.7 3 1.8a7.8 7.8 0 0 1 3.8 0C10.9.6 12 0 13.3 0c2 0 3.5 1.6 3.5 3.6 0 1-.4 2-1 2.6a8.4 8.4 0 0 1-1.5 9.2l1 2a1 1 0 0 1-.3 1.3 1 1 0 0 1-1.4-.4l-.9-1.6Zm-5.2-11c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1h-2a1 1 0 0 1-1-1c0-.5.4-1 1-1h1v-3ZM2 3.5C2 2.7 2.7 2 3.5 2c.4 0 .8.1 1.1.5a8 8 0 0 0-2.3 2c-.2-.3-.3-.7-.3-1Zm12.8 0c0-.9-.7-1.5-1.5-1.5-.4 0-.8.1-1 .4a8 8 0 0 1 2.3 1.9l.2-.8ZM8.5 15.9a6 6 0 0 1-6-6.1 6 6 0 0 1 6-6.2 6 6 0 0 1 6 6.2 6 6 0 0 1-6 6.1Z" fill={color}/>
        </svg>
      </>
  )
}
export { Clock }