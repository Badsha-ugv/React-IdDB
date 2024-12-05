import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import SearchBox from './components/SearchBox'

function App() {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
    <div className="container">
      <h3 className="text-center my-3">IMDB Movies</h3>

      <SearchBox setSearchTerm={setSearchTerm} />
      <Card searchTerm={searchTerm}/>
    </div>

    </>
  )
}

export default App
