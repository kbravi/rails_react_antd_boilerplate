import React from 'react'
import ReactDOM from 'react-dom'
import Home from 'pages/home'

const renderPack = Component => {
  ReactDOM.render(<Component /> , document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', renderPack(Home));

 if (module.hot) {
   module.hot.accept('pages/home', () => {
     const NextHome = require('pages/home').default;
     renderPack(NextHome);
   });
 }
