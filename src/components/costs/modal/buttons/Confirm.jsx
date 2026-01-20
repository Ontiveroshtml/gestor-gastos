
export function Confirm({onDelete, setShowModal, cost}) {
  return (
    <div className="flex justify-around">
      <button
        onClick={() => onDelete(cost.id)}
        className="bg-yellow-600 p-2 rounded-md cursor-pointer hover:bg-yellow-700"
      >
        Si, eliminar
      </button>
      <button
        onClick={() => setShowModal(null)}
        className="bg-cyan-800 p-2 rounded-md cursor-pointer hover:bg-cyan-900"
      >
        No, Cancelar
      </button>
    </div>
  );
}
