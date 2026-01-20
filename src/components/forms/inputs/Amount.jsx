import React from "react";

export function Amount({money, setMoney}) {
  return (
    <input
      className="bg-white rounded-md p-[0.3rem] text-black"
      placeholder="Monto"
      type="number"
      step="0.01"
      value={money}
      onChange={(e) => setMoney(e.target.value)}
    />
  );
}
