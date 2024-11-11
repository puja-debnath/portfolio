import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/Store.jsx'
import {Provider} from "react-redux"
import 'antd/dist/reset.css'; // Use this for basic resets

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
