import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './routes/Navigation'

function App() {

  return (
    <>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </>
  )
}

export default App
