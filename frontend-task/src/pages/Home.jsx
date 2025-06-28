import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import PackageTable from "../components/PackageTable";
import ConfirmModal from "../components/ConfirmModal";

export default function Home({ favorites, setFavorites }) {
  const [confirmId, setConfirmId] = useState(null);

  const handleDelete = (id) => {
    setConfirmId(id);
  };

  const confirmDelete = () => {
    const updated = favorites.filter(fav => fav.id !== confirmId);
    setFavorites(updated);
    setConfirmId(null);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Favorite NPM Packages</h1>
      <Link to="/add">
        <Button>Add New</Button>
      </Link>
      {favorites.length === 0 ? (
        <p className="mt-4">You don't have any favorites. Please add!</p>
      ) : (
        <PackageTable favorites={favorites} onDelete={handleDelete} />
      )}
      {confirmId && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setConfirmId(null)}
        />
      )}
    </div>
  );
}