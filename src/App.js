import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Theme from './styles/Theme'
import GlobalStyle from './styles/Global'
import Routes from './routes'

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </Theme>
    )
}

export default App
