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
      className={
        cost.type === "ingreso"
          ? "flex flex-col gap-6 p-6 rounded-lg bg-green-900 w-full"
          : "flex flex-col gap-6 p-6 rounded-lg bg-red-900 w-full"
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
