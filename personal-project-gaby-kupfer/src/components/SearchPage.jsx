import React from 'react'
import { connect } from "react-redux";
import ResultsList from './ResultsList'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // username: '',
      forks: [],
      pullRequests: [],
      hasResults: false
    }
  }

  // componentDidMount() {
  //   console.log(this.props)
  // }

  // handleChange = event => {
  //   event.preventDefault()
  //   this.setState({
  //     username: event.target.value
  //   })
  //   console.log(this.state)
  // }

  fetchData = (username) => {
    console.log(this.props)
    const repoUrl = `https://api.github.com/users/${username}/events`

    fetch(repoUrl)
      .then(response => response.json())
      .then(data => {
        const pullRequests = data.filter(event => event.type === 'PullRequestEvent')
        const forks = data.filter(event => event.type === 'ForkEvent') || []
        this.setState({ pullRequests, forks, hasResults: true })
        return data
      })
      .catch(error => {
        return `error! ${error}`
      })
  }

  render() {
    const { username, forks, pullRequests, hasResults } = this.state
    console.log(this.props)
    return (
      <>
        <form>
        <div className="everythingHolder">
          <div className="labelAndInput">
            <label htmlFor="username">Github Username:</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Start typing...'
              // value={username}
              // onChange={this.handleChange}

              // I'm not sure if I actually have access to this action, I don't see it when I try to console log the props
              onChange={this.props.handleChangeUsername}
            />
          </div>
          <button type='button' onClick={() => this.fetchData(username)}>Get Results!</button>
        </div>
        </form>
        {
          hasResults
            ? (
                <>
                  <h1>{username}</h1>
                  <ResultsList title='Recent Forks' data={forks} />
                  <ResultsList title='Recent Pull Requests' data={pullRequests} />
                </>
              )
            : ''
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  username: state.username,
});

// const mapDispatchToProps = dispatch => ({
//   handleChangeUsername: (event) => dispatch(handleChangeUsername(event))
// })

const SearchPageConnected = connect(mapStateToProps)(SearchPage)
export default SearchPageConnected