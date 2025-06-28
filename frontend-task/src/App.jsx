import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { loadFavorites, saveFavorites } from "./utils/storage";
import Home from "./pages/Home";
import AddFavorite from "./pages/AddFavorite";
import EditFavorite from "./pages/EditFavorite";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
      <Routes>
        <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/add" element={<AddFavorite favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/edit/:id" element={<EditFavorite favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
  );
}

export default App;