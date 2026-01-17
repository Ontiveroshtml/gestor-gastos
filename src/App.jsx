import { useState } from "react";
import "./App.css";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [money, setMoney] = useState("");
  const [description, setDescription] = useState("");
  const [selectType, setSelectType] = useState("");
  const [costs, setCosts] = useLocalStorage("cost", []);
  const [error, setError] = useState("");
  const [filtered, setFiltered] = useLocalStorage("filter", "todos");
  const [showModal, setShowModal] = useState(null);

  const addCost = () => {
    if (!selectType) return setError("Selecciona el tipo de pago");
    if (!Number(money)) return setError("Ingresa una cantidad");
    const date = new Date(Date.now()).toLocaleDateString("es-MX");

    const obj = {
      id: Date.now(),
      quantity: Number(money).toFixed(2),
      descriptions: description,
      type: selectType,
      date: date,
    };
    setCosts((prev) => [...prev, obj]);

    setSelectType("");
    setMoney("");
    setDescription("");
    setError("");
  };

  const isShowed = (id) => {
    setShowModal(id);
  };

  const borrar = (id) => {
    setCosts((prev) => prev.filter((cost) => cost.id !== id));
  };

  const totalIngresos = costs
    .filter((cost) => cost.type === "ingreso")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const totalGastos = costs
    .filter((cost) => cost.type === "gasto")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const total = totalIngresos - totalGastos;

  const filteredCost = costs.filter((cost) => {
    if (filtered === "ingresos") return cost.type === "ingreso";
    if (filtered === "gastos") return cost.type === "gasto";
    return true;
  });

  return (
    <main>
      <section className="flex flex-col gap-8 pt-10 items-center mx-auto max-w-2xl pb-10">
        <h1 className="text-white text-4xl font-bold">Gestor de gastos</h1>

        <div className="grid grid-cols-3 w-full justify-between gap-6 text-xl">
          <div className="bg-green-900 text-white p-4 font-medium rounded-md ">
            <h4>Ingresos</h4>
            <span>$ {totalIngresos.toFixed(2)}</span>
          </div>

          <div className="bg-red-900 text-white p-4 font-medium rounded-md">
            <h4>Gastos</h4>
            <span>$ {totalGastos.toFixed(2)}</span>
          </div>

          <div className="bg-cyan-900 text-white p-4 font-medium rounded-md">
            <h4>Total</h4>
            <span>$ {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-3 w-full justify-between">
          <select
            value={selectType}
            onChange={(e) => setSelectType(e.target.value)}
            className="bg-slate-600 rounded-md p-3 text-white font-medium cursor-pointer"
          >
            <option value="">Selecciona el tipo</option>
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>

          <input
            className="bg-white rounded-md p-[0.3rem] text-black"
            placeholder="Monto"
            type="number"
            step="0.01"
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
        <span className="text-red-900 -mb-5 -mt-5 font-medium">{error}</span>

        <article className="flex flex-col gap-4 text-white font-medium p-6 bg-slate-700 w-full h-auto rounded-xl">
          <div className="flex gap-8">
            <button
              className="bg-cyan-800 p-2 w-full rounded-md hover:bg-cyan-700 cursor-pointer"
              onClick={() => setFiltered("todos")}
            >
              Todos
            </button>
            <button
              className="bg-green-800 p-2 w-full rounded-md hover:bg-green-700 cursor-pointer"
              onClick={() => setFiltered("ingresos")}
            >
              Ingresos
            </button>
            <button
              className="bg-red-800 p-2 w-full rounded-md hover:bg-red-700 cursor-pointer"
              onClick={() => setFiltered("gastos")}
            >
              Gastos
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center pt-6">
            {filteredCost.length === 0 ? (
              <span className="text-lg">No hay datos registrados</span>
            ) : (
              <>
                {[...filteredCost].reverse().map((cost) => (
                  <div
                    key={cost.id}
                    className={
                      cost.type === "ingreso"
                        ? "flex flex-col gap-6 p-6 rounded-lg bg-green-900 w-xl"
                        : "flex flex-col gap-6 p-6 rounded-lg bg-red-900 w-xl"
                    }
                  >
                    <div className="flex flex-row justify-between">
                      <span>${cost.quantity}</span>
                      <span>{cost.type.toUpperCase()}</span>
                    </div>

                    <div className="flex justify-between">
                      <p>
                        descripcion:{" "}
                        {!cost.descriptions
                          ? "Sin descipcion"
                          : cost.descriptions}
                      </p>
                      <span className="text-end">{cost.date}</span>
                    </div>

                    <div>
                      {showModal === cost.id ? (
                        <div className="flex flex-col gap-8 text-center bg-slate-800 p-4 rounded-xl">
                          <p>
                            Seguro que quieres eliminar el {cost.type} de $
                            {cost.quantity}?
                          </p>

                          <div className="flex justify-around">
                            <button
                              onClick={() => borrar(cost.id)}
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
                        </div>
                      ) : (
                        <div className="flex gap-2 justify-end">
                          <button className="bg-cyan-800 p-2 rounded-md cursor-pointer hover:bg-cyan-900">Editar</button>
                          <button onClick={() => isShowed(cost.id)} className="bg-cyan-800 p-2 rounded-md cursor-pointer hover:bg-cyan-900">
                            Eliminar
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
