import { connect } from 'react-redux'
import { getWeather } from './HomeActions'
import Home from './Home'

const mapStateToProps = state => ({
  home: state.home
})

export default connect(mapStateToProps, { getWeather })(Home)
