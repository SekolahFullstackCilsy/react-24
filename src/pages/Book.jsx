import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import {Link} from 'react-router-dom'

const Book = () => {
  const { dataContext, setDataContext } = useContext(DataContext)
  return (
    <div>
      <h1>List Buku</h1>
      {dataContext && dataContext.books.map((val, key) => (
        <div key={key}>
          <h1><Link to={`/book/${val.id}`}> Nama Buku: {val.bookName}</Link></h1>
        </div>
      ))}
    </div>
  )
}

export default Book
