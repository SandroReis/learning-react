import React from 'react'

export default class HelloWorld extends React.Component {
  render () {
    return <h2>Hello {this.props.name}</h2>
  }
}
