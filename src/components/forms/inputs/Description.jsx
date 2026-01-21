import React from "react";

export function Description({description, setDescription}) {
  return (
    <input
      className="bg-white rounded-md w-full p-3 text-black"
      placeholder="Descripcion (Opcional)"
      value={description}
      type="text"
      onChange={(e) => setDescription(e.target.value)}
    />
  );
}
