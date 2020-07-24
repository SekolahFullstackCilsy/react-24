import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import { Link } from 'react-router-dom'

const About = () => {
  const { dataContext, setDataContext } = useContext(DataContext)
  console.log(dataContext);
  return (
    <div>
      <h1>About</h1>
      <h3>Nama : {dataContext ? dataContext.name : '-'}</h3>
      <h3>Umur : {dataContext ? dataContext.age : '-'}</h3>
      <h3>Alamat : {dataContext ? dataContext.address : '-'}</h3>
      <button onClick={() => setDataContext({
        ...dataContext,
        name: 'Randy',
        books: [
          {id: 1, bookName: 'Menyelami JS'},
          {id: 2, bookName: 'Menyelami React'},
          {id: 3, bookName: 'Menyelami Routing'},
        ]
      })}>Get Book</button>

      <button><Link to={'/book'}>See All</Link></button>
    </div>
  )
}

export default About
