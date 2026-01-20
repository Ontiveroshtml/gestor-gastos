export function TotalCost({ cost }) {

  const totalIngresos = cost
    .filter((cost) => cost.type === "ingreso")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const totalGastos = cost
    .filter((cost) => cost.type === "gasto")
    .reduce((acc, cost) => acc + Number(cost.quantity), 0);

  const total = totalIngresos - totalGastos;
  
  return (
    <section className="flex flex-col gap-8 pt-10 items-center mx-auto max-w-2xl">
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
    </section>
  );
}
