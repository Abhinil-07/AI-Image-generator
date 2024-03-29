import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
