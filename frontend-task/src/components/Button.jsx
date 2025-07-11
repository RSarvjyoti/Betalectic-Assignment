export default function Button({ children, onClick, type = "button", className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
}
