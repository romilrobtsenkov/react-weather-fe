import React from 'react'
import './Home.scss'
import queryString from 'query-string'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (e) {
    e.preventDefault()
    const searchString = e.target.querySelector('input').value

    const queryParams = searchString.split(',')
    const query = queryParams.length > 1
      ? { lat: queryParams[0], lng: queryParams[1] }
      : { q: searchString }

    this.props.history.push(
      '/forecast' +
      '?' +
      queryString.stringify(query, { arrayFormat: 'bracket' })
    )
  }

  render () {
    return (
      <div id='home'>
        <h1>Welcome</h1>
        <form onSubmit={this.handleSearch}>
          <input type='search' placeholder='location or lat,lng' />
        </form>
      </div>
    )
  }
}

export default Home
