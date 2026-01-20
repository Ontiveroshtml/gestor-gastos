export function SelectType({ type, setSelectType }) {
  return (
    <select
      value={type}
      onChange={(e) => setSelectType(e.target.value)}
      className="bg-slate-600 rounded-md p-3 text-white font-medium cursor-pointer"
    >
      <option value="">Selecciona el tipo</option>
      <option value="ingreso">Ingreso</option>
      <option value="gasto">Gasto</option>
    </select>
  );
}
