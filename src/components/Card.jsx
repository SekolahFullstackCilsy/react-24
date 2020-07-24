import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ name, age }) => {
  return (
    <div>
      <h1>Nama : {name}</h1>
      <h1>Umur : {age}</h1>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
}

Card.defaultProps = {
  name: 'john',
  age: ''
}

export default Card