export function SelectType({ type, setSelectType }) {
  return (
    <select
      value={type}
      onChange={(e) => setSelectType(e.target.value)}
      className="bg-slate-600 rounded-md p-3 w-full text-white font-medium cursor-pointer"
    >
      <option value="" className="text-white">Selecciona el tipo</option>
      <option value="ingreso" className="text-white font-medium">Ingreso</option>
      <option value="gasto" className="text-white font-medium">Gasto</option>
    </select>
  );
}
