import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        blue: '#2E26D9',
        pink: '#FFC4DD',
        red: '#FF5F5F',
        green: '#E5F4E3',
        black: '#000000',
    },
    fonts: {
        primary: 'Poppins',
    },
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
