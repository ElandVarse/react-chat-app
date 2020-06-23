import React from 'react'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

import './global.css'

const App = () => (
    <Router>
        <Route exact path="/" component={Join} />
        <Route exact path="/chat" component={Chat} />
    </Router>
)

export default App;