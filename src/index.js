import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import BigImg from './pages/bigimg';
import Homepage from './pages/homepage';
import './global.css'

let App  = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/bigimg/:id'} component={BigImg}/>
      </Switch>

    </BrowserRouter>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


