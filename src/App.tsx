
import { HashRouter,BrowserRouter } from 'react-router-dom'
import { ClientContextProvider } from './context/ClientContext'
import { Router } from './Routes'
import { globalStyles } from './styles/global'

function App() {


globalStyles()

  return (
    <BrowserRouter>
      <ClientContextProvider>
        <Router/>
      </ClientContextProvider>
    </BrowserRouter> 
)
}

export default App
