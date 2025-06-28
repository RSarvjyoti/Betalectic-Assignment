import { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function AddFavorite({ favorites, setFavorites }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.npms.io/v2/search?q=${query}`);
      const data = await res.json();
      setResults(data.results);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    const newFav = {
      id: uuidv4(),
      name: selected.package.name,
      description: selected.package.description,
      notes
    };
    setFavorites([...favorites, newFav]);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Favorite NPM Package</h1>
      <div className="mb-4 flex">
        <TextInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search NPM package"
          className="mr-2"
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
      {results.length > 0 && (
        <div className="mb-4">
          <p>Select a package:</p>
          {results.map((r) => (
            <label key={r.package.name} className="block">
              <input
                type="radio"
                name="selected"
                onChange={() => setSelected(r)}
                checked={selected?.package.name === r.package.name}
              />{" "}
              <span className="font-medium">{r.package.name}</span> - {r.package.description}
            </label>
          ))}
        </div>
      )}
      {selected && (
        <div className="mb-4">
          <TextArea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Why do you like it?"
          />
        </div>
      )}
      {selected && (
        <Button onClick={handleSave}>Save Favorite</Button>
      )}
    </div>
  );
}