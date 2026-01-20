import { Card } from "./Card";
import { DeleteConfirm } from "../modal/DeleteConfirm";
export default function Items({
  cost,
  onShowModal,
  onDelete,
  setShowModal,
  onIsShowed,
}) {
  return (
    <div
      key={cost.id}
      className={
        cost.type === "ingreso"
          ? "flex flex-col gap-6 p-6 rounded-lg bg-green-900 w-xl"
          : "flex flex-col gap-6 p-6 rounded-lg bg-red-900 w-xl"
      }
    >
      <Card cost={cost} />

      <DeleteConfirm
        onShowModal={onShowModal}
        cost={cost}
        onDelete={onDelete}
        setShowModal={setShowModal}
        onIsShowed={onIsShowed}
      />
    </div>
  );
}
