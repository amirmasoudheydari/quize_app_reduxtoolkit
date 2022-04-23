import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { Provider } from 'react-redux';
import store from './app/store'
import { getCategory } from './app/reducer';


const container = document.getElementById('root')
const root = createRoot(container)

store.dispatch(getCategory())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)


