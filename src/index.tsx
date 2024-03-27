import React from 'react';
import './styles.css'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { setupStore } from './app/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = setupStore()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
)
