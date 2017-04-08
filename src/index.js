import React from 'react'
import { render } from 'react-dom'
import { install } from 'offline-plugin/runtime'

import './base.css'
import App from './components/App/App'

render(<App />, document.getElementById('app'))

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });

}
