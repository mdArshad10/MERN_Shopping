import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomeScreen from './screen/HomeScreen'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index path='/' element={<HomeScreen/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
