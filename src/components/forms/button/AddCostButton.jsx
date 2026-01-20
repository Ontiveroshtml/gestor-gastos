export function AddCostButton({ onAddCost }) {
  return (
    <button
      onClick={onAddCost}
      className="bg-cyan-700 text-white p-2 rounded-md cursor-pointer"
    >
      Agregar
    </button>
  );
}
