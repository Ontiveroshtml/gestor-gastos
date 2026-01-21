export function TotalCost({ cost }) {

  const totalIngresos = cost
    .filter((cost) => cost.type === "ingreso")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const totalGastos = cost
    .filter((cost) => cost.type === "gasto")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const total = totalIngresos - totalGastos;

  return (
    <section className="flex flex-col gap-8 p-3 mt-4 items-center mx-auto md:max-w-4xl">
      <h1 className="text-white text-4xl font-bold">Gestor de gastos</h1>

      <div className="grid grid-cols-3 items-center justify-center gap-6 md:w-full">
        <div className="bg-green-900 text-white p-3 text-lg font-medium rounded-md ">
          <h4>Ingresos</h4>
          <span>${totalIngresos.toFixed(2)}</span>
        </div>

        <div className="bg-red-900 text-white p-3 text-lg font-medium rounded-md">
          <h4>Gastos</h4>
          <span>${totalGastos.toFixed(2)}</span>
        </div>

        <div className="bg-slate-700 text-white p-3 text-lg font-medium rounded-md">
          <h4>Total</h4>
          <span className={total < 0 ? 'text-red-800' : 'text-green-500'}>${total.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}
