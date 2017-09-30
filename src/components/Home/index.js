import React from 'react'
import './Home.scss'
import queryString from 'query-string'
import nprogress from 'nprogress'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
    this.getUserLocation = this.getUserLocation.bind(this)
    this.gotCoords = this.gotCoords.bind(this)
  }

  handleSearch (e) {
    e.preventDefault()
    const searchString = e.target.querySelector('input').value

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
      <div id='home'>
        <h1>Welcome</h1>
        <form onSubmit={this.handleSearch}>
          <input type='search' placeholder='location or lat,lng' />
        </form>
        <br />
        or
        <br />
        use my <a href='#getPosition' onClick={this.getUserLocation}>current position</a>
      </div>
    )
  }
}

export default Home
