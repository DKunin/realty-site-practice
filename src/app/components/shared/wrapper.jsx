import React from 'react'

const Wrapper = (props) => {
  const { children } = props

  return(
        <div className='spread'>
          {children}
        </div>
  )
}

export default Wrapper
