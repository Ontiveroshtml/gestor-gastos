export function Delete({onIsShowed, cost}) {
  return (
    <>
      <button
        onClick={() => onIsShowed(cost.id)}
        className="bg-cyan-800 p-2 rounded-md cursor-pointer hover:bg-cyan-900"
      >
        Eliminar
      </button>
    </>
  );
}
