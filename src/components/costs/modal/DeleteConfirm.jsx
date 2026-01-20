import { Confirm } from "./buttons/Confirm";
import { Delete } from "./buttons/Delete";
import { Edit } from "./buttons/Edit";

export function DeleteConfirm({
  onShowModal,
  cost,
  onDelete,
  setShowModal,
  onIsShowed,
}) {
  return (
    <>
      {onShowModal === cost.id ? (
        <div className="flex flex-col gap-8 text-center bg-slate-800 p-4 rounded-xl">
          <p>
            Seguro que quieres eliminar el {cost.type} de ${cost.quantity}?
          </p>

          <Confirm
            onDelete={onDelete}
            setShowModal={setShowModal}
            cost={cost}
          />
        </div>
      ) : (
        <div className="flex gap-2 justify-end">
          <Delete onIsShowed={onIsShowed} cost={cost} />
          <Edit />
        </div>
      )}
    </>
  );
}
