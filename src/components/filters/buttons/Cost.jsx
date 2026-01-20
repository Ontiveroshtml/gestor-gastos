export function Cost({setFiltered}) {
  return (
    <button
      className="bg-green-800 p-2 w-full rounded-md hover:bg-green-700 cursor-pointer"
      onClick={() => setFiltered("ingresos")}
    >
      Ingresos
    </button>
  );
}
