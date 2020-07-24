import React, {useContext} from 'react'
import { DataContext } from '../contexts/DataContext'

const Home = () => {
  const { dataContext, setDataContext } = useContext(DataContext)

  console.log(dataContext);
  const handleSubmit = () => {
    setDataContext({
      ...dataContext,
      name: 'John',
      age: 12,
      address: 'Bandung'
    })
  }

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}

export default Home
