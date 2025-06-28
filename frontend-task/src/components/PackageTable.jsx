import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import NotesModal from "./NotesModal";

export default function PackageTable({ favorites, onDelete }) {
  const [viewItem, setViewItem] = useState(null);

  return (
    <>
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-[0.5px] border-[grey] px-4 py-2 text-left">
              Package Name
            </th>
            <th className="border-[0.5px] border-[grey] px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((fav) => (
            <tr key={fav.id}>
              <td className="border-[0.5px] border-[grey] px-4 py-2">
                {fav.name}
              </td>
              <td className="border-[0.5px] border-[grey] flex items-center justify-center gap-4 px-5 py-4 text-center">
                <FaEye
                  onClick={() => setViewItem(fav)}
                  className="mr-1 text-1xl cursor-pointer"
                />
                <Link to={`/edit/${fav.id}`}>
                  <FaEdit className="mr-1 text-1xl" />
                </Link>
                <RiDeleteBin6Line
                  onClick={() => onDelete(fav.id)}
                  className="mr-1 text-1xl cursor-pointe"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewItem && (
        <NotesModal
          item={viewItem}
          onClose={() => setViewItem(null)}
        />
      )}
    </>
  );
}
