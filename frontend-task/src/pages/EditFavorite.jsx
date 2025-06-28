import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

export default function EditFavorite({ favorites, setFavorites }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const fav = favorites.find((f) => f.id === id);
  const [notes, setNotes] = useState(fav?.notes || "");

  const handleSave = () => {
    const updated = favorites.map((f) =>
      f.id === id ? { ...f, notes } : f
    );
    setFavorites(updated);
    navigate("/");
  };

  if (!fav) return <p className="p-6">Favorite not found!</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Favorite: {fav.name}</h1>
      <TextArea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Update your notes"
        className="mb-4"
      />
      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  );
}