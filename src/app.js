import React, { Component } from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable';
import routes from './router'

const LoadableComponent =(component)=> Loadable({
  loader: () => component,
  loading: ({error}) => {
    const style={textAlain:'center',maginTop:'2rem'};
    if(error){
      return <div style={style}>加载失败...</div>
    }
    return <div style={style}>加载中...</div>
  },
  delay: 300,
});

export default class app extends Component {
  render() {
    return (
      <Router basename='act'>
        <Switch>
          {
            routes.map(
              (item)=>
              <Route path={item.path} key={item.path} component={LoadableComponent    (item.component)}/>
            )
          }
        </Switch>
      </Router>
    )
  }
}
