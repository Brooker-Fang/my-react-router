import React from 'react'

export default class Product extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render = ()  => (
    <div>Product: {this.props.id}</div>
  )
}
