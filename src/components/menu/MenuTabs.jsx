export default function MenuTabs({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-blue-500 transition-colors"
    >
      {label}
    </button>
  );
}
