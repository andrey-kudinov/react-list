import React from 'react'

import './post-status-filter.css'

const PostStatusFilter = () => {
  return (
    <div className="btn-group"> 
      <button type='btn' className='btn btn-info'>Все</button>
      <button type='btn' className='btn btn-outline-secondary'>Понравилось</button>
    </div>
  )
}

export default PostStatusFilter