import React, {Component} from 'react' // same as React.Component
// class based component, used to store values, update the state and ReactDOM
class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}
  }
    render() {
        return (
          <div className="search-bar">
            <input
              value={this.state.term} // means the initial value {term: ''}
              // updated value onChange=...react reserved keyword
              onChange={(event) => this.onInputChange(event.target.value)}/>
          </div>
        )
    }
onInputChange(term) {
  this.setState({term})
  this.props.onSearchTermChange(term) // this.props because is a class component
}
}

export default SearchBar
