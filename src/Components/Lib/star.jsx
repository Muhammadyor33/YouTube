function Star ({color}) {
  return  (
      <>
          <svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M15.6 16.2c.2 1.2-.9 2-2 1.4l-4.2-2.2L5 17.6c-1.1.6-2.2-.2-2-1.4l.8-4.7L.5 8.2c-1-1-.5-2.2.8-2.4L6 5.1 8 1c.6-1.2 2-1.2 2.5 0l2 4.2 4.8.7c1.3.2 1.7 1.5.8 2.4l-3.4 3.3.8 4.7ZM5 15.6l3.4-1.8a2 2 0 0 1 1.7 0l3.4 1.8-.7-3.8c0-.6.2-1.2.6-1.6l2.7-2.7-3.8-.5a2 2 0 0 1-1.3-1L9.3 2.5 7.6 6a2 2 0 0 1-1.3 1l-3.8.5 2.7 2.7c.4.4.6 1 .5 1.6l-.6 3.8Z" fill={color}/>
          </svg>
      </>
  )
}
export { Star }