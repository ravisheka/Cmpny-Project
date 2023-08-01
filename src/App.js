import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer1";
import Accup from "./component/Accup/accup";
import About from "./pages/About";
import Career from "./pages/Career";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import Chat from "./component/Chat/chat";
// import Chat from "./component/Chat/chat";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accup />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
      <Footer />
     
    </div>
  );
};

export default App;
