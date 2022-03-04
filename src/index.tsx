import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

//Pages
import Home from "./Home";
import App from "./App";
import Space from "./space";
import { AnimatePresence } from "framer-motion";
import About from "./about";
import Random from "./Random";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AnimatePresence initial={false}>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/space/:id" element={<Space />} />
              <Route path='/about' element={<About />} />
              <Route path='/random' element={<Random />} />
            </Route>
          </Routes>
        </Router>
      </AnimatePresence>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
