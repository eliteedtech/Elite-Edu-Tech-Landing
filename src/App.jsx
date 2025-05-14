import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './routes/Navigation'
import About  from './pages/About'

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
