import React from 'react'
import './App.css'
import Header from './Header'
import { MainBoard, CategorySect } from './main'

function App() {

  return (
    <>
      <React.StrictMode>
        <Header />
        <MainBoard />
        <CategorySect />
      </React.StrictMode>
    </>
  )
}

export default App
