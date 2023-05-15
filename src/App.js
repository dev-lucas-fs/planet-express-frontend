import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import GlobalStyle from "./static/styles/GlobalStyle";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeApp from "./pages/HomeApp";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/app" element={<HomeApp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
