/* eslint-disable react/prop-types */

export default function MenuTabs({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold transition-colors cursor-pointer hover:text-blue-500"
    >
      {label}
    </button>
  );
}
