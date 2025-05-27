import "./CSS/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
//Allows us to navigate between pages.
import { MovieProvider } from "./contexts/MovieContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    //Wrap with MovieProvider to provide context to the entire app
    //This allows us to access the movie context in any component
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/favorites" element={<Favorites></Favorites>} />
          <Route path="/Signup" element={<Signup></Signup>} />
          <Route path="/Login" element={<Login></Login>} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
