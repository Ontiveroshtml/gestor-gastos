import { SelectType } from "./inputs/SelectType";
import { Description } from "./inputs/Description";
import { Amount } from "./inputs/Amount";

export function Forms({type, setSelectType, money, setMoney, description, setDescription}) {
  return (
    <>
      <SelectType type={type} setSelectType={setSelectType} />
      <Amount money={money} setMoney={setMoney} />
      <Description description={description} setDescription={setDescription} />
    </>
  );
}
