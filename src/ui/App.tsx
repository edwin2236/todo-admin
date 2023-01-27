import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/tasks'} element={<h1>hello world </h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
