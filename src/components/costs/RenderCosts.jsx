import Items from "./card/Items";

export function RenderCosts({
  filteredCost,
  onShowModal,
  onDelete,
  setShowModal,
  onIsShowed,
}) {
  return (
    <>
      {[...filteredCost].reverse().map((cost) => (
        <Items
          cost={cost}
          onShowModal={onShowModal}
          onDelete={onDelete}
          setShowModal={setShowModal}
          onIsShowed={onIsShowed}
        />
      ))}
    </>
  );
}
