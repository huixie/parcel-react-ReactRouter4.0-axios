import React, { Component } from 'react'

export default class notFound extends Component {
  render() {
    return (
      <div style={{height: '100%',display: 'flex',alignItems: 'center'}}>
        <img src={require('../../images/notfound.jpg')} style={{width:"100%"}} alt='无页面'/>
      </div>
    )
  }
}
