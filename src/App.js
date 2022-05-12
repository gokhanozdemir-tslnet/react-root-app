import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Navigation from "./pages/navigationpage/navigation.page";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.page";
import Invoice from "./pages/InvoicePage/invoice.page";
import HomeSubContent from "./pages/home.sub.content";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<HomeSubContent />} />
        </Route>
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Fragment>
  );
}

export default App;
