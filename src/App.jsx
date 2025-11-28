

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import NavBarMeteo from "./components/NavBarMeteo"
import MainSection from "./components/MainSection"
import NotFound from "./components/NotFound"
import { useState } from "react"
import Carosello from "./components/Carosello"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FooterMeteo from "./components/FooterMeteo"
import SezioneStatica from "./components/SezioneStatica"

const App = function () {
  const [searchInput, setSearchInput] = useState("")

  const searchACity = (city) => {
    setSearchInput(city)
  }

  return (
    <>
      <BrowserRouter>
        <NavBarMeteo onSearch={searchACity} value={searchInput} />
        <SezioneStatica />
        <Routes>
          <Route path="/"
            element={
              searchInput ? (<MainSection searchInput={searchInput} />) : (<SezioneStatica />)}></Route>
          <Route path="/dailyMeteo" element={<Carosello searchInput={searchInput} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <FooterMeteo />
      </BrowserRouter >
    </>
  )
}

export default App
