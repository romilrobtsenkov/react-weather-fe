import React from 'react'
import PropTypes from 'prop-types'
import './Unitswitch.scss'

const Unitswitch = props => {
  const { units, handleUnitChange } = props

  return (
    <div className='onoffswitch'>
      <input
        type='checkbox'
        name='onoffswitch'
        id='unitsonoffswitch'
        checked={units === 'C'}
        onChange={handleUnitChange}
          />
      <label htmlFor='unitsonoffswitch'>
        <span className='inner' />
        <span className='switch' />
      </label>
    </div>
  )
}

Unitswitch.propTypes = {
  units: PropTypes.string.isRequired,
  handleUnitChange: PropTypes.func.isRequired
}

export default Unitswitch
