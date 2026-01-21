import { useState } from "react";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TotalCost } from "./components/totalcost/TotalCost";
import { Forms } from "./components/forms/Forms";
import { AddCostButton } from "./components/forms/button/AddCostButton";
import { Filters } from "./components/filters/Filters";
import { RenderCosts } from "./components/costs/RenderCosts";
import { useEffect } from "react";

function App() {
  const getToday = () => {
    return new Date().toLocaleDateString("es-MX");
  };

  const [money, setMoney] = useState("");
  const [description, setDescription] = useState("");
  const [selectType, setSelectType] = useState("");
  const [costs, setCosts] = useLocalStorage("cost", []);
  const [error, setError] = useState("");
  const [succesful, setSuccesful] = useState("");
  const [filtered, setFiltered] = useLocalStorage("filter", "todos");
  const [showModal, setShowModal] = useState(null);

  const [lastSavedDate, setLastSavedDate] = useLocalStorage(
    "lastdate",
    getToday(),
  );
  const [saved, setSaved] = useLocalStorage("saved", []);

  const addCost = () => {
    if (!selectType) return setError("Selecciona el tipo de pago");
    if (!Number(money)) return setError("Ingresa una cantidad");

    const obj = {
      id: crypto.randomUUID(),
      quantity: Number(money).toFixed(2),
      descriptions: description,
      type: selectType,
      date: getToday(),
    };
    setCosts((prev) => [...prev, obj]);

    setSelectType("");
    setMoney("");
    setDescription("");
    setError("");

    setSuccesful("Monto agregado correctamente");

    setTimeout(() => {
      setSuccesful("");
    }, 3000);
  };

  const isShowed = (id) => {
    setShowModal(id);
  };

  const onDelete = (id) => {
    setCosts((prev) => prev.filter((cost) => cost.id !== id));
  };

  const filteredCost = costs.filter((cost) => {
    if (filtered === "ingresos") return cost.type === "ingreso";
    if (filtered === "gastos") return cost.type === "gasto";
    return true;
  });

  const totalIngresos = costs
    .filter((cost) => cost.type === "ingreso")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const totalGastos = costs
    .filter((cost) => cost.type === "gasto")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const total = totalIngresos - totalGastos;

  const today = getToday();

  const showTodayTotals = today === today

  const displayIngresos = showTodayTotals ? totalIngresos : 0
  const displayGastos = showTodayTotals ? totalGastos : 0
  const displayTotal = showTodayTotals ? total : 0

  useEffect(() => {
    const today = getToday();

    if (today !== lastSavedDate && costs.length > 0) {
      setSaved((prev) => [
        ...prev,
        { id: crypto.randomUUID(), total, fecha: lastSavedDate },
      ]);

      setLastSavedDate(today);
    }
  }, [costs, total, lastSavedDate]);

  return (
    <main>
      <TotalCost
        totalIngresos={displayIngresos}
        totalGastos={displayGastos}
        total={displayTotal}
        lastTotal={saved[saved.length - 1]?.total}
        lastSavedDate={lastSavedDate}
      />

      <section className="flex flex-col gap-8 p-3 items-center mx-auto max-w-4xl ">
        <div className="flex flex-col gap-3 w-full justify-between md:flex-row">
          <Forms
            type={selectType}
            setSelectType={setSelectType}
            money={money}
            setMoney={setMoney}
            description={description}
            setDescription={setDescription}
          />

          <AddCostButton onAddCost={addCost} />
        </div>
        {error ? (
          <span className="text-red-900 -mb-5 -mt-5 font-medium">{error}</span>
        ) : (
          <span className="text-green-500 -mb-5 -mt-5 font-medium">
            {succesful}
          </span>
        )}

        <article className="flex flex-col gap-4 text-white font-medium p-6 bg-slate-700 w-full h-auto rounded-xl">
          <div className="flex gap-8">
            <Filters setFiltered={setFiltered} />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center pt-6">
            {filteredCost.length === 0 ? (
              <span className="text-lg">No hay datos registrados</span>
            ) : (
              <>
                <RenderCosts
                  filteredCost={filteredCost}
                  onDelete={onDelete}
                  setShowModal={setShowModal}
                  onShowModal={showModal}
                  onIsShowed={isShowed}
                />
              </>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
