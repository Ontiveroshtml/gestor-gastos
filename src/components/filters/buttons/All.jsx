export function All({setFiltered}) {
  return (
    <button
      className="bg-cyan-800 p-3 w-full rounded-md hover:bg-cyan-700 cursor-pointer"
      onClick={() => setFiltered("todos")}
    >
      Todos
    </button>
  );
}
