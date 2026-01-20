export function Deposit({setFiltered}) {
  return (
    <button
      className="bg-red-800 p-2 w-full rounded-md hover:bg-red-700 cursor-pointer"
      onClick={() => setFiltered("gastos")}
    >
      Gastos
    </button>
  );
}
