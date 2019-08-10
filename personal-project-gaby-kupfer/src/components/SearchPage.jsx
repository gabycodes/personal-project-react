import React from 'react'
import ResultsList from './ResultsList'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      forks: [],
      pullRequests: [],
      hasResults: false
    }
  }
  
  handleChange = event => {
    event.preventDefault()
    this.setState({
      username: event.target.value
    })
  }

  fetchData = (username) => {
    const repoUrl = `https://api.github.com/users/${username}/events`

    fetch(repoUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const pullRequests = data.filter(event => event.type === 'PullRequestEvent')
        const forks = data.filter(event => event.type === 'ForkEvent') || []
        console.log('🍉', forks)
        this.setState({ pullRequests, forks, hasResults: true })
        return data
      })
      .catch(error => {
        return `error! ${error}`
      })
  }

  render() {
    const { username, forks, pullRequests, hasResults } = this.state
    return (
      <>
        <form>
          <div className="labelAndInput">
            <label htmlFor="username">Github Username:</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Start typing...'
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <button type='button' onClick={() => this.fetchData(username)}>Get Results!</button>
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

export default SearchPage;