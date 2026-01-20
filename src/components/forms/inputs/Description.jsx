import React from "react";

export function Description({description, setDescription}) {
  return (
    <input
      className="bg-white rounded-md p-[0.3rem] text-black"
      placeholder="Descripcion (Opcional)"
      value={description}
      type="text"
      onChange={(e) => setDescription(e.target.value)}
    />
  );
}
