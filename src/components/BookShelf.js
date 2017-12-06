import React, { Component } from 'react'

class BookShelf extends Component {
  render () {
    return (
      <div>
        {this.props.shelf}
      </div>
    )
  }
}

export default BookShelf