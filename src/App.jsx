import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import gsap from 'gsap'

import Header from "./components/Header"
import About from "./pages/about/About";



function App() {

  // useGSAP(() => {
  //   gsap.to(".left__side" , {
  //     delay: 0.5,
  //     x: '-100%',
  //   })
  //   gsap.to(".right__side" , {
  //     delay: 0.5,
  //     x: '100%',
  //   })
  // })
  return(
    <>
      <Router>
        <Routes>
          {/* <div className="main">
            <div className="opening">
              <div className="left__side"></div>
              <div className="right__side"></div>
            </div>
            <Header />
          </div> */}
          <Route path="/" element={<Header />}></Route>
          <Route path="/About" element={<About />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
