import { Route, Routes } from "react-router-dom";

//----------import component and pages ---------------

import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";

//-----------------------------------------------------
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
