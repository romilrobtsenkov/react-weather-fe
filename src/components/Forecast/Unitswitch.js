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
        className='onoffswitch-checkbox'
        id='unitsonoffswitch'
        checked={units === 'C'}
        onChange={handleUnitChange}
          />
      <label className='onoffswitch-label' htmlFor='unitsonoffswitch'>
        <span className='onoffswitch-inner' />
        <span className='onoffswitch-switch' />
      </label>
    </div>
  )
}

Unitswitch.propTypes = {
  units: PropTypes.string.isRequired,
  handleUnitChange: PropTypes.func.isRequired
}

export default Unitswitch
