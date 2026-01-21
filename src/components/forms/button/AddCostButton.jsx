export function AddCostButton({ onAddCost }) {
  return (
    <button
      onClick={onAddCost}
      className="bg-cyan-700 text-white font-medium p-3 rounded-md cursor-pointer"
    >
      Agregar
    </button>
  );
}
