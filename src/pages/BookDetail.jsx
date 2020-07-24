import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

const BookDetail = (props) => {
  console.log(props)
  const {id} = props.match.params
  const { dataContext, setDataContext } = useContext(DataContext)
  console.log(id);
  console.log(dataContext);
  const book = dataContext && dataContext.books.find((val) => val.id === parseInt(id))
  console.log(book)
  return (
    <div>
      <h1>Detail Buku {book && book.bookName}</h1>
    </div>
  )
}

export default BookDetail
