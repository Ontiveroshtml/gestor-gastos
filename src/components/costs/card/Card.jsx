export function Card({ cost }) {
  const {quantity, type, descriptions, date} = cost

  return (
    <>
      <div className="flex flex-row justify-between">
        <span>${quantity}</span>
        <span>{type.toUpperCase()}</span>
      </div>

      <div className="flex justify-between">
        <p>
          descripcion:{" "}
          {!descriptions ? "Sin descipcion" : descriptions}
        </p>
        <span className="text-end">{date}</span>
      </div>
    </>
  );
}
