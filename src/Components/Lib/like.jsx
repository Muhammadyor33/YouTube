function Like ({color}) {
  return  (
      <>
          <svg width="18" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M12.6 0C11.2 0 10 .5 9 1.4 8 .5 6.8 0 5.4 0 2.4 0 0 2.5 0 5.5c0 4.5 4.5 8.8 8.6 11.3h.8c4-2.6 8.6-6.8 8.6-11.3 0-3-2.4-5.5-5.4-5.5ZM9 14.8c-4.4-3-7.2-6.4-7.2-9.3 0-2 1.6-3.7 3.6-3.7.9 0 1.7.4 2.4 1l.9.8h.6l.9-.8c.7-.6 1.5-1 2.4-1 2 0 3.6 1.7 3.6 3.7 0 3-2.7 6.4-7.2 9.3Z" fill={color}/>
          </svg>
      </>
  )
}
export { Like }