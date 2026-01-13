import { useState } from "react";
import "./App.css";

function App() {
  const [money, setMoney] = useState("");
  const [description, setDescription] = useState("");
  const [selectType, setSelectType] = useState("");
  const [costs, setCosts] = useState([]);
  const [error, setError] = useState("");

  const addCost = () => {
    if (!selectType) return setError("Selecciona el tipo de pago");
    if (!Number(money)) return setError("Ingresa una cantidad");
    const date = new Date(Date.now()).toLocaleDateString("es-MX");

    const obj = {
      id: Date.now(),
      quantity: money,
      descriptions: description,
      type: selectType.toUpperCase(),
      date: date,
    };
    setCosts((prev) => [...prev, obj]);

    setSelectType("");
    setMoney("");
    setDescription("");
    setError("");
  };

  const totalIngresos = costs
    .filter((cost) => cost.type === "INGRESO")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const totalGastos = costs
    .filter((cost) => cost.type === "GASTO")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const total = totalIngresos - totalGastos;

  return (
    <main>
      <section className="flex flex-col gap-8 pt-16 items-center mx-auto max-w-2xl">
        <h1 className="text-white text-4xl font-bold">Gestor de gastos</h1>

        <div className="grid grid-cols-3 w-full justify-between gap-6">
          <div className="bg-green-900 text-white p-4 font-medium rounded-md ">
            <h4>Ingresos</h4>
            <span>{totalIngresos}</span>
          </div>

          <div className="bg-red-900 text-white p-4 font-medium rounded-md">
            <h4>Gastos</h4>
            <span>{totalGastos}</span>
          </div>

          <div className="bg-red-900 text-white p-4 font-medium rounded-md">
            <h4>Total</h4>
            <span>{total}</span>
          </div>
        </div>

        <div className="flex gap-3 w-full justify-between">
          <select
            value={selectType}
            onChange={(e) => setSelectType(e.target.value)}
            className="bg-white rounded-md p-[0.3rem] text-black"
          >
            <option value="">Selecciona el tipo</option>
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>

          <input
            className="bg-white rounded-md p-[0.3rem] text-black"
            placeholder="Monto"
            type="text"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
          />
          <input
            className="bg-white rounded-md p-[0.3rem] text-black"
            placeholder="Descripcion (Opcional)"
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={addCost}
            className="bg-cyan-700 text-white p-2 rounded-md cursor-pointer"
          >
            Agregar
          </button>
        </div>
        <span className="text-red-900 -mb-5 -mt-5">{error}</span>

        <article className="flex flex-col gap-6 text-white font-medium pb-8">
          {costs.map((cost) => (
            <div
              key={cost.id}
              className={
                cost.type === "INGRESO"
                  ? "flex flex-col gap-6 p-6 rounded-lg bg-green-900 w-xl"
                  : "flex flex-col gap-6 p-6 rounded-lg bg-red-900 w-xl"
              }
            >
              <div className="flex flex-row justify-between">
                <span>${cost.quantity}</span>
                <span>{cost.type}</span>
              </div>

              <div className="flex justify-between">
                <p>
                  descripcion:{" "}
                  {!cost.descriptions ? "Sin descipcion" : cost.descriptions}
                </p>
                <span className="text-end">{cost.date}</span>
              </div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}

export default App;
