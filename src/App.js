import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";

function App() {
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
