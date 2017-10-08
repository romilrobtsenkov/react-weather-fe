import React from 'react'
import './Home.scss'
import queryString from 'query-string'
import nprogress from 'nprogress'

import searchIcon from '../../media/searchIcon.svg'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
    this.getUserLocation = this.getUserLocation.bind(this)
    this.gotCoords = this.gotCoords.bind(this)
  }

  handleSearch (e) {
    e.preventDefault()
    const searchString = document.getElementById('search__input').value

    if (!searchString) return

    const queryParams = searchString.split(',')
    const query = queryParams.length > 1
      ? { lat: queryParams[0], lon: queryParams[1] }
      : { q: searchString }

    this.props.history.push(
      '/forecast' +
      '?' +
      queryString.stringify(query, { arrayFormat: 'bracket' })
    )
  }

  getUserLocation () {
    if (navigator.geolocation) {
      nprogress.start()

      navigator.geolocation.getCurrentPosition(this.gotCoords)
    } else {
      window.alert('Geolocation is not supported by this browser.')
    }
  }

  gotCoords (position) {
    nprogress.done()

    const { latitude, longitude } = position.coords
    this.props.history.push(
      '/forecast' +
      '?' +
      queryString.stringify({
        lat: latitude,
        lon: longitude
      }, { arrayFormat: 'bracket' })
    )
  }

  render () {
    return (
      <section className='home'>
        <form onSubmit={this.handleSearch}>
          <div className='search'>
            <input type='search' id='search__input' placeholder='City' />
            <span onClick={this.handleSearch} role='button' className='search__icon'><img src={searchIcon} /></span>
          </div>
        </form>
        <p className='position'>
          <span className='small'>or</span><br />
          use my <span onClick={this.getUserLocation} role='button' className='position__button'>current position</span>
        </p>
      </section>
    )
  }
}

export default Home
