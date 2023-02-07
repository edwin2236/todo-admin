import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoPage from './pages/TodoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/tasks'} element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
