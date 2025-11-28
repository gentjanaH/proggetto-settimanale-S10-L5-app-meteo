

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import NavBarMeteo from "./components/NavBarMeteo"
import MainSection from "./components/MainSection"
import { useState } from "react"
import SlideWeekMeteo from "./components/SlideWeekMeteo"

const App = function () {
  const [searchInput, setSearchInput] = useState()

  const searchACity = (city) => {
    setSearchInput(city)
  }

  return (
    <>
      <NavBarMeteo onSearch={searchACity} value={searchInput} />
      <MainSection searchInput={searchInput} />
      <SlideWeekMeteo />
    </>
  )
}

export default App
