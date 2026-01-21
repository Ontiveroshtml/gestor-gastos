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
          key={cost.id}
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
