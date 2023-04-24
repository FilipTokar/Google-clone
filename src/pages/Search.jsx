import React from 'react'
import { useStateValue } from '../StateProvider'

export default function Search() {
  const [{term}, dispatch] = useStateValue()

  return (
    <div className='search-page'>
      <div className="search-page__header">
        <h1>{term}</h1>
      </div>
      <div className="search-page__results">

      </div>
    </div>
  )
}
