import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Converter } from "./features/converter/Converter";
import { CurrencyList } from "./features/currencyList/CurrencyList";
import Footer from "./features/footer/Footer";


const Header = lazy(() => import("./features/header/Header"));

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Suspense
          fallback={
            <div id="loading"></div>
          }
        >
          <Header />
          <Routes>
            <Route path="/" element={<Converter />} />
            <Route path="/currency-list" element={<CurrencyList/>} />
          </Routes>
          <Footer/>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
