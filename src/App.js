import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Code_editor from "./Pages/Code_editor";
import Login from "./Pages/Login";
import ChatPage from "./Pages/Chat/Chat_page";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Code_editor />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
