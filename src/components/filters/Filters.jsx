import { All } from "./buttons/All";
import { Cost } from "./buttons/Cost";
import { Deposit } from "./buttons/Deposit";

export function Filters({setFiltered}) {
  return (
    <>
      <All setFiltered={setFiltered}/>
      <Cost setFiltered={setFiltered}/>
      <Deposit setFiltered={setFiltered}/>
    </>
  )
}
