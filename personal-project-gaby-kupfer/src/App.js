import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import SearchPage from './components/SearchPage'
import { simpleAction } from './actions/simpleAction'
import { handleChangeUsername } from './actions/handleChangeUsername'

class App extends React.Component {
  simpleAction = () => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <SearchPage 
          // handleChangeUsername={this.props.handleChangeUsername}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})


// I don't know if this action was properly passed down to SearchPage
const mapDispatchToProps = dispatch => ({
  handleChangeUsername: (event) => dispatch(handleChangeUsername(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
